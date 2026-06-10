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


@main.route('/detect')
def detect():
    if not session.get('logged_in'):
        return redirect(url_for('main.login'))
    username = session.get('username', '')
    return render_template('detect.html', username=username)


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

    data = request.get_json()
    filename = data.get('filename', '')
    extension = data.get('extension', '')
    size = data.get('size', 0)
    content_preview = data.get('content_preview', '')
    lang = data.get('lang', 'en')

    OPENROUTER_API_KEY = os.getenv('OPENROUTER_API_KEY')
    api_url = "https://openrouter.ai/api/v1/chat/completions"
    lang_name = "Arabic" if lang in ['ar', 'ary'] else "French" if lang == 'fr' else "English"

    prompt = f"""You are a cybersecurity expert. Analyze this file and determine if it is malicious or safe.

File name: "{filename}"
Extension: "{extension}"
Size: {size} bytes
Content preview: "{content_preview[:300]}"

Respond ONLY in this exact JSON format:
{{
  "verdict": "SPAM",
  "risk_score": 85,
  "title": "short title",
  "explanation": "detailed explanation in {lang_name}"
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