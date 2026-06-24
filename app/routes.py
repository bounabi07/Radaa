import os
import time
import json
import base64
import smtplib
import requests as req
import dns.resolver
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart
from dotenv import load_dotenv
from flask import Blueprint, render_template, request, redirect, url_for, session, flash, jsonify, current_app
from werkzeug.security import generate_password_hash, check_password_hash
from werkzeug.utils import secure_filename
from itsdangerous import URLSafeTimedSerializer
from authlib.integrations.flask_client import OAuth

from . import db
from .models import User, MessageLog, LinkLog, FileLog, EmailLog
from flask import session, redirect, url_for, request
load_dotenv()

main = Blueprint('main', __name__)
oauth = OAuth()

def init_oauth(app):
    oauth.init_app(app)
    oauth.register(
        name='google',
        client_id=os.getenv('GOOGLE_CLIENT_ID'),
        client_secret=os.getenv('GOOGLE_CLIENT_SECRET'),
        server_metadata_url='https://accounts.google.com/.well-known/openid-configuration',
        client_kwargs={'scope': 'openid email profile'}
    )

SMTP_SERVER = "smtp.gmail.com"
SMTP_PORT = 587
SENDER_EMAIL = "radaaplatform@gmail.com"
SENDER_PASSWORD = "inwleeopycxcajhc" 

def send_activation_email(user_email, activation_link):
    msg = MIMEMultipart()
    msg['From'] = SENDER_EMAIL
    msg['To'] = user_email
    msg['Subject'] = "Activate Your RADAA Account"

    body = f"Welcome to RADAA!\n\nPlease click the link below to verify your email address and activate your account:\n{activation_link}\n\nThis link will expire in 2 hours."
    msg.attach(MIMEText(body, 'plain'))
    try:
        server = smtplib.SMTP(SMTP_SERVER, SMTP_PORT)
        server.starttls()
        server.login(SENDER_EMAIL, SENDER_PASSWORD)
        server.sendmail(SENDER_EMAIL, user_email, msg.as_string())
        server.quit()
        return True
    except Exception as e:
        print(f"Activation Email Error: {e}")
        return False

def send_reset_email(user_email, reset_link):
    msg = MIMEMultipart()
    msg['From'] = SENDER_EMAIL
    msg['To'] = user_email
    msg['Subject'] = "Reset Your Password - RADAA"

    body = f"Hello,\n\nYou requested to reset your password. Please click the link below to set a new password:\n{reset_link}\n\nThis link will expire in 1 hour."
    msg.attach(MIMEText(body, 'plain'))
    try:
        server = smtplib.SMTP(SMTP_SERVER, SMTP_PORT)
        server.starttls()
        server.login(SENDER_EMAIL, SENDER_PASSWORD)
        server.sendmail(SENDER_EMAIL, user_email, msg.as_string())
        server.quit()
        return True
    except Exception as e:
        print(f"SMTP Error: {e}")
        return False

@main.route('/')
def index():
    return render_template('index.html')

@main.route('/about')
def about():
    return render_template('about.html')

@main.route('/messages')
def messages_page():
    return render_template('messages.html')

@main.route('/email')
def email_page():
    return render_template('email.html')

@main.route('/advice')
def advice():
    return render_template('advice.html')

@main.route('/links')
def links():
    return render_template('links.html')

@main.route('/files')
def files_page():
    return render_template('files.html')

@main.route('/logout')
def logout():
    session.clear()
    return redirect(url_for('main.login'))

@main.route('/login', methods=['GET', 'POST'])
def login():
    if request.method == 'POST':
        email = request.form.get('email').strip()
        password = request.form.get('password')
        username = request.form.get('username')

        if username:
            existing = User.query.filter_by(email=email).first()
            if existing:
                return render_template('connecte.html', error='البريد الإلكتروني مستخدم مسبقاً')

            hashed_pw = generate_password_hash(password)
            new_user = User(username=username, email=email, password=hashed_pw)
            db.session.add(new_user)
            db.session.commit()
            
            s = URLSafeTimedSerializer("SUPER_SECRET_KEY")
            token = s.dumps(email, salt='email-activation-salt')
            activation_link = url_for('main.activate_account', token=token, _external=True)
            
            if send_activation_email(email, activation_link):
                return render_template('connecte.html', success='تم إنشاء الحساب بنجاح! يرجى التحقق من بريدك الإلكتروني لتفعيله قبل تسجيل الدخول.')
            else:
                return render_template('connecte.html', error='تم إنشاء الحساب، ولكن فشل إرسال بريد التفعيل. يرجى المحاولة لاحقاً.')

        user = User.query.filter_by(email=email).first()
        if not user:
            return render_template('connecte.html', error='البريد الإلكتروني غير موجود')
        if not check_password_hash(user.password, password):
            return render_template('connecte.html', error='كلمة المرور غير صحيحة')
        if not user.is_verified:
            return render_template('connecte.html', error='حسابك غير مفعّل بعد! يرجى مراجعة بريدك الإلكتروني وضغط رابط التفعيل.')

        session['logged_in'] = True
        session['username'] = user.username
        session['user_id'] = user.id
        return redirect(url_for('main.index'))
    
    return render_template('connecte.html')

