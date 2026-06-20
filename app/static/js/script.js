const translations = {
    en: {
        dir: "ltr", welcome: "welcome to Radaa", logout: "Logout", analyze_btn: "Analyze Message",risk_score:"Risk Score",
        description: "Welcome to Radaa a platform that ensures you are safe from spam",
        home: "Home", about: "About", login: "Login", register: "Register", email: "Email :", password: "Password :", username: "Username :", login_btn: "Login to Terminal", create_account: "Create Account",
        msg: "Messages", lnk: "Links", eml: "Email", fil: "files", adv: "Advice",
        msg_title: "Spam Message Detector",risk_level:"Risk Level",breaches_found:"Breaches Found",
        msg_desc: "Paste any suspicious message, SMS, or email below. Our security analyzer will scan the text for malicious patterns, phishing links, and fraud indicators.",
        scan_title: "Terminal Analyzer", label_text: "Suspicious Text / Message:",
        detected_words: "Detected Red-Flags:",
        safe_title: "🛡️ SAFE: No Threat Detected", safe_desc: "The message looks clean. However, always remain cautious with unknown senders.",
        spam_title: "⚠️ ALERT: Spam / Phishing Detected", spam_desc: "High risk! This message contains fraudulent keywords often used in social engineering scams.",
        about_title: "About Radaa", about_desc: "Radaa is a cybersecurity platform designed to protect users from spam, phishing, malicious links, and suspicious files.",
        stat_features: "Features", stat_languages: "Languages", stat_powered: "Powered", stat_free: "Free",
        goals_title: "Our Goals", team_title: "The Team", tech_title: "Tech Stack", team_role: "University Student · Full Stack Developer",
        goal_1: "Detect spam & phishing messages", goal_2: "Scan malicious links", goal_3: "Analyze suspicious files",
        goal_4: "Test email security", goal_5: "Multilingual support", goal_6: "Keep users safe online",
        detect_title: "AI Threat Detector", detect_desc: "Paste any suspicious content. Our AI will deeply analyze it.", detect_legend: "AI Analyzer", detect_label: "Suspicious Content:", detect_btn: "Analyze with AI", detect_loading: "AI is analyzing...", detect_risk: "Risk Level:",
        links_title: "Link Scanner", links_desc: "Add suspicious links to scan them.", links_legend: "URL Analyzer", links_label: "Add Suspicious URL:", links_scan_btn: "Scan All Links", links_loading: "Scanning links...",
        files_title: "File Scanner", files_desc: "Upload any suspicious file for analysis.", files_legend: "File Analyzer", files_drop: "Click or drag a file here", files_hint: "Supported: .txt, .pdf, .exe, .zip...", files_scan_btn: "Scan File", files_loading: "Analyzing file...", files_risk: "Risk Level:",
        email_title: "Email Security Scanner", email_desc: "Check if your email has been leaked in a data breach and verify its validity.",
        email_legend: "Email Analyzer", email_label: "Enter Email Address:", email_scan_btn: "Scan",
        email_loading: "Scanning email...", email_leak_title: "Data Breach Check", email_valid_title: "Email Validation",
        adv: "Advice",adv_email_desc: "Protect your inbox from threats and spam",
        adv_title: "Stay Safe Online", adv_subtitle: "Choose a category to get personalized security tips",
        adv_welcome_title: "Choose a Category", adv_welcome_desc: "Select one of the categories above to get security tips",
        adv_cat_apps: "Apps & Downloads", adv_cat_passwords: "Passwords", adv_cat_phishing: "Phishing & Scams",
        adv_cat_social: "Social Media", adv_cat_wifi: "WiFi & Networks", adv_cat_email: "Email Security",
        adv_wifi_verify: "Verify the network name", adv_wifi_verify_desc: "Attackers create fake hotspots named 'Free_Airport_WiFi'. Always confirm the exact network name with staff before connecting.",
        adv_wifi_secure: "Secure your home router", adv_wifi_secure_desc: "Change the default router password. Use WPA3 or WPA2 encryption. Disable WPS which is vulnerable to brute force attacks.",
        adv_email_attachments: "Never open unexpected attachments", adv_email_attachments_desc: "Malware is often distributed via email attachments (.exe, .zip, .docx with macros). Use Radaa's file scanner before opening.",
        adv_email_sender: "Check the sender's email address", adv_email_sender_desc: "Scammers use addresses like 'support@paypa1.com' (with a 1 instead of an l). Always check carefully for typos.",
        adv_cat_apps_desc: "Stay safe when downloading and using applications", adv_app_download: "Download only from official stores", adv_app_download_desc: "Always use Google Play or App Store. Avoid third-party APK websites — they often contain malware hidden inside apps.", adv_app_permissions: "Check app permissions", adv_app_permissions_desc: "A flashlight app doesn't need access to your contacts or camera. Review permissions before installing any app.", adv_app_reviews: "Check reviews and ratings",
        adv_app_reviews_desc: "Low rating or few reviews on a new app can be a red flag. Read recent reviews carefully before downloading.", adv_app_updates: "Keep apps updated", adv_app_updates_desc: "Updates patch security vulnerabilities. Enable automatic updates to stay protected against known exploits.", adv_app_cracked: "Avoid cracked or modded apps",
        adv_app_cracked_desc: "Modified apps (cracked versions) bypass security checks and may steal your data, passwords, or banking information.", adv_passwords_title: "Password Security", adv_passwords_desc: "Protect your accounts with strong, unique passwords", adv_password_strong: "Use a strong password",
        adv_password_strong_desc: "Use at least 12 characters mixing uppercase, lowercase, numbers, and symbols. Avoid names, birthdays, or common words.", adv_password_reuse: "Never reuse passwords", adv_password_reuse_desc: "If one account is breached, attackers try the same password on all your accounts. Use a unique password for each site.", adv_password_manager: "Use a password manager", adv_password_manager_desc: "Tools like Bitwarden or 1Password generate and store complex passwords securely so you only need to remember one.", adv_2fa: "Enable two-factor authentication (2FA)", 
        adv_2fa_desc: "Even if your password is stolen, 2FA blocks attackers. Enable it on email, banking, and social media accounts.", adv_password_change: "Change passwords after a breach", adv_password_change_desc: "Use Radaa's email scanner to check if your email appeared in a data breach, then immediately change those passwords.", adv_phishing_title: "Phishing & Scams",
        adv_phishing_desc: "Recognize and avoid online fraud attempts", adv_phishing_links: "Don't click suspicious links", adv_phishing_links_desc: "Hover over links before clicking to see the real URL. If it looks strange or uses URL shorteners, use Radaa's link scanner first.", adv_phishing_urgency: "Beware of urgency tricks", adv_phishing_urgency_desc: "\"Your account will be suspended in 24 hours!\" is a classic pressure tactic. Legitimate companies never rush you like this.", adv_phishing_scams: "If it sounds too good to be true...", adv_phishing_scams_desc: "\"You won $5000!\" or \"Free iPhone!\" are scam traps. Never enter personal info on prize claim pages.",
        adv_phishing_sender: "Verify sender identity",email_summary: "Security Summary", email_leak_check: "Data Breach Check", email_validation: "Email Validation", email_exposed: "Exposed Data", email_recommendations: "Recommendations",
        adv_phishing_sender_desc: "Scammers impersonate Netflix, PayPal, or your bank. Always check the sender's email domain carefully for slight misspellings.", adv_phishing_analysis: "Use Radaa to analyze suspicious messages", adv_phishing_analysis_desc: "Copy any suspicious SMS or email and paste it in Radaa's message detector for instant AI-powered analysis.", adv_social_header: "Social Media Safety", adv_social_desc: "Protect your privacy on social platforms", adv_social_limit: "Limit personal information", 
        adv_social_limit_desc: "Don't share your phone number, address, or ID publicly. Scammers use this info to target and manipulate you.", adv_social_friend_requests: "Be cautious with friend requests", adv_social_friend_requests_desc: "Fake accounts are used to gather information or spread scams. Verify identity before accepting requests from strangers.", adv_social_privacy: "Review privacy settings",
        adv_social_privacy_desc: "Set your profile to private. Regularly check who can see your posts, location, and personal information.", adv_social_money_requests: "Beware of money transfer requests", adv_social_money_requests_desc: "If a \"friend\" suddenly asks for money via DM, verify by calling them directly. Account hacking for money fraud is very common.", adv_social_login_alerts: "Enable login alerts", adv_social_login_alerts_desc: "Turn on notifications for new logins on all your accounts. You'll be instantly alerted if someone else accesses your profile.", adv_wifi_header: "WiFi & Network Security", adv_wifi_desc: "Stay safe on public and private networks",
        adv_wifi_avoid: "Avoid public WiFi for sensitive tasks", adv_wifi_avoid_desc: "Never do online banking or enter passwords on café or airport WiFi. Attackers can intercept unencrypted traffic easily.", adv_wifi_vpn: "Use a VPN on public networks", adv_wifi_vpn_desc: "A VPN encrypts your connection and hides your activity from attackers on the same network. Use Proton VPN (free tier available).",
        adv_email_header: "Email Security", adv_email_unsubscribe: "Don't unsubscribe from spam blindly", adv_email_unsubscribe_desc: "Clicking \"unsubscribe\" on a spam email confirms your address is active. Just mark it as spam and delete it instead.", adv_email_breached: "Check if your email was breached", 
        adv_email_breached_desc: "Use Radaa's email scanner to see if your address appeared in known data breaches and take action immediately if it did.", adv_email_filters: "Use email filters and spam settings", adv_email_filters_desc: "Enable spam filters in your email client. Gmail and Outlook have built-in protection — make sure it's activated.",
    },
    ar: {
        dir: "rtl", welcome: "مرحباً بك في ردع", analyse_message: "فحص الرسالة",risk_score:"مستوى الخطورة",
        description: "مرحباً بك في ردع، المنصة التي تضمن حمايتك من الرسائل المزعجة (Spam).",
        home: "الرئيسية", about: "من نحن", register: "تسجيل", email: "البريد الإلكتروني :", password: "كلمة المرور :", username: "اسم المستخدم :", login_btn: "تسجيل الدخول إلى الردع", create_account: "إنشاء حساب",
        msg: "الرسائل", lnk: "الروابط", eml: "البريد الإلكتروني", fil: "الملفات", adv: "نصيحة",
        logout: "تسجيل الخروج", login: "تسجيل الدخول",risk_level:"مستوى الخطر",breaches_found:"التسريبات المكتشفة",
        analyze_btn: "تحليل الرسالة", detect_title: "كاشف التهديدات بالذكاء الاصطناعي", detect_desc: "الصق أي محتوى مشبوه. الذكاء الاصطناعي سيحلله بعمق.", detect_legend: "محلل الذكاء الاصطناعي", detect_label: "المحتوى المشبوه:", detect_btn: "تحليل بالذكاء الاصطناعي", detect_loading: "الذكاء الاصطناعي يحلل...", detect_risk: "مستوى الخطر:",
        msg_title: "كاشف الرسائل المزعجة والاحتيالية",
        msg_desc: "قم بلصق أي رسالة مشبوهة، رسالة نصية قصيرة (SMS)، أو بريد إلكتروني أدناه. سيتولى محلل الأمان في منصة ردع فحص النص لكشف الأنماط الخبيثة، روابط التصيد، ومؤشرات الاحتيال.",
        scan_title: "محلل البيانات الآمن", label_text: "النص أو الرسالة المشبوهة:",
        detected_words: "الكلمات الدلالية المكتشفة (خطورة):",email_summary: "ملخص الأمان", email_leak_check: "فحص التسريبات", email_validation: "صلاحية البريد الإلكتروني", email_exposed: "البيانات المكشوفة", email_recommendations: "التوصيات",
        safe_title: "🛡️ آمن: لم يتم العثور على تهديد", safe_desc: "تبدو الرسالة نظيفة وآمنة. ومع ذلك، يرجى الحذر دائماً من المرسلين المجهولين.",
        spam_title: "⚠️ تحذير: تم اكتشاف رسالة احتيالية (Spam)", spam_desc: "مستوى الخطورة عالٍ! تحتوي هذه الرسالة على كلمات دلالية مضللة تُستخدم عادةً في عمليات النصب والهندسة الاجتماعية.",
        about_title: "عن ردع", about_desc: "ردع منصة أمن سيبراني مصممة لحماية المستخدمين من الرسائل المزعجة والتصيد والروابط والملفات الخبيثة.",
        stat_features: "مميزات", stat_languages: "لغات", stat_powered: "مدعوم بالذكاء", stat_free: "مجاني",
        goals_title: "أهدافنا", team_title: "الفريق", tech_title: "التقنيات المستخدمة", team_role: "طالب جامعي · مطور متكامل",
        goal_1: "كشف رسائل Spam والتصيد", goal_2: "فحص الروابط الخبيثة", goal_3: "تحليل الملفات المشبوهة",
        goal_4: "اختبار أمان البريد الإلكتروني", goal_5: "دعم متعدد اللغات", goal_6: "حماية المستخدمين على الإنترنت",
        links_title: "فاحص الروابط", links_desc: "أضف الروابط المشبوهة لفحصها.", links_legend: "محلل الروابط", links_label: "أضف رابطاً مشبوهاً:", links_scan_btn: "فحص جميع الروابط", links_loading: "جارٍ فحص الروابط...",
        files_title: "فاحص الملفات", files_desc: "ارفع أي ملف مشبوه للتحليل.", files_legend: "محلل الملفات", files_drop: "اضغط أو اسحب ملفاً هنا", files_hint: "مدعوم: txt, pdf, exe, zip...", files_scan_btn: "فحص الملف", files_loading: "جارٍ تحليل الملف...", files_risk: "مستوى الخطر:",
        email_title: "فاحص أمان البريد الإلكتروني", email_desc: "تحقق إذا كان بريدك الإلكتروني قد تسرب في أي اختراق وتحقق من صلاحيته.",
        email_legend: "محلل البريد الإلكتروني", email_label: "أدخل البريد الإلكتروني:", email_scan_btn: "فحص",
        email_loading: "جارٍ فحص البريد الإلكتروني...", email_leak_title: "فحص التسريبات", email_valid_title: "صلاحية البريد",
        adv: "النصائح",adv_email_desc: "حافظ على أمان بريدك الإلكتروني من التهديدات والرسائل المزعجة",
        adv_title: "ابقَ آمناً على الإنترنت", adv_subtitle: "اختر تصنيفاً للحصول على نصائح أمنية مخصصة",
        adv_welcome_title: "اختر تصنيفاً", adv_welcome_desc: "اضغط على أحد التصنيفات أعلاه للحصول على النصائح",
        adv_cat_apps: "التطبيقات والتنزيلات", adv_cat_passwords: "كلمات المرور", adv_cat_phishing: "التصيد والاحتيال",
        adv_cat_social: "وسائل التواصل", adv_cat_wifi: "الواي فاي والشبكات", adv_cat_email: "أمان البريد",
        adv_wifi_verify: "تحقق من اسم الشبكة", adv_wifi_verify_desc: "يقوم المهاجمون بإنشاء نقاط اتصال وهمية باسم 'Free_Airport_WiFi'. تحقق دائماً من الاسم الدقيق للشبكة مع الموظفين قبل الاتصال.",
        adv_wifi_secure: "أمّن جهاز التوجيه المنزلي", adv_wifi_secure_desc: "قم بتغيير كلمة مرور جهاز التوجيه الافتراضية. استخدم تشفير WPA3 أو WPA2. قم بتعطيل WPS الذي يكون عرضة لهجمات القوة الغاشمة.",
        adv_email_attachments: "لا تفتح المرفقات غير المتوقعة", adv_email_attachments_desc: "غالباً ما يتم توزيع البرمجيات الخبيثة عبر مرفقات البريد الإلكتروني (.exe, .zip, .docx مع وحدات ماكرو). استخدم فاحص الملفات في ردع قبل الفتح.",
        adv_email_sender: "تحقق من عنوان البريد الإلكتروني للمرسل", adv_email_sender_desc: "يستخدم المحتالون عناوين مثل 'support@paypa1.com' (مع 1 بدل الحرف l). تحقق دائماً من وجود أخطاء إملائية.",
        adv_cat_apps_desc: "ابقَ آمناً عند تنزيل واستخدام التطبيقات", adv_app_download: "تحميل من المتاجر الرسمية فقط", adv_app_download_desc: "استخدم دائماً Google Play أو App Store. تجنب مواقع APK الخارجية — فهي غالباً تحتوي على برامج ضارة مخفية داخل التطبيقات.", adv_app_permissions: "تحقق من أذونات التطبيق",
        adv_app_permissions_desc: "تطبيق المصباح لا يحتاج إلى الوصول إلى جهات الاتصال أو الكاميرا. راجع الأذونات قبل تثبيت أي تطبيق.", adv_app_reviews: "تحقق من التقييمات والمراجعات", adv_app_reviews_desc: "التقييم المنخفض أو عدد قليل من المراجعات قد يكون علامة تحذيرية. اقرأ المراجعات الحديثة بعناية قبل التحميل.", adv_app_updates: "حافظ على تحديث التطبيقات", adv_app_updates_desc: "التحديثات تصلح الثغرات الأمنية. فعّل التحديثات التلقائية للبقاء محمياً من الثغرات المعروفة.", 
        adv_app_cracked: "تجنب التطبيقات المقرصنة أو المعدلة", adv_app_cracked_desc: "التطبيقات المعدلة (النسخ المقرصنة) تتجاوز فحوصات الأمان وقد تسرق بياناتك وكلماتك المرورية أو معلومات الحساب البنكي.", adv_passwords_title: "أمان كلمات المرور", adv_passwords_desc: "حماية حساباتك بكلمات مرور قوية وفريدة", adv_password_strong: "استخدم كلمة مرور قوية",
        adv_password_strong_desc: "استخدم 12 حرفاً على الأقل مع مزج الأحرف الكبيرة والصغيرة والأرقام والرموز. تجنب الأسماء والتواريخ أو الكلمات الشائعة.", adv_password_reuse: "لا تعيد استخدام كلمات المرور", adv_password_reuse_desc: "إذا تم كسر حساب واحد، سيحاول المهاجمون نفس كلمة المرور على جميع حساباتك. استخدم كلمة مرور فريدة لكل موقع.", adv_password_manager: "استخدم مدير كلمات مرور",
        adv_password_manager_desc: "أدوات مثل Bitwarden أو 1Password تولد وتخزن كلمات مرور معقدة بأمان بحيث تحتاج فقط إلى تذكر واحدة.", adv_2fa: "فعّل المصادقة متعددة العوامل (2FA)", adv_2fa_desc: "حتى لو تم سرقة كلمة المرور، فإن 2FA تمنع المهاجمين. فعّلها على البريد الإلكتروني والحسابات البنكية ووسائل التواصل.", adv_password_change: "غيّر كلمات المرور بعد الاختراق", adv_password_change_desc: "استخدم ماسح البريد الإلكتروني في ردع للتحقق مما إذا ظهر بريدك في اختراق، ثم غيّر تلك كلمات المرور على الفور.", 
        adv_phishing_title: "التصيد والاحتيال", adv_phishing_desc: "تعرف على محاولات الاحتيال عبر الإنترنت وتجنبها", adv_phishing_links: "لا تنقر على الروابط المشبوهة", adv_phishing_links_desc: "مرر الماوس فوق الروابط قبل النقر لرؤية عنوان URL الحقيقي. إذا بدا غريباً أو يستخدم مختصرات عناوين، استخدم ماسح الروابط في ردع أولاً.", adv_phishing_urgency: "احذر من حيل الاستعجالية",
        adv_phishing_urgency_desc: "\"سيتم تعليق حسابك في 24 ساعة!\" هي تكتيك ضغط كلاسيكي. الشركات الشرعية لا تعجل بك بهذه الطريقة.", adv_phishing_scams: "إذا بدا جيداً جداً...", adv_phishing_scams_desc: "\"فزت بـ 5000 دولار!\" أو \"iPhone مجاني!\" فخاخ احتيال. لا تدخل معلومات شخصية على صفحات مطالبة الجوائز.",
        adv_phishing_sender: "تحقق من هوية المرسل", adv_phishing_sender_desc: "يقلد المحتالون Netflix أو PayPal أو بنكك. تحقق دائماً من نطاق بريد المرسل بعناية من أجل الأخطاء الطفيفة.", adv_phishing_analysis: "استخدم ردع لتحليل الرسائل المشبوهة", adv_phishing_analysis_desc: "انسخ أي رسالة نصية أو بريد إلكتروني مشبوه والصقه في كاشف الرسائل في ردع للحصول على تحليل فوري مدعوم بالذكاء الاصطناعي.", adv_social_header: "أمان وسائل التواصل الاجتماعي", adv_social_desc: "حافظ على خصوصيتك على منصات التواصل الاجتماعي", adv_social_limit: "حد من المعلومات الشخصية",
        adv_social_limit_desc: "لا تشارك رقم هاتفك أو عنوانك أو بطاقة الهوية الخاصة بك علناً. يستخدم المحتالون هذه المعلومات للاستهداف والتلاعب بك.", adv_social_friend_requests: "كن حذراً مع طلبات الصداقة", adv_social_friend_requests_desc: "تُستخدم الحسابات الوهمية لجمع المعلومات أو نشر الاحتيالات. تحقق من الهوية قبل قبول الطلبات من الغرباء.", adv_social_privacy: "راجع إعدادات الخصوصية", adv_social_privacy_desc: "اضبط ملفك الشخصي على خاص. تحقق بانتظام من يمكنه رؤية منشوراتك وموقعك والمعلومات الشخصية الخاصة بك.", adv_social_money_requests: "احذر من طلبات تحويل الأموال",
        adv_social_money_requests_desc: "إذا طلب \"صديق\" فجأة أموالاً عبر الرسالة المباشرة، تحقق بالاتصال بهم مباشرة. اختراق الحساب لغش الأموال شائع جداً.", adv_social_login_alerts: "فعّل تنبيهات تسجيل الدخول", adv_social_login_alerts_desc: "فعّل الإخطارات لعمليات تسجيل دخول جديدة على جميع حساباتك. ستتم إعلامك على الفور إذا قام شخص آخر بالوصول إلى ملفك الشخصي.", adv_wifi_header: "أمان WiFi والشبكات", adv_wifi_desc: "ابقَ آمناً على الشبكات العامة والخاصة", adv_wifi_avoid: "تجنب WiFi العام للمهام الحساسة",
        adv_wifi_avoid_desc: "لا تقم أبداً بالعمليات المصرفية عبر الإنترنت أو إدخال كلمات المرور على WiFi في المقهى أو المطار. يمكن للمهاجمين اعتراض حركة المرور بسهولة.", adv_wifi_vpn: "استخدم VPN على الشبكات العامة", adv_wifi_vpn_desc: "يقوم VPN بتشفير الاتصال الخاص بك إخفاء نشاطك عن المهاجمين على نفس الشبكة. استخدم Proton VPN (الطبقة المجانية متاحة).", adv_email_header: "أمان البريد الإلكتروني", adv_email_unsubscribe: "لا تلغ الاشتراك من الرسائل المزعجة عشوائياً", adv_email_unsubscribe_desc: "النقر على 'إلغاء الاشتراك' على رسالة بريد إلكترونية مزعجة يؤكد أن عنوانك نشط. فقط قم بتصنيفها كرسالة مزعجة وحذفها بدلاً من ذلك.", 
        adv_email_breached: "تحقق مما إذا تم اختراق بريدك الإلكتروني", adv_email_breached_desc: "استخدم ماسح البريد الإلكتروني في ردع لمعرفة ما إذا كان عنوانك قد ظهر في عمليات اختراق معروفة واتخذ إجراءً فوراً إذا كان الأمر كذلك.", adv_email_filters: "استخدم مرشحات البريد الإلكتروني وإعدادات الرسائل المزعجة", adv_email_filters_desc: "فعّل مرشحات الرسائل المزعجة في عميل البريد الخاص بك. Gmail و Outlook لديهما حماية مدمجة — تأكد من تفعيلها.",
    },
    fr: {
        dir: "ltr", welcome: "Bienvenue sur Radaa", logout: "Déconnexion", analyse_message: "Analyser le message",risk_score:"Niveau de risque",
        description: "Bienvenue sur Radaa, une plateforme qui vous protège contre le spam.",
        home: "Accueil", about: "À propos", login: "Connexion", register: "Inscription", email: "Email :", password: "Mot de passe :", username: "Nom d'utilisateur :", login_btn: "Se connecter", create_account: "Créer un compte",
        msg: "Messages", lnk: "Liens", eml: "Email", fil: "Fichiers", adv: "Conseils",
        analyze_btn: "Analyser le message", detect_title: "Détecteur IA", detect_desc: "Collez tout contenu suspect. Notre IA l'analysera en profondeur.", detect_legend: "Analyseur IA", detect_label: "Contenu suspect:", detect_btn: "Analyser avec IA", detect_loading: "L'IA analyse...", detect_risk: "Niveau de risque:",
        msg_title: "Détecteur de Messages Spam",email_summary: "Résumé de Sécurité", email_leak_check: "Vérification des Fuites", email_validation: "Validation Email", email_exposed: "Données Exposées", email_recommendations: "Recommandations",
        msg_desc: "Collez tout message, SMS ou e-mail suspect ci-dessous. Notre analyseur de sécurité scannera le texte pour détecter les modèles malveillants, les liens de phishing et les indicateurs de fraude.",
        scan_title: "Analyseur de Terminal", label_text: "Texte / Message Suspect:",
        detected_words: "Indicateurs de Risque Détectés:",
        safe_title: "🛡️ SÉCURISÉ: Aucun Danger Détecté", safe_desc: "Le message semble propre. Restez néanmoins vigilant face aux expéditeurs inconnus.",
        spam_title: "⚠️ ALERTE: Spam / Phishing Détecté", spam_desc: "Risque élevé! Ce message contient des mots-clés frauduleux souvent utilisés dans les arnaques d'ingénierie sociale.",
        about_title: "À propos de Radaa", about_desc: "Radaa est une plateforme de cybersécurité conçue pour protéger les utilisateurs contre le spam, le phishing, les liens malveillants et les fichiers suspects.",
        stat_features: "Fonctionnalités", stat_languages: "Langues", stat_powered: "Propulsé par IA", stat_free: "Gratuit",
        goals_title: "Nos Objectifs", team_title: "L'Équipe", tech_title: "Technologies", team_role: "Étudiant Universitaire · Développeur Full Stack",
        goal_1: "Détecter spam et phishing", goal_2: "Scanner les liens malveillants", goal_3: "Analyser les fichiers suspects",
        goal_4: "Tester la sécurité des emails", goal_5: "Support multilingue", goal_6: "Protéger les utilisateurs en ligne",
        links_title: "Scanner de Liens", links_desc: "Ajoutez des liens suspects pour les analyser.", links_legend: "Analyseur d'URL", links_label: "Ajouter un lien suspect:", links_scan_btn: "Scanner tous les liens", links_loading: "Analyse en cours...",
        files_title: "Scanner de Fichiers", files_desc: "Téléchargez tout fichier suspect pour analyse.", files_legend: "Analyseur de Fichiers", files_drop: "Cliquez ou glissez un fichier ici", files_hint: "Supporté: .txt, .pdf, .exe, .zip...", files_scan_btn: "Scanner le fichier", files_loading: "Analyse du fichier en cours...", files_risk: "Niveau de risque:",
        email_title: "Scanner de Sécurité Email", email_desc: "Vérifiez si votre email a été compromis dans une fuite de données et validez son authenticité.",
        email_legend: "Analyseur Email", email_label: "Entrez l'adresse email:", email_scan_btn: "Scanner",
        email_loading: "Analyse de l'email en cours...", email_leak_title: "Vérification des Fuites", email_valid_title: "Validation Email",
        adv: "Conseils",adv_email_desc: "Protégez votre boîte de réception contre les menaces et le spam",
        adv_title: "Restez en Sécurité", adv_subtitle: "Choisissez une catégorie pour obtenir des conseils personnalisés",
        adv_welcome_title: "Choisissez une Catégorie", adv_welcome_desc: "Sélectionnez une catégorie ci-dessus pour voir les conseils",
        adv_cat_apps: "Apps & Téléchargements", adv_cat_passwords: "Mots de Passe", adv_cat_phishing: "Phishing & Arnaques",
        adv_cat_social: "Réseaux Sociaux", adv_cat_wifi: "WiFi & Réseaux", adv_cat_email: "Sécurité Email",risk_level:"Niveau de Risque",breaches_found:"Fuites de Données Détectées",
        adv_wifi_verify: "Vérifiez le nom du réseau", adv_wifi_verify_desc: "Les attaquants créent de faux hotspots nommés 'Free_Airport_WiFi'. Confirmez toujours le nom exact du réseau avec le personnel avant de vous connecter.",
        adv_wifi_secure: "Sécurisez votre routeur domestique", adv_wifi_secure_desc: "Changez le mot de passe par défaut du routeur. Utilisez le chiffrement WPA3 ou WPA2. Désactivez WPS qui est vulnérable aux attaques par force brute.",
        adv_email_attachments: "N'ouvrez pas les pièces jointes inattendues", adv_email_attachments_desc: "Les logiciels malveillants sont souvent distribués via des pièces jointes d'e-mails (.exe, .zip, .docx avec des macros). Utilisez le scanneur de fichiers de Radaa avant de les ouvrir.",
        adv_email_sender: "Vérifiez l'adresse email de l'expéditeur", adv_email_sender_desc: "Les escrocs utilisent des adresses comme 'support@paypa1.com' (avec un 1 au lieu d'un l). Vérifiez toujours soigneusement les fautes de frappe.",
        adv_cat_apps_desc: "Restez en sécurité lors du téléchargement et de l'utilisation des applications", adv_app_download: "Téléchargez uniquement à partir de magasins officiels", adv_app_download_desc: "Utilisez toujours Google Play ou App Store. Évitez les sites APK tiers — ils contiennent souvent des logiciels malveillants cachés dans les applications.", 
        adv_app_permissions: "Vérifiez les autorisations des applications", adv_app_permissions_desc: "Une application de lampe de poche n'a pas besoin d'accès à vos contacts ou à votre caméra. Vérifiez les autorisations avant d'installer une application.", adv_app_reviews: "Vérifiez les avis et les évaluations", adv_app_reviews_desc: "Une note faible ou peu d'avis sur une nouvelle application peut être un drapeau rouge. Lisez attentivement les avis récents avant de télécharger.", 
        adv_app_updates: "Maintenez les applications à jour", adv_app_updates_desc: "Les mises à jour corrigent les vulnérabilités de sécurité. Activez les mises à jour automatiques pour rester protégé contre les exploits connus.", adv_app_cracked: "Évitez les applications piratées ou modifiées", adv_app_cracked_desc: "Les applications modifiées (versions piratées) contournent les vérifications de sécurité et peuvent voler vos données, vos mots de passe ou vos informations bancaires.",
        adv_passwords_title: "Sécurité des mots de passe", adv_passwords_desc: "Protégez vos comptes avec des mots de passe forts et uniques", adv_password_strong: "Utilisez un mot de passe fort", adv_password_strong_desc: "Utilisez au moins 12 caractères en mélangeant majuscules, minuscules, chiffres et symboles. Évitez les noms, les dates de naissance ou les mots courants.", 
        adv_password_reuse: "Ne réutilisez jamais les mots de passe", adv_password_reuse_desc: "Si un compte est compromis, les attaquants essayent le même mot de passe sur tous vos comptes. Utilisez un mot de passe unique pour chaque site.", 
        adv_password_manager: "Utilisez un gestionnaire de mots de passe", adv_password_manager_desc: "Des outils comme Bitwarden ou 1Password génèrent et stockent les mots de passe complexes de manière sécurisée afin que vous n'ayez à en mémoriser qu'un.", adv_2fa: "Activez l'authentification à deux facteurs (2FA)", adv_2fa_desc: "Même si votre mot de passe est volé, 2FA bloque les attaquants. Activez-le sur les comptes de messagerie, bancaires et de médias sociaux.", adv_password_change: "Changez les mots de passe après une violation",
        adv_password_change_desc: "Utilisez le scanner de messagerie de Radaa pour vérifier si votre adresse e-mail a été compromise, puis changez immédiatement ces mots de passe.", adv_phishing_title: "Hameçonnage et arnaque", adv_phishing_desc: "Reconnaître et éviter les tentatives de fraude en ligne", adv_phishing_links: "Ne cliquez pas sur les liens suspects", 
        adv_phishing_links_desc: "Survolez les liens avant de cliquer pour voir l'URL réelle. S'il semble étrange ou utilise des raccourcisseurs d'URL, utilisez d'abord le scanner de liens de Radaa.", adv_phishing_urgency: "Méfiez-vous des tactiques d'urgence", adv_phishing_urgency_desc: "\"Votre compte sera suspendu dans 24 heures!\" est une tactique de pression classique. Les entreprises légitime ne vous pressent jamais de cette manière.", 
        adv_phishing_scams: "Si cela semble trop beau pour être vrai...", adv_phishing_scams_desc: "\"Vous avez remporté 5000 dollars!\" ou \"iPhone gratuit!\" sont des pièges à arnaque. N'entrez jamais d'informations personnelles sur les pages de réclamation de prix.", adv_phishing_sender: "Vérifier l'identité de l'expéditeur",
        adv_phishing_sender_desc: "Les escrocs usurpent l'identité de Netflix, PayPal ou votre banque. Vérifiez toujours soigneusement le domaine de messagerie de l'expéditeur pour les fautes de frappe.", adv_phishing_analysis: "Utilisez Radaa pour analyser les messages suspects", 
        adv_phishing_analysis_desc: "Copiez tout SMS ou email suspect et collez-le dans le détecteur de messages de Radaa pour une analyse instantanée alimentée par l'IA.", adv_social_header: "Sécurité des réseaux sociaux", adv_social_desc: "Protégez votre vie privée sur les plateformes sociales", adv_social_limit: "Limitez les informations personnelles", adv_social_limit_desc: "Ne partagez pas votre numéro de téléphone, votre adresse ou votre pièce d'identité publiquement. Les escrocs utilisent ces informations pour vous cibler et vous manipuler.",
        adv_social_friend_requests: "Soyez prudent avec les demandes d'amitié", adv_social_friend_requests_desc: "Les comptes faux sont utilisés pour recueillir des informations ou propager des arnaque. Vérifiez l'identité avant d'accepter les demandes des étrangers.", adv_social_privacy: "Examinez les paramètres de confidentialité", adv_social_privacy_desc: "Définissez votre profil sur privé. Vérifiez régulièrement qui peut voir vos publications, votre localisation et vos informations personnelles.",
        adv_social_money_requests: "Méfiez-vous des demandes de transfert d'argent", adv_social_money_requests_desc: "Si un \"ami\" vous demande soudainement de l'argent par message direct, vérifiez-le en l'appelant directement. Le piratage de compte pour la fraude financière est très courant.", adv_social_login_alerts: "Activez les alertes de connexion", adv_social_login_alerts_desc: "Activez les notifications pour les nouvelles connexions sur tous vos comptes. Vous serez instantanément alerté si quelqu'un d'autre accède à votre profil.",
        adv_wifi_header: "Sécurité WiFi et réseaux", adv_wifi_desc: "Restez en sécurité sur les réseaux publics et privés", adv_wifi_avoid: "Évitez le WiFi public pour les tâches sensibles",
        adv_wifi_avoid_desc: "Ne faites jamais d'opérations bancaires en ligne ou n'entrez des mots de passe sur le WiFi du café ou de l'aéroport. Les attaquants peuvent intercepter facilement le trafic non chiffré.", adv_wifi_vpn: "Utilisez un VPN sur les réseaux publics", adv_wifi_vpn_desc: "Un VPN chiffre votre connexion et cache votre activité aux attaquants sur le même réseau. Utilisez Proton VPN (niveau gratuit disponible).", adv_email_header: "Sécurité des e-mails", adv_email_unsubscribe: "Ne vous désabonnez pas aveuglément des spams", 
        adv_email_unsubscribe_desc: "Cliquer sur \"Se désabonner\" sur un email spam confirme que votre adresse est active. Marquez-le simplement comme spam et supprimez-le à la place.", adv_email_breached: "Vérifiez si votre e-mail a été compromis", adv_email_breached_desc: "Utilisez le scanner de messagerie de Radaa pour voir si votre adresse a été compromise dans des violations de données connues et agissez immédiatement si c'est le cas.", 
        adv_email_filters: "Utilisez les filtres de messagerie et les paramètres de spam", adv_email_filters_desc: "Activez les filtres de spam dans votre client e-mail. Gmail et Outlook disposent d'une protection intégrée — assurez-vous qu'elle est activée.",
    },
    ary: {
        dir: "rtl", welcome: "مرحبا بيك في ردع", logout: "خروج", analyze_btn: "حلل الميساج",risk_score:"مستوى الخطورة",risk_level:"درجة الخطر",breaches_found:"تم العثور على اختراقات",
        description: "مرحبا بيك في ردع، المنصة لي كتحميك من الميساجات ديال النصب والسبام.",
        home: "الرئيسية", about: "شكون احنا", login: "تسجيل الدخول", register: "تسجيل", email: "البريد الإلكتروني :", password: "كلمة المرور :", username: "اسم المستخدم :", login_btn: "تسجيل الدخول إلى الردع", create_account: "إنشاء حساب",
        msg: "الرسائل", lnk: "الروابط", eml: "البريد الإلكتروني", fil: "الملفات", adv: "نصيحة",
        msg_title: "كاشف الميساجات ديال النصب والسبام", detect_title: "كاشف التهديدات بالذكاء", detect_desc: "حط أي محتوى مشبوه. الذكاء الاصطناعي غادي يحلله.", detect_legend: "محلل الذكاء", detect_label: "المحتوى المشبوه:", detect_btn: "حلل بالذكاء الاصطناعي", detect_loading: "الذكاء الاصطناعي كيحلل...", detect_risk: "درجة الخطر:",
        msg_desc: "لصق أي ميساج جاك فيه الشك، سواء إس إم إس (SMS) أو إيميل هنا لتحت. السيستيم ديال منصة ردع غادي يحلل الهدرة باش يشوف واش كاين شي بلان ديال النصب، ليانات شفارة أو كذوب.",
        scan_title: "ماكينة الفحص والتحليل", label_text: "الميساج لي شاك فيه:",
        detected_words: "الكلمات لي فرشو الميساج (خطر):",email_summary: "ملخص الأمان", email_leak_check: "فحص التسريبات", email_validation: "صلاحية الإيميل", email_exposed: "البيانات لي تسربو", email_recommendations: "التوصيات",
        safe_title: "🛡️ هاني: ميساج عادي ما فيه تا خطر", safe_desc: "الميساج كيبان نقي ومزيان. ولكن ديما بقى حادي راسك من بنادم لي ما كتعرفوش.",
        spam_title: "⚠️ حاري راسك: هادا ميساج ديال النصب (Spam)", spam_desc: "خطر كبير! هاد الميساج فيه كلمات كيتستعملو ديما باش يطمعو العباد ويشفرو ليهم الوفا ولا لكونط بونكير ديالهم.",
        about_title: "شكون هو ردع", about_desc: "ردع منصة ديال الأمن السيبراني مصممة باش تحمي العباد من السبام والنصب والليانات الكذوب والملفات الخطرة.",
        stat_features: "الميزات", stat_languages: "اللغات", stat_powered: "بالذكاء", stat_free: "بالمجان",
        goals_title: "الأهداف ديالنا", team_title: "الفريق", tech_title: "التكنولوجيا", team_role: "طالب جامعي · مطور فول ستاك",
        goal_1: "كشف ميساجات النصب والسبام", goal_2: "فحص الليانات الخطرة", goal_3: "تحليل الملفات المشبوهة",
        goal_4: "اختبار أمان الإيميل", goal_5: "دعم جميع اللغات", goal_6: "حماية العباد على الانترنت",
        links_title: "فاحص الليانات", links_desc: "حط الليانات المشبوهة باش نفحصوهم.", links_legend: "محلل الليانات", links_label: "زيد رابط مشبوه:", links_scan_btn: "فحص جميع الليانات", links_loading: "كنفحصو الليانات...",
        files_title: "فاحص الملفات", files_desc: "حط أي ملف مشبوه باش نفحصوه.", files_legend: "محلل الملفات", files_drop: "اضغط أو سحب ملف هنا", files_hint: "مدعوم: txt, pdf, exe, zip...", files_scan_btn: "فحص الملف", files_loading: "كنحللو الملف...", files_risk: "درجة الخطر:",
        email_title: "فاحص أمان الإيميل", email_desc: "شوف واش الإيميل ديالك تسرب فشي اختراق و تحقق من صلاحيته.",
        email_legend: "محلل الإيميل", email_label: "حط الإيميل ديالك:", email_scan_btn: "فحص",
        email_loading: "كنفحصو الإيميل...", email_leak_title: "فحص التسريبات", email_valid_title: "صلاحية الإيميل",
        adv: "النصايح",adv_email_desc: "حافظ على أمان الإيميل ديالك من التهديدات والسبام",
        adv_title: "بقى بأمان على النيت", adv_subtitle: "اختار تصنيف باش تشوف النصايح",
        adv_welcome_title: "اختار تصنيف", adv_welcome_desc: "ضغط على واحد من التصنيفات فوق باش تشوف النصايح",
        adv_cat_apps: "التطبيقات والتنزيل", adv_cat_passwords: "كلمات السر", adv_cat_phishing: "النصب والتصيد",
        adv_cat_social: "السوسيال ميديا", adv_cat_wifi: "الواي فاي والشبكات", adv_cat_email: "أمان الإيميل",
        adv_wifi_verify: "تحقق من اسم الشبكة", adv_wifi_verify_desc: "الهاكرز كيديرو نقاط اتصال مزورة باسم 'Free_Airport_WiFi'. ديما تحقق من الاسم الصحيح للشبكة مع الموظفين قبل ما تربط.",
        adv_wifi_secure: "أمّن الراوتر ديالك", adv_wifi_secure_desc: "بدل كلمة السر الافتراضية ديال الراوتر. استعمل تشفير WPA3 أو WPA2. طفي WPS لي كيتعرض لهجمات القوة الغاشمة.",
        adv_email_attachments: "متحلش المرفقات لي ما متوقعهاش", adv_email_attachments_desc: "البرمجيات الخبيثة كتوصل غالباً عبر مرفقات الإيميل (.exe, .zip, .docx مع وحدات ماكرو). استعمل فاحص الملفات ديال ردع قبل ما تحلهم.",
        adv_email_sender: "تحقق من الإيميل ديال المرسل", adv_email_sender_desc: "المحتالين كيديرو عناوين بحال 'support@paypa1.com' (مع 1 بدل l). ديما تحقق من الأخطاء الإملائية بعناية.",
        adv_cat_apps_desc: "بقى بأمان عند تحميل واستعمال التطبيقات", adv_app_download: "حط وخذ من متاجر رسمية فقط", adv_app_download_desc: "استعمل ديما Google Play أو App Store. تجنب مواقع APK برا — غالبا كتحط برامج خطيرة مخبيين بداخل التطبيقات.",
        adv_app_permissions: "تحقق من صلاحيات التطبيق", adv_app_permissions_desc: "تطبيق ديال المصباح ما كتحتاج حتى تدخل لجهات الاتصال أو الكاميرا ديالك. شوف الصلاحيات قبل ما تحط أي تطبيق.", adv_app_reviews: "شوف التقييمات والآراء",
        adv_app_reviews_desc: "التقييم ضعيف أو كم قليل من الآراء على تطبيق جديد كيبان علامة سيئة. شوف الآراء الجديدة بعناية قبل ما تحملها.", adv_app_updates: "دير التطبيقات محدثة", adv_app_updates_desc: "التحديثات كتصلح الفراغات الأمنية. فعل التحديثات الأوتوماتيكية باش تبقى محمي من الثغرات المعروفة.", 
        adv_app_cracked: "تجنب التطبيقات المقرصنة أو المعدلة", adv_app_cracked_desc: "التطبيقات المعدلة (النسخ المقرصنة) كتجاوز فحوصات الأمان وكتقدر تسرق البيانات ديالك وكلمات السر أو معلومات الحساب البنكي.", adv_passwords_title: "أمان كلمات السر", 
        adv_passwords_desc: "حمي الحسابات ديالك بكلمات سر قوية وفريدة", adv_password_strong: "استعمل كلمة سر قوية", adv_password_strong_desc: "استعمل 12 حرف على الأقل مع مزج الأحرف الكبيرة والصغيرة والأرقام والرموز. تجنب الأسماء والتواريخ أو الكلمات الشايعة.",
        adv_password_reuse: "ما تعودش تستعمل نفس كلمة السر", adv_password_reuse_desc: "إذا تم كسر حساب واحد، المهاجمين غادي يجربو نفس كلمة السر على جميع الحسابات ديالك. استعمل كلمة سر فريدة لكل موقع.", adv_password_manager: "استعمل مدير كلمات السر",
        adv_password_manager_desc: "أدوات بحال Bitwarden أو 1Password كتولد وكتخزن كلمات سر معقدة بأمان بحيث كتحتاج فقط تتخزن واحدة.", adv_2fa: "فعل المصادقة بعاملين (2FA)", adv_2fa_desc: "حتى لو تم سرقة كلمة السر ديالك، 2FA كتمنع المهاجمين. فعلها على الإيميل والحسابات البنكية ووسائل التواصل.", 
        adv_password_change: "بدل كلمات السر بعد الاختراق", adv_password_change_desc: "استعمل ماسح الإيميل في ردع للتحقق واش الإيميل ديالك تسرب في اختراق، ثم بدل تلك كلمات السر على الفور.", adv_phishing_title: "النصب والتصيد", adv_phishing_desc: "تعرف على محاولات الاحتيال على النت وتجنبها", adv_phishing_links: "ما تنقرش على الروابط المريبة", 
        adv_phishing_links_desc: "حط الماوس على الروابط قبل ما تنقر باش تشوف العنوان الحقيقي. إذا بان غريب أو كيستعمل مختصرات، استعمل ماسح الروابط ديال ردع أولاً.", adv_phishing_urgency: "احذر من حيل الاستعجالية", adv_phishing_urgency_desc: "\"الحساب ديالك غادي نتعلق في 24 ساعة!\" هي خدعة ضغط كلاسيكية. الشركات الشرعية ما كتعجل بيك بهاد الطريقة.", 
        adv_phishing_scams: "إذا بان تروب حسن...", adv_phishing_scams_desc: "\"ربحتي 5000 دولار!\" أو \"آيفون بلاش!\" فخاخ احتيال. ما تدخلش معلومات شخصية على صفحات مطالبة الجوائز.", adv_phishing_sender: "تحقق من هوية المرسل", 
        adv_phishing_sender_desc: "المحتالين كيقلدو Netflix أو PayPal أو البنك ديالك. تحقق ديما من نطاق الإيميل ديال المرسل بعناية من أجل الأخطاء الصغيرة.", adv_phishing_analysis: "استعمل ردع لتحليل الرسائل المريبة", adv_phishing_analysis_desc: "انسخ أي رسالة نصية أو إيميل مريب والصقها في كاشف الرسائل في ردع للحصول على تحليل فوري باستعمال الذكاء الاصطناعي.", 
        adv_social_header: "أمان وسائل التواصل", adv_social_desc: "حافظ على الخصوصية ديالك على منصات التواصل", adv_social_limit: "حد من المعلومات الشخصية", adv_social_limit_desc: "ما تشاركش رقم الهاتف ديالك أو العنوان أو بطاقة الهوية بلاش. المحتالين كيستعملو هاد المعلومات باش يستهدفوك ويلعبو بيك.", 
        adv_social_friend_requests: "كن حادي راسك من طلبات الصداقة", adv_social_friend_requests_desc: "الحسابات الوهمية كتستعمل باش تجمع معلومات أو تنشر احتيالات. تحقق من الهوية قبل ما تقبل الطلبات من الغرباء.", adv_social_privacy: "شوف إعدادات الخصوصية", 
        adv_social_privacy_desc: "اضبط الملف ديالك على خاص. تحقق بصراحة من كيشوف المنشورات ديالك والموقع والمعلومات الشخصية ديالك.", adv_social_money_requests: "احذر من طلبات تحويل الفلوس", adv_social_money_requests_desc: "إذا طلب \"صديق\" فجأة فلوس عبر الرسالة المباشرة، تحقق باش تصبر عليه بالتليفون. اختراق الحساب للنصب على الفلوس شي عام برا.", 
        adv_social_login_alerts: "فعل تنبيهات الدخول", adv_social_login_alerts_desc: "فعل الإشعارات للدخول الجديد على جميع الحسابات ديالك. غادي تتنبهت على الفور إذا دخل واحد آخر للملف ديالك.", adv_wifi_header: "أمان الواي فاي والشبكات", adv_wifi_desc: "بقى بأمان على الشبكات العامة والخاصة",
        adv_wifi_avoid: "تجنب واي فاي العام للحاجات الحساسة", adv_wifi_avoid_desc: "ما دير عمليات بنكية على النت أو ما تدخل كلمات السر على واي فاي ديال القهوة أو المطار. المهاجمين كيقدرو يعترضو الإنترنت بسهولة.", adv_wifi_vpn: "استعمل VPN على الشبكات العامة", 
        adv_wifi_vpn_desc: "VPN كتشفر الاتصال ديالك وتخبي النشاط ديالك من المهاجمين على نفس الشبكة. استعمل Proton VPN (الطبقة المجانية موجودة).", adv_email_header: "أمان الإيميل", adv_email_unsubscribe: "ما تلغي الاشتراك من الرسائل المزعجة بلا فكرة", 
        adv_email_unsubscribe_desc: "النقر على 'لغي الاشتراك' على رسالة إيميل مزعجة كتؤكد أن العنوان ديالك نشيط. فقط صنفها كرسالة مزعجة ومسحها.", adv_email_breached: "تحقق واش الإيميل ديالك اتسرب", adv_email_breached_desc: "استعمل ماسح الإيميل في ردع باش تشوف واش العنوان ديالك ظهر في اختراقات معروفة واخذ إجراء فوراً إذا كان هاك.", 
        adv_email_filters: "استعمل مرشحات الإيميل والرسائل المزعجة", adv_email_filters_desc: "فعل مرشحات الرسائل المزعجة في برنامج الإيميل ديالك. Gmail و Outlook فيهم حماية مدمجة — تأكد من تفعيلها.",
    }
};

