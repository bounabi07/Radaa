from flask import Blueprint, render_template, request, redirect, url_for, session, flash, jsonify
from werkzeug.security import generate_password_hash, check_password_hash
from . import db
from .models import User, MessageLog, LinkLog, FileLog
main = Blueprint('main', __name__)
import os
from dotenv import load_dotenv
load_dotenv()


@main.route('/')
def index():
    if not session.get('logged_in'):
        return redirect(url_for('main.login'))
    username = session.get('username', '')
    return render_template('index.html', username=username)

@main.route('/about')
def about():
    return render_template('about.html')



  
@main.route('/login', methods=['GET', 'POST'])
def login():
    if request.method == 'POST':
        email    = request.form.get('email')
        password = request.form.get('password')
        username = request.form.get('username')

        
        if username:
            existing = User.query.filter_by(email=email).first()
            if existing:
                flash('البريد الإلكتروني مستخدم مسبقاً')
                return render_template('connecte.html', error='البريد الإلكتروني مستخدم مسبقاً')

            hashed_pw = generate_password_hash(password)
            new_user  = User(username=username, email=email, password=hashed_pw)
            db.session.add(new_user)
            db.session.commit()
            return render_template('connecte.html', success='تم إنشاء الحساب! سجل دخولك الآن.')

      
        user = User.query.filter_by(email=email).first()

        if not user:
            return render_template('connecte.html', error='البريد الإلكتروني غير موجود')

        if not check_password_hash(user.password, password):
            return render_template('connecte.html', error='كلمة المرور غير صحيحة')

        session['logged_in'] = True
        session['username']  = user.username
        session['user_id']   = user.id
        return redirect(url_for('main.index'))

    return render_template('connecte.html')

@main.route('/messages')
def messages_page():
    if not session.get('logged_in'):
        return redirect(url_for('main.login'))
    username = session.get('username', 'مستخدم رَدْعْ')
    return render_template('messages.html', username=username)


@main.route('/email')
def email_page():
    if not session.get('logged_in'):
        return redirect(url_for('main.login'))
    username = session.get('username', '')
    return render_template('email.html', username=username)


@main.route('/advice')
def advice():
    if not session.get('logged_in'):
        return redirect(url_for('main.login'))
    username = session.get('username', '')
    return render_template('advice.html', username=username)


@main.route('/links')
def links():
    if not session.get('logged_in'):
        return redirect(url_for('main.login'))
    username = session.get('username', '')
    return render_template('links.html', username=username)


@main.route('/files')
def files_page():
    if not session.get('logged_in'):
        return redirect(url_for('main.login'))
    username = session.get('username', '')
    return render_template('files.html', username=username)


@main.route('/logout')
def logout():
    session.clear()
    return redirect(url_for('main.login'))

import requests as req

@main.route('/save_message', methods=['POST'])
def save_message():
    if not session.get('logged_in'):
        return jsonify({'error': 'غير مصرح'}), 401

    data = request.get_json()
    content = data.get('content', '')
    is_spam = data.get('is_spam', False)

    log = MessageLog(
        user_id=session['user_id'],
        content=content,
        is_spam=is_spam
    )
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

    log = LinkLog(
        user_id=session['user_id'],
        url=url,
        is_safe=is_safe
    )
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

    log = FileLog(
        user_id=session['user_id'],
        filename=filename,
        is_safe=is_safe
    )
    db.session.add(log)
    db.session.commit()
    return jsonify({'success': True})