@main.route('/activate/<token>')
def activate_account(token):
    s = URLSafeTimedSerializer("SUPER_SECRET_KEY")
    try:
        email = s.loads(token, salt='email-activation-salt', max_age=7200)
    except:
        return render_template('connecte.html', error="رابط التفعيل غير صالح أو انتهت صلاحيته.")

    user = User.query.filter_by(email=email).first()
    if user:
        if user.is_verified:
            return render_template('connecte.html', success="الحساب مفعّل بالفعل! يمكنك تسجيل الدخول.")
        else:
            user.is_verified = True
            db.session.commit()
            return render_template('connecte.html', success="تم تفعيل حسابك بنجاح! يمكنك الآن تسجيل الدخول.")
    else:
        return render_template('connecte.html', error="المستخدم غير موجود.")

@main.route('/forgot-password', methods=['GET', 'POST'])
def forgot_password():
    if request.method == 'POST':
        email = request.form.get('email').strip()
        user = User.query.filter_by(email=email).first()
        
        if user:
            s = URLSafeTimedSerializer("SUPER_SECRET_KEY")
            token = s.dumps(email, salt='password-reset-salt')
            reset_link = url_for('main.reset_password', token=token, _external=True)
            
            if send_reset_email(email, reset_link):
                flash("A reset link has been sent to your email.", "success")
            else:
                flash("Failed to send email. Try again later.", "danger")
        else:
            flash("If the email exists, a reset link has been sent.", "info")
            
        return redirect(url_for('main.forgot_password'))
        
    return render_template('forgot_password.html')

@main.route('/reset-password/<token>', methods=['GET', 'POST'])
def reset_password(token):
    s = URLSafeTimedSerializer("SUPER_SECRET_KEY")
    try:
        email = s.loads(token, salt='password-reset-salt', max_age=3600)
    except:
        flash("The reset link is invalid or has expired.", "danger")
        return redirect(url_for('main.forgot_password'))

    if request.method == 'POST':
        new_password = request.form.get('password')
        confirm_password = request.form.get('confirm_password')

        if new_password != confirm_password:
            flash("Confirm password doesn't match!", "danger")
            return redirect(url_for('main.reset_password', token=token))

        user = User.query.filter_by(email=email).first()
        if user:
            user.password = generate_password_hash(new_password, method='scrypt')
            db.session.commit()
            flash("password_updated_success", "success")
            return redirect(url_for('main.login'))
            
    return render_template('reset_password.html', token=token)

@main.route('/save_message', methods=['POST'])
def save_message():
    if not session.get('logged_in'):
        return jsonify({'error': 'غير مصرح'}), 401

    data = request.get_json()
    content = data.get('content', '')
    is_spam = data.get('is_spam', False)

    log = MessageLog(user_id=session['user_id'], content=content, is_spam=is_spam)
    db.session.add(log)
    db.session.commit()
    return jsonify({'success': True})

@main.route('/save_link', methods=['POST'])
def save_link():
    if not session.get('logged_in'):
        return jsonify({'error': 'غير مصرح'}), 401

    data = request.get_json()
    url = data.get('url', '')
    is_safe = data.get('is_safe', True)

    log = LinkLog(user_id=session['user_id'], url=url, is_safe=is_safe)
    db.session.add(log)
    db.session.commit()
    return jsonify({'success': True})

@main.route('/save_file', methods=['POST'])
def save_file():
    if not session.get('logged_in'):
        return jsonify({'error': 'غير مصرح'}), 401

    data = request.get_json()
    filename = data.get('filename', '')
    is_safe = data.get('is_safe', True)

    log = FileLog(user_id=session['user_id'], filename=filename, is_safe=is_safe)
    db.session.add(log)
    db.session.commit()
    return jsonify({'success': True})