function changeLanguage(lang) {
    localStorage.setItem("selectedLang", lang);
    const translation = translations[lang];
    if (!translation) return;

    document.documentElement.dir = translation.dir;
    document.documentElement.lang = lang === 'ary' ? 'ar' : lang;

    document.querySelectorAll("[data-i18n]").forEach(element => {
        const key = element.getAttribute("data-i18n");
        if (translation[key]) {
            if(key === "welcome") {
                element.innerHTML = `<i class="fa-solid fa-shield-halved"></i> ${translation[key]}`;
            } else if(key === "logout") {
                element.innerHTML = ` ${translation[key]}`;
            } else {
                element.textContent = translation[key];
            }
        }
    });

    const langMenu = document.querySelector(".lang-menu-container");
    if (langMenu) {
        if (lang === "ar" || lang === "ary") langMenu.classList.add("lang-ar");
        else langMenu.classList.remove("lang-ar");
    }

    if (document.getElementById("resultBox") && document.getElementById("resultBox").style.display === "block") {
        analyzeText();
    }
}

function toggleLangMenu() {
    document.getElementById("langDropdown").classList.toggle("show");
}

window.onclick = function(event) {
    if (!event.target.matches('.lang-circle-btn')) {
        var dropdowns = document.getElementsByClassName("lang-dropdown");
        for (var i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) openDropdown.classList.remove('show');
        }
    }
}