@main.route('/ai_detect', methods=['POST'])
def ai_detect():
    if not session.get('logged_in'):
        return jsonify({'error': 'غير مصرح'}), 401

    data = request.get_json()
    text = data.get('text', '')
    lang = data.get('lang', 'en')

    import requests as req
    import json

    OPENROUTER_API_KEY = os.getenv('OPENROUTER_API_KEY')
    url = "https://openrouter.ai/api/v1/chat/completions"

    lang_name = "Arabic" if lang in ['ar', 'ary'] else "French" if lang == 'fr' else "English"

    prompt = f"""You are a cybersecurity expert. Analyze this text and determine if it is spam, phishing, scam, or safe.

Text: "{text}"

Respond ONLY in this exact JSON format with no extra text:
{{
  "verdict": "SPAM",
  "risk_score": 85,
  "title": "short title",
  "explanation": "detailed explanation in {lang_name}"
}}
verdict must be exactly: SPAM or SAFE or WARNING"""

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
        print("OPENROUTER RESPONSE:", raw)

        answer = raw['choices'][0]['message']['content']
        answer = answer.replace("```json", "").replace("```", "").strip()

        return jsonify(json.loads(answer))

    except Exception as e:
     print("ERROR:", str(e))
     return jsonify({'error': str(e)}), 500


@main.route('/ai_scan_link', methods=['POST'])
def ai_scan_link():
    if not session.get('logged_in'):
        return jsonify({'error': 'غير مصرح'}), 401

    import requests as req
    import json

    data = request.get_json()
    url = data.get('url', '')
    lang = data.get('lang', 'en')

    OPENROUTER_API_KEY = os.getenv('OPENROUTER_API_KEY')
    api_url = "https://openrouter.ai/api/v1/chat/completions"

    lang_name = (
        "Arabic" if lang in ['ar', 'ary']
        else "French" if lang == 'fr'
        else "English"
    )

    prompt = f"""You are a cybersecurity expert. Analyze this URL and determine if it is malicious, phishing, or safe.

URL: "{url}"

Respond ONLY in this exact JSON format:
{{
  "verdict": "SPAM",
  "risk_score": 85,
  "title": "short title",
  "explanation": "detailed explanation in {lang_name}"
}}

verdict must be exactly: SPAM or SAFE or WARNING"""

    try:
        response = req.post(
            api_url,
            headers={
                "Authorization": f"Bearer {OPENROUTER_API_KEY}",
                "Content-Type": "application/json",
                "HTTP-Referer": "http://localhost:5000",
                "X-Title": "Radaa"
            },
            json={
                "model": "google/gemma-4-31b-it:free",
                "messages": [
                    {
                        "role": "user",
                        "content": prompt
                    }
                ]
            }
        )

        raw = response.json()
        answer = raw['choices'][0]['message']['content']
        answer = answer.replace("```json", "").replace("```", "").strip()

        return jsonify(json.loads(answer))

    except Exception as e:
        return jsonify({'error': str(e)}), 500
    