@main.route('/ai_detect', methods=['POST'])
def ai_detect():
    if not session.get('logged_in'):
        return jsonify({'error': 'غير مصرح'}), 401

    import re
    data = request.get_json()
    text = data.get('text', '')
    lang = data.get('lang', 'en')

    OPENROUTER_API_KEY = os.getenv('OPENROUTER_API_KEY')
    url = "https://openrouter.ai/api/v1/chat/completions"
    lang_name = "Arabic" if lang in ['ar', 'ary'] else "French" if lang == 'fr' else "English"

    prompt = f"""You are a JSON-only cybersecurity classifier. You MUST respond with ONLY a JSON object, no explanations, no conversation.

Analyze this text for spam, phishing, or scam indicators:
"{text}"

Rules:
- verdict MUST be exactly one of: SPAM, WARNING, SAFE
- risk_score MUST be a number 0-100
- Response MUST be valid JSON only, nothing else

{{"verdict": "SPAM", "risk_score": 85, "title": "Phishing Attempt", "explanation": "explanation in {lang_name}"}}"""

    try:
        response = req.post(url,
            headers={
                "Authorization": f"Bearer {OPENROUTER_API_KEY}",
                "Content-Type": "application/json",
                "HTTP-Referer": "http://localhost:5000",
                "X-Title": "Radaa"
            },
            json={
                "model": "google/gemma-4-31b-it:free",
                "messages": [{"role": "user", "content": prompt}]
            }
        )
        raw = response.json()
        answer = raw['choices'][0]['message']['content']
        answer = answer.replace("```json", "").replace("```", "").strip()

        if not answer.startswith('{'):
            match = re.search(r'\{.*\}', answer, re.DOTALL)
            if match:
                answer = match.group()
            else:
                return jsonify({
                    "verdict": "WARNING",
                    "risk_score": 50,
                    "title": "Analysis Incomplete",
                    "explanation": "The AI could not analyze this message properly. Please try again."
                })

        result_json = json.loads(answer)

        verdict_status = result_json.get('verdict', 'SAFE')
        is_spam_result = True if verdict_status in ['SPAM', 'WARNING'] else False
        
        new_msg_log = MessageLog(
            user_id=session['user_id'],
            content=text,
            is_spam=is_spam_result
        )
        db.session.add(new_msg_log)
        db.session.commit()

        return jsonify(result_json)

    except Exception as e:
        return jsonify({'error': str(e)}), 500

@main.route('/ai_scan_link', methods=['POST'])
def ai_scan_link():
    if not session.get('logged_in'):
        return jsonify({'error': 'غير مصرح'}), 401

    data = request.get_json()
    url = data.get('url', '')
    lang = data.get('lang', 'en')

    OPENROUTER_API_KEY = os.getenv('OPENROUTER_API_KEY')
    api_url = "https://openrouter.ai/api/v1/chat/completions"
    lang_name = "Arabic" if lang in ['ar', 'ary'] else "French" if lang == 'fr' else "English"

    prompt = f"""You are a JSON-only cybersecurity classifier. You MUST respond with ONLY a JSON object, no explanations, no conversation.

Analyze this URL and determine if it is malicious, phishing, or safe:
"{url}"

Rules:
- verdict MUST be exactly one of: MALICIOUS, WARNING, SAFE
- risk_score MUST be a number 0-100
- Response MUST be valid JSON only, nothing else

{{"verdict": "MALICIOUS", "risk_score": 85, "title": "Typosquatting Domain", "explanation": "detailed explanation in {lang_name}"}}"""

    try:
        response = req.post(api_url,
            headers={
                "Authorization": f"Bearer {OPENROUTER_API_KEY}",
                "Content-Type": "application/json",
                "HTTP-Referer": "http://localhost:5000",
                "X-Title": "Radaa"
            },
            json={
                "model": "google/gemma-4-31b-it:free",
                "messages": [{"role": "user", "content": prompt}]
            }
        )
        raw = response.json()
        answer = raw['choices'][0]['message']['content'].replace("```json", "").replace("```", "").strip()
        return jsonify(json.loads(answer))
    except Exception as e:
        return jsonify({'error': str(e)}), 500