async function analyzeText() {
    const rawText = document.getElementById("spamText").value.trim();
    const resultBox = document.getElementById("resultBox");
    const resultStatus = document.getElementById("resultStatus");
    const resultReason = document.getElementById("resultReason");
    const wordsList = document.getElementById("wordsList");
    const currentLang = localStorage.getItem("selectedLang") || "en";

    if (!rawText) {
        resultBox.style.display = "none";
        return;
    }

    const cleanText = rawText.toLowerCase();
  
    const inputWords = cleanText.replace(/[^a-zA-Z0-9\u0600-\u06FFàâæçéèêëîïôœùûüÿ]/g, " ").split(/\s+/);
    
    let foundSpamWords = [];

    remoteSpamKeywords.forEach(keyword => {
        const isArabicKeyword = /[\u0600-\u06FF]/.test(keyword);

        if (isArabicKeyword) {
          
            if (cleanText.includes(keyword)) {
                if (!foundSpamWords.includes(keyword)) {
                    foundSpamWords.push(keyword);
                }
            }
        } else {
           
            if (inputWords.includes(keyword)) {
                if (!foundSpamWords.includes(keyword)) {
                    foundSpamWords.push(keyword);
                }
            }
        }
    });

    if (cleanText.includes("تهكيرك") || cleanText.includes("نسرقك") || cleanText.includes("password") || cleanText.includes("http")) {
        if (!foundSpamWords.includes("خطر أمني / phishing")) {
            foundSpamWords.push("خطر أمني / phishing");
        }
    }

    resultBox.style.display = "block";
    wordsList.innerHTML = "";

    if (foundSpamWords.length > 0) {
        resultBox.className = "result-box spam-alert";
        resultStatus.textContent = translations[currentLang].spam_title;
        resultReason.textContent = translations[currentLang].spam_desc;
        document.getElementById("suspiciousWordsContainer").style.display = "block";

        foundSpamWords.forEach(word => {
            const span = document.createElement("span");
            span.className = "word-tag";
            span.textContent = `[ ${word} ]`;
            wordsList.appendChild(span);
        });

        await saveMessageLog(rawText, true);

    } else {
        resultBox.className = "result-box safe-alert";
        resultStatus.textContent = translations[currentLang].safe_title;
        resultReason.textContent = translations[currentLang].safe_desc;
        document.getElementById("suspiciousWordsContainer").style.display = "none";
        
        await saveMessageLog(rawText, false);
    }
}

document.addEventListener("DOMContentLoaded", async () => {
    const savedLang = localStorage.getItem("selectedLang") || "en";
    changeLanguage(savedLang);
    
    await loadAllLocalDatasets();

    const analyzeBtn = document.getElementById("analyzeBtn");
    if (analyzeBtn) {
        analyzeBtn.addEventListener("click", analyzeText);
    }
});

function handleLogin(event) { return true; }
function handleRegister(event) { return true; }

async function saveMessageLog(content, isSpam) {
    try {
        await fetch('/save_message', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ content: content, is_spam: isSpam })
        });
    } catch (e) { console.error("Save error:", e); }
}

async function saveLinkLog(url, isSafe) {
    try {
        await fetch('/save_link', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ url: url, is_safe: isSafe })
        });
    } catch (e) { console.error("Save error:", e); }
}

async function saveFileLog(filename, isSafe) {
    try {
        await fetch('/save_file', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ filename: filename, is_safe: isSafe })
        });
    } catch (e) { console.error("Save error:", e); }
}