@main.route('/ai_scan_file', methods=['POST'])
def ai_scan_file():
    if not session.get('logged_in'):
        return jsonify({'error': 'غير مصرح'}), 401

    import requests as req
    import json
    import hashlib
    import time
    import base64

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
                print(f"VT STATUS (attempt {attempt+1}):", status)

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
                "malware_desc": f"فحص VirusTotal الملف بـ {total} محرك antivirus. {malicious} محرك صنفه كخبيث، {suspicious} كمشبوه. هذا الملف خطير ولا يجب فتحه أو تثبيته.",
                "low_detection_title": f"⚠️ تحذير منخفض الخطورة ({malicious}/{total} محرك)",
                "low_detection_desc": f"فقط {malicious} من أصل {total} محرك antivirus صنف هذا الملف كمشبوه، وهذا غالباً يشير إلى تطبيق غير مرغوب فيه (PUA) أو نتيجة خاطئة وليس فيروساً مؤكداً. مع ذلك كن حذراً.",
                "suspicious_title": f"⚠️ ملف مشبوه ({suspicious} تحذير)",
                "suspicious_desc": f"فحص VirusTotal الملف بـ {total} محرك antivirus. {suspicious} محرك صنفه كمشبوه. يُرجى الحذر.",
                "safe_title": "✅ ملف نظيف",
                "safe_desc": f"فحص VirusTotal الملف بـ {total} محرك antivirus ولم يجد أي تهديد. الملف يبدو آمناً."
            },
            "fr": {
                "malware_title": f"⚠️ Malware Détecté par {malicious} Moteurs",
                "malware_desc": f"VirusTotal a scanné ce fichier avec {total} moteurs antivirus. {malicious} l'ont signalé comme malveillant, {suspicious} comme suspect. Ce fichier est dangereux.",
                "low_detection_title": f"⚠️ Alerte Faible Risque ({malicious}/{total} moteurs)",
                "low_detection_desc": f"Seulement {malicious} sur {total} moteurs ont signalé ce fichier, indiquant souvent une application potentiellement indésirable (PUA) plutôt qu'un malware confirmé. Restez prudent.",
                "suspicious_title": f"⚠️ Fichier Suspect ({suspicious} alertes)",
                "suspicious_desc": f"VirusTotal a scanné ce fichier avec {total} moteurs antivirus. {suspicious} l'ont signalé comme suspect.",
                "safe_title": "✅ Fichier Propre",
                "safe_desc": f"VirusTotal a scanné ce fichier avec {total} moteurs antivirus sans trouver de menace."
            },
            "ary": {
                "malware_title": f"⚠️ لقاو فيه فيروس من {malicious} محرك",
                "malware_desc": f"VirusTotal فحص الملف بـ {total} محرك antivirus. {malicious} محرك قال خطير، {suspicious} مشبوه. هاد الملف خطير ماشي ينحل.",
                "low_detection_title": f"⚠️ تحذير خفيف ({malicious}/{total} محرك)",
                "low_detection_desc": f"غير {malicious} من {total} محرك قالو مشبوه، هادشي غالباً كيبان تطبيق ماشي مرغوب فيه (PUA) ماشي فيروس مؤكد. ديما ردي بالك.",
                "suspicious_title": f"⚠️ ملف مشبوه ({suspicious} تحذير)",
                "suspicious_desc": f"VirusTotal فحص الملف بـ {total} محرك antivirus. {suspicious} قالو مشبوه.",
                "safe_title": "✅ ملف نقي",
                "safe_desc": f"VirusTotal فحص الملف بـ {total} محرك antivirus وما لقاش تا خطر."
            },
            "en": {
                "malware_title": f"⚠️ Malware Detected by {malicious} Engines",
                "malware_desc": f"VirusTotal scanned this file with {total} antivirus engines. {malicious} flagged it as malicious, {suspicious} as suspicious. This file is dangerous.",
                "low_detection_title": f"⚠️ Low-Risk Flag ({malicious}/{total} engines)",
                "low_detection_desc": f"Only {malicious} out of {total} antivirus engines flagged this file, often indicating a Potentially Unwanted App (PUA) rather than confirmed malware. Still, exercise caution.",
                "suspicious_title": f"⚠️ Suspicious File ({suspicious} flags)",
                "suspicious_desc": f"VirusTotal scanned this file with {total} antivirus engines. {suspicious} flagged it as suspicious.",
                "safe_title": "✅ Clean File",
                "safe_desc": f"VirusTotal scanned this file with {total} antivirus engines and found no threats."
            }
        }

        lang_key = lang if lang in messages else "en"
        m = messages[lang_key]

        if malicious > 0:
            if detection_ratio >= 0.15:
                verdict = "SPAM"
                risk_score = min(95, 50 + malicious * 5)
                title = m["malware_title"]
                explanation = m["malware_desc"]
            else:
                verdict = "WARNING"
                risk_score = 25
                title = m["low_detection_title"]
                explanation = m["low_detection_desc"]
        elif suspicious > 0:
            verdict = "WARNING"
            risk_score = 50
            title = m["suspicious_title"]
            explanation = m["suspicious_desc"]
        else:
            verdict = "SAFE"
            risk_score = 5
            title = m["safe_title"]
            explanation = m["safe_desc"]

        return jsonify({
            "verdict": verdict,
            "risk_score": risk_score,
            "title": title,
            "explanation": explanation,
            "vt_stats": stats,
            "vt_total_engines": total
        })

    
    OPENROUTER_API_KEY = os.getenv('OPENROUTER_API_KEY')
    api_url = "https://openrouter.ai/api/v1/chat/completions"

    prompt = f"""You are a cybersecurity expert. VirusTotal scan was unavailable. Analyze this file based on metadata only.

File name: "{filename}"
Extension: "{extension}"
Size: {size} bytes

Respond ONLY in this exact JSON format:
{{
  "verdict": "SPAM",
  "risk_score": 85,
  "title": "short title",
  "explanation": "detailed explanation in {lang_name}, mention that this is a metadata-only analysis since deep scan was unavailable"
}}
verdict must be exactly: SPAM or SAFE or WARNING"""

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
        answer = raw['choices'][0]['message']['content']
        answer = answer.replace("```json", "").replace("```", "").strip()
        return jsonify(json.loads(answer))
    except Exception as e:
        return jsonify({'error': str(e)}), 500