@main.route('/ai_scan_file', methods=['POST'])
def ai_scan_file():
    if not session.get('logged_in'):
        return jsonify({'error': 'غير مصرح'}), 401

    data = request.get_json()
    filename = data.get('filename', '')
    extension = data.get('extension', '')
    size = data.get('size', 0)
    file_b64 = data.get('file_data', '')  
    lang = data.get('lang', 'en')

    VT_API_KEY = os.getenv('VIRUSTOTAL_API_KEY')
    lang_name = "Arabic" if lang in ['ar', 'ary'] else "French" if lang == 'fr' else "English"

    vt_result = None
    try:
        file_bytes = base64.b64decode(file_b64)
        upload_response = req.post(
            "https://www.virustotal.com/api/v3/files",
            headers={"x-apikey": VT_API_KEY},
            files={"file": (filename, file_bytes)}
        )
        upload_data = upload_response.json()
        analysis_id = upload_data.get("data", {}).get("id")

        if analysis_id:
            max_attempts = 18
            wait_seconds = 10
            for attempt in range(max_attempts):
                time.sleep(wait_seconds)
                report_response = req.get(
                    f"https://www.virustotal.com/api/v3/analyses/{analysis_id}",
                    headers={"x-apikey": VT_API_KEY}
                )
                vt_result = report_response.json()
                status = vt_result.get("data", {}).get("attributes", {}).get("status")
                if status == "completed":
                    break
    except Exception as e:
        print("VT ERROR:", str(e))
        vt_result = None

    if vt_result and vt_result.get("data", {}).get("attributes", {}).get("status") == "completed":
        stats = vt_result["data"]["attributes"]["stats"]
        malicious = stats.get("malicious", 0)
        suspicious = stats.get("suspicious", 0)
        undetected = stats.get("undetected", 0)
        total = malicious + suspicious + undetected + stats.get("harmless", 0)
        detection_ratio = malicious / total if total > 0 else 0

        messages = {
            "ar": {
                "malware_title": f"⚠️ تم اكتشاف برمجية خبيثة بواسطة {malicious} محرك",
                "malware_desc": f"فحص VirusTotal الملف بـ {total} محرك. {malicious} صنفه كخبيث، {suspicious} كمشبوه.",
                "low_detection_title": f"⚠️ تحذير منخفض الخطورة ({malicious}/{total})",
                "low_detection_desc": f"فقط {malicious} من أصل {total} محرك صنف الملف كمشبوه.",
                "suspicious_title": f"⚠️ ملف مشبوه ({suspicious} تحذير)",
                "suspicious_desc": f"فحص وصنف {suspicious} محرك كملف مشبوه.",
                "safe_title": "✅ ملف نظيف",
                "safe_desc": "فحص VirusTotal الملف ولم يجد أي تهديد."
            },
            "en": {
                "malware_title": f"⚠️ Malware Detected by {malicious} Engines",
                "malware_desc": f"VirusTotal flagged this file as malicious in {malicious} engines.",
                "low_detection_title": f"⚠️ Low-Risk Flag ({malicious}/{total} engines)",
                "low_detection_desc": f"Only {malicious} out of {total} engines flagged this file.",
                "suspicious_title": f"⚠️ Suspicious File ({suspicious} flags)",
                "suspicious_desc": f"{suspicious} engines flagged this file as suspicious.",
                "safe_title": "✅ Clean File",
                "safe_desc": "No threats found."
            }
        }

        lang_key = lang if lang in messages else "en"
        m = messages[lang_key]

        if malicious > 0:
            if detection_ratio >= 0.15:
                verdict, risk_score = "SPAM", min(95, 50 + malicious * 5)
                title, explanation = m["malware_title"], m["malware_desc"]
            else:
                verdict, risk_score = "WARNING", 25
                title, explanation = m["low_detection_title"], m["low_detection_desc"]
        elif suspicious > 0:
            dict, risk_score = "WARNING", 50
            title, explanation = m["suspicious_title"], m["suspicious_desc"]
        else:
            verdict, risk_score = "SAFE", 5
            title, explanation = m["safe_title"], m["safe_desc"]

        return jsonify({
            "verdict": verdict, "risk_score": risk_score, "title": title,
            "explanation": explanation, "vt_stats": stats, "vt_total_engines": total
        })

    OPENROUTER_API_KEY = os.getenv('OPENROUTER_API_KEY')
    api_url = "https://openrouter.ai/api/v1/chat/completions"
    prompt = f"""You are a cybersecurity expert. VirusTotal scan was unavailable. Analyze this file based on metadata only.\nFile name: "{filename}" \nExtension: "{extension}" \nSize: {size} bytes\nRespond ONLY in this exact JSON format:\n{{ "verdict": "SPAM", "risk_score": 85, "title": "short title", "explanation": "detailed explanation in {lang_name}" }}"""

    try:
        response = req.post(api_url,
            headers={
                "Authorization": f"Bearer {OPENROUTER_API_KEY}",
                "Content-Type": "application/json",
                "HTTP-Referer": "http://localhost:5000",
                "X-Title": "Radaa"
            },
            json={
                "model": "google/gemma-4-31b-it:free",
                "messages": [{"role": "user", "content": prompt}]
            }
        )
        raw = response.json()
        answer = raw['choices'][0]['message']['content'].replace("```json", "").replace("```", "").strip()
        return jsonify(json.loads(answer))
    except Exception as e:
        return jsonify({'error': str(e)}), 500

