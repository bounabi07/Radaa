from flask import Blueprint, render_template, request, redirect, url_for, session, flash, jsonify

main = Blueprint('main', __name__)

# 1. الصفحة الرئيسية
@main.route('/')
def index():
    if not session.get('logged_in'):
        return redirect(url_for('main.login'))
    username = session.get('username', '')
    return render_template('index.html', username=username)

# 2. صفحة About
@main.route('/about')
def about():
    return render_template('about.html')

# 3. صفحة تسجيل الدخول
@main.route('/login', methods=['GET', 'POST'])
def login():
    if request.method == 'POST':
        email = request.form.get('email')
        password = request.form.get('password')
        username = request.form.get('username')

        if email and password:
            session['logged_in'] = True
            session['username'] = username if username else email.split('@')[0]
            return redirect(url_for('main.index'))
        else:
            flash('الرجاء إدخال بيانات صحيحة')

    return render_template('connecte.html')

# 4. صفحة الرسائل - محمية بالجلسة
@main.route('/messages')
def messages_page():
    if not session.get('logged_in'):
        return redirect(url_for('main.login'))
    username = session.get('username', 'مستخدم رَدْعْ')
    return render_template('messages.html', username=username)

# 5. صفحة الكشف
@main.route('/detect')
def detect():
    if not session.get('logged_in'):
        return redirect(url_for('main.login'))
    username = session.get('username', '')
    return render_template('detect.html', username=username)

# 6. صفحة النصائح
@main.route('/advice')
def advice():
    if not session.get('logged_in'):
        return redirect(url_for('main.login'))
    username = session.get('username', '')
    return render_template('advice.html', username=username)

# 7. صفحة الروابط
@main.route('/links')
def links():
    if not session.get('logged_in'):
        return redirect(url_for('main.login'))
    username = session.get('username', '')
    return render_template('links.html', username=username)

# 8. صفحة الملفات
@main.route('/files')
def files_page():
    if not session.get('logged_in'):
        return redirect(url_for('main.login'))
    username = session.get('username', '')
    return render_template('files.html', username=username)

# 9. تسجيل الخروج
@main.route('/logout')
def logout():
    session.clear()
    return redirect(url_for('main.login'))