@main.route('/check_email', methods=['POST'])
def check_email():
    if not session.get('logged_in'):
        return jsonify({'error': 'غير مصرح'}), 401

    import requests as req
    import dns.resolver
    data = request.get_json()
    email = data.get('email', '')

    result = {
        'leaks': {
            'status': 'success',
            'leakcheck_found': 0,
            'xposed_breaches': []
        },
        'validation': {},
        'exposed_data': {},
        'recommendations': []
    }

   
    lc_breaches = []
    lc_count = 0
    try:
        
        lc_response = req.get(f"https://leakcheck.io/api/public?check={email}", timeout=5)
        if lc_response.status_code == 200:
            lc_data = lc_response.json()
            if isinstance(lc_data, dict) and lc_data.get("success"):
                
                lc_count = int(lc_data.get("found", 0))
                
             
                if "sources" in lc_data:
                    for src in lc_data["sources"]:
                        name = src.get("name") if isinstance(src, dict) else str(src)
                        if name:
                            lc_breaches.append(name)
    except Exception as e:
        print("LeakCheck Ignored Error:", str(e))

  
    xon_breaches = []
    try:
        xon_response = req.get(f"https://api.xposedornot.com/v1/check-email/{email}", timeout=5)
        if xon_response.status_code == 200:
            xon_data = xon_response.json()
            if isinstance(xon_data, dict) and "breaches" in xon_data:
                raw_breaches = xon_data["breaches"]
                if isinstance(raw_breaches, list):
                    for item in raw_breaches:
                        if isinstance(item, list):
                            xon_breaches.extend([str(b) for b in item if b])
                        elif item:
                            xon_breaches.append(str(item))
    except Exception as e:
        print("XposedOrNot Ignored Error:", str(e))

    
    all_breach_names = list(set(lc_breaches + xon_breaches))
    
  
    total_leaks = max(lc_count, len(all_breach_names))
    
    result['leaks']['leakcheck_found'] = total_leaks
    result['leaks']['xposed_breaches'] = all_breach_names
    result['leaks']['status'] = 'success'

   
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
        except Exception:
            is_mx_found = False

        try:
            resp = req.get("https://raw.githubusercontent.com/7c/fakefilter/main/txt/data.txt", timeout=5)
            DISPOSABLE_DOMAINS = set(line.strip().lower() for line in resp.text.splitlines() if line.strip() and not line.startswith('#'))
        except Exception:
            DISPOSABLE_DOMAINS = set()

        is_disposable = domain in DISPOSABLE_DOMAINS
        free_domains = ['gmail.com', 'yahoo.com', 'hotmail.com', 'outlook.com', 'icloud.com']
        is_free = domain in free_domains
        quality = 0.9 if (is_valid_format and is_mx_found and not is_disposable) else (0.1 if is_disposable else 0.5)

        result['validation'] = {
            "is_valid_format": {"value": is_valid_format},
            "is_mx_found": {"value": is_mx_found},
            "is_smtp_valid": {"value": is_mx_found},
            "is_disposable_email": {"value": is_disposable},
            "is_free_email": {"value": is_free},
            "quality_score": quality
        }
    except Exception as e:
        result['validation'] = {
            "is_valid_format": {"value": True},
            "is_mx_found": {"value": True},
            "is_smtp_valid": {"value": True},
            "is_disposable_email": {"value": False},
            "is_free_email": {"value": True},
            "quality_score": 0.8
        }

    return jsonify(result)