@main.route('/check_email', methods=['POST'])
def check_email():
    if not session.get('logged_in'):
        return jsonify({'error': 'غير مصرح'}), 401

    data = request.get_json()
    email = data.get('email', '')

    result = {
        'leaks': {'status': 'success', 'leakcheck_found': 0, 'xposed_breaches': []},
        'validation': {}, 'exposed_data': {}, 'recommendations': []
    }

    lc_breaches, lc_count = [], 0
    try:
        lc_response = req.get(f"https://leakcheck.io/api/public?check={email}", timeout=5)
        if lc_response.status_code == 200:
            lc_data = lc_response.json()
            if isinstance(lc_data, dict) and lc_data.get("success"):
                lc_count = int(lc_data.get("found", 0))
                if "sources" in lc_data:
                    for src in lc_data["sources"]:
                        name = src.get("name") if isinstance(src, dict) else str(src)
                        if name: lc_breaches.append(name)
    except Exception as e:
        print("LeakCheck Error:", str(e))

    xon_breaches = []
    try:
        xon_response = req.get(f"https://api.xposedornot.com/v1/check-email/{email}", timeout=5)
        if xon_response.status_code == 200:
            xon_data = xon_response.json()
            if isinstance(xon_data, dict) and "breaches" in xon_data:
                raw_breaches = xon_data["breaches"]
                if isinstance(raw_breaches, list):
                    for item in raw_breaches:
                        if isinstance(item, list): xon_breaches.extend([str(b) for b in item if b])
                        elif item: xon_breaches.append(str(item))
    except Exception as e:
        print("XposedOrNot Error:", str(e))

    all_breach_names = list(set(lc_breaches + xon_breaches))
    total_leaks = max(lc_count, len(all_breach_names))
    
    result['leaks']['leakcheck_found'] = total_leaks
    result['leaks']['xposed_breaches'] = all_breach_names

    if total_leaks > 0:
        result['exposed_data'] = {"Emails": True, "Passwords": True, "Usernames": True}
        result['recommendations'] = [
            "Change your password immediately on affected platforms.",
            "Enable Two-Factor Authentication (2FA) wherever available.",
            "Monitor your accounts for any suspicious log-in attempts."
        ]
    else:
        result['recommendations'] = [
            "Your email looks safe based on public logs.",
            "Enable login notifications on your critical accounts."
        ]

    try:
        domain = email.split('@')[1].lower() if '@' in email else ''
        is_valid_format = ('@' in email) and ('.' in domain)
        try:
            mx_records = dns.resolver.resolve(domain, 'MX') if domain else []
            is_mx_found = len(mx_records) > 0
        except:
            is_mx_found = False

        is_free = domain in ['gmail.com', 'yahoo.com', 'hotmail.com', 'outlook.com']
        quality = 0.9 if (is_valid_format and is_mx_found) else 0.2

        result['validation'] = {
            "is_valid_format": {"value": is_valid_format},
            "is_mx_found": {"value": is_mx_found},
            "is_smtp_valid": {"value": is_mx_found},
            "is_disposable_email": {"value": False},
            "is_free_email": {"value": is_free},
            "quality_score": quality
        }
    except Exception:
        result['validation'] = {
            "is_valid_format": {"value": True}, "is_mx_found": {"value": True},
            "is_smtp_valid": {"value": True}, "is_disposable_email": {"value": False},
            "is_free_email": {"value": True}, "quality_score": 0.8
        }

    is_email_spam = True if total_leaks > 0 else False
    new_email_log = EmailLog(
        user_id=session['user_id'],
        content=email,
        is_spam=is_email_spam
    )
    db.session.add(new_email_log)
    db.session.commit()

    return jsonify(result)

@main.route('/auth/google')
def google_login():
    redirect_uri = url_for('main.google_callback', _external=True)
    return oauth.google.authorize_redirect(redirect_uri)

