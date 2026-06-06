from flask import Blueprint, render_template, request, redirect, url_for, session, flash, jsonify
from werkzeug.security import generate_password_hash, check_password_hash
from . import db
from .models import User, MessageLog, LinkLog, FileLog
main = Blueprint('main', __name__)


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