@main.route('/auth/google/callback')
def google_callback():
    try:
        token = oauth.google.authorize_access_token()
        user_info = token.get('userinfo')

        if not user_info:
            return redirect(url_for('main.login'))

        email = user_info.get('email')
        name = user_info.get('name', email.split('@')[0])
        picture = user_info.get('picture', 'default.jpg')

        user = User.query.filter_by(email=email).first()

        if not user:
            user = User(
                username=name,
                email=email,
                password=generate_password_hash(os.urandom(16).hex()),
                profile_image=picture,
                is_verified=True
            )
            db.session.add(user)
            db.session.commit()

        session['logged_in'] = True
        session['username'] = user.username
        session['user_id'] = user.id

        return redirect(url_for('main.index'))

    except Exception as e:
        print("Google OAuth Error:", str(e))
        return redirect(url_for('main.login'))

@main.route('/dashboard')
def dashboard():
    if not session.get('logged_in'):
        return redirect(url_for('main.login'))
    
    user = User.query.get(session['user_id'])
    
    total_links = LinkLog.query.filter_by(user_id=user.id).count()
    total_files = FileLog.query.filter_by(user_id=user.id).count()
    total_messages = MessageLog.query.filter_by(user_id=user.id).count()
    total_emails = EmailLog.query.filter_by(user_id=user.id).count() 
    
    dangerous_links = LinkLog.query.filter_by(user_id=user.id, is_safe=False).count()
    dangerous_files = FileLog.query.filter_by(user_id=user.id, is_safe=False).count()
    dangerous_messages = MessageLog.query.filter_by(user_id=user.id, is_spam=True).count()
    dangerous_emails = EmailLog.query.filter_by(user_id=user.id, is_spam=True).count()
    
    total_threats = dangerous_links + dangerous_files + dangerous_messages + dangerous_emails
    
    recent_scans = LinkLog.query.filter_by(user_id=user.id).order_by(LinkLog.id.desc()).limit(5).all()
    recent_files = FileLog.query.filter_by(user_id=user.id).order_by(FileLog.id.desc()).limit(5).all()
    recent_messages = MessageLog.query.filter_by(user_id=user.id).order_by(MessageLog.id.desc()).limit(5).all()
    recent_emails = EmailLog.query.filter_by(user_id=user.id).order_by(EmailLog.id.desc()).limit(5).all()
    
    return render_template('dashboard.html',
                           username=user.username,
                           profile_image=user.profile_image,
                           user=user,
                           total_links=total_links,
                           total_files=total_files,
                           total_messages=total_messages,
                           total_emails=total_emails,
                           total_threats=total_threats,
                           recent_scans=recent_scans,
                           recent_files=recent_files,
                           recent_messages=recent_messages,
                           recent_emails=recent_emails)   

@main.route('/update_profile', methods=['POST'])
def update_profile():
    if not session.get('logged_in'):
        return redirect(url_for('main.login'))

    user = User.query.get(session['user_id'])
    new_username = request.form.get('username').strip()
    profile_file = request.files.get('profile_image')
    
    if new_username:
        user.username = new_username
        session['username'] = new_username

    if profile_file and profile_file.filename != '':
        filename = secure_filename(f"user_{user.id}_{profile_file.filename}")
        upload_path = os.path.join(current_app.root_path, 'static', 'images', filename)
        
        os.makedirs(os.path.dirname(upload_path), exist_ok=True)
        profile_file.save(upload_path)
        user.profile_image = filename

    db.session.commit()
    flash("account_updated_success", "success")
    return redirect(url_for('main.dashboard'))

@main.before_request
def check_login():
    allowed_routes = [
        'main.login',
        'main.register', 
        'main.google_login',
        'main.google_callback',
        'main.activate_account',
        'main.forgot_password',
        'main.reset_password',
        'main.about',
        'static'
    ]
    
    if request.endpoint and request.endpoint not in allowed_routes:
        
        if not session.get('logged_in'):
            return redirect(url_for('main.login'))
            
        
        user = User.query.get(session.get('user_id'))
        if not user:
            session.clear()
            return redirect(url_for('main.login'))

@main.context_processor
def inject_user_data():
    if session.get('logged_in'):
        user = User.query.get(session.get('user_id'))
        if user:
            return {
                'user': user,
                'username': user.username,
                'profile_image': user.profile_image
            }
    
    return {
        'user': None,
        'username': '?',
        'profile_image': 'default.png'
    }