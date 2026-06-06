const translations = {
    en: {
        dir: "ltr", welcome: "welcome to Radaa", logout: "Logout",analyze_btn: "Analyze Message",
        description: "Welcome to Radaa a platform that ensures you are safe from spam",
        home: "Home", about: "About", login: "Login", register: "Register",email: "Email :", password: "Password :", username: "Username :", login_btn: "Login to Terminal", create_account: "Create Account",
        msg: "Messages", lnk: "Links", det: "Detect by Ai", fil: "files", adv: "Advice",
        msg_title: "Spam Message Detector",
        msg_desc: "Paste any suspicious message, SMS, or email below. Our security analyzer will scan the text for malicious patterns, phishing links, and fraud indicators.",
        scan_title: "Terminal Analyzer", label_text: "Suspicious Text / Message:",
        detected_words: "Detected Red-Flags:",
        safe_title: "🛡️ SAFE: No Threat Detected", safe_desc: "The message looks clean. However, always remain cautious with unknown senders.",
        spam_title: "⚠️ ALERT: Spam / Phishing Detected", spam_desc: "High risk! This message contains fraudulent keywords often used in social engineering scams."
        ,about_title: "About Radaa", about_desc: "Radaa is a cybersecurity platform designed to protect users from spam, phishing, malicious links, and suspicious files.",
        stat_features: "Features", stat_languages: "Languages", stat_powered: "Powered", stat_free: "Free",
        goals_title: "Our Goals", team_title: "The Team", tech_title: "Tech Stack", team_role: "University Student · Full Stack Developer",
        goal_1: "Detect spam & phishing messages", goal_2: "Scan malicious links", goal_3: "Analyze suspicious files",
        goal_4: "AI-powered threat detection", goal_5: "Multilingual support", goal_6: "Keep users safe online"
    },
    ar: {
        dir: "rtl", welcome: "مرحباً بك في ردع", analyse_message: "فحص الرسالة", 
        description: "مرحباً بك في ردع، المنصة التي تضمن حمايتك من الرسائل المزعجة (Spam).", 
        home: "الرئيسية", about: "من نحن", register: "تسجيل", email: "البريد الإلكتروني :", password: "كلمة المرور :", username: "اسم المستخدم :", login_btn: "تسجيل الدخول إلى الردع", create_account: "إنشاء حساب",
        msg: "الرسائل", lnk: "الروابط", det: "الفحص بالذكاء الاصطناعي", fil: "الملفات", adv: "نصيحة",
        logout: "تسجيل الخروج",login: "تسجيل الدخول", 
        analyze_btn: "تحليل الرسالة",
        msg_title: "كاشف الرسائل المزعجة والاحتيالية",
        msg_desc: "قم بلصق أي رسالة مشبوهة، رسالة نصية قصيرة (SMS)، أو بريد إلكتروني أدناه. سيتولى محلل الأمان في منصة ردع فحص النص لكشف الأنماط الخبيثة، روابط التصيد، ومؤشرات الاحتيال.", 
        scan_title: "محلل البيانات الآمن", label_text: "النص أو الرسالة المشبوهة:",
        detected_words: "الكلمات الدلالية المكتشفة (خطورة):",
        safe_title: "🛡️ آمن: لم يتم العثور على تهديد", safe_desc: "تبدو الرسالة نظيفة وآمنة. ومع ذلك، يرجى الحذر دائماً من المرسلين المجهولين.",
        spam_title: "⚠️ تحذير: تم اكتشاف رسالة احتيالية (Spam)", spam_desc: "مستوى الخطورة عالٍ! تحتوي هذه الرسالة على كلمات دلالية مضللة تُستخدم عادةً في عمليات النصب والهندسة الاجتماعية.",
        about_title: "عن ردع", about_desc: "ردع منصة أمن سيبراني مصممة لحماية المستخدمين من الرسائل المزعجة والتصيد والروابط والملفات الخبيثة.",
        stat_features: "مميزات", stat_languages: "لغات", stat_powered: "مدعوم بالذكاء", stat_free: "مجاني",
        goals_title: "أهدافنا", team_title: "الفريق", tech_title: "التقنيات المستخدمة", team_role: "طالب جامعي · مطور متكامل",
        goal_1: "كشف رسائل Spam والتصيد", goal_2: "فحص الروابط الخبيثة", goal_3: "تحليل الملفات المشبوهة",
        goal_4: "كشف التهديدات بالذكاء الاصطناعي", goal_5: "دعم متعدد اللغات", goal_6: "حماية المستخدمين على الإنترنت"
    },
    fr: {
        dir: "ltr", welcome: "Bienvenue sur Radaa", logout: "Déconnexion", analyse_message: "Analyser le message",
        description: "Bienvenue sur Radaa, une plateforme qui vous protège contre le spam.",
        home: "Accueil", about: "À propos", login: "Connexion", register: "Inscription", email: "Email :", password: "Mot de passe :", username: "Nom d'utilisateur :", login_btn: "Se connecter", create_account: "Créer un compte",
        msg: "Messages", lnk: "Liens", det: "Détection par IA", fil: "Fichiers", adv: "Conseils",
        analyze_btn: "Analyser le message",
        msg_title: "Détecteur de Messages Spam",
        msg_desc: "Collez tout message, SMS ou e-mail suspect ci-dessous. Notre analyseur de sécurité scannera le texte pour détecter les modèles malveillants, les liens de phishing et les indicateurs de fraude.",
        scan_title: "Analyseur de Terminal", label_text: "Texte / Message Suspect:",
        detected_words: "Indicateurs de Risque Détectés:",
        safe_title: "🛡️ SÉCURISÉ: Aucun Danger Détecté", safe_desc: "Le message semble propre. Restez néanmoins vigilant face aux expéditeurs inconnus.",
        spam_title: "⚠️ ALERTE: Spam / Phishing Détecté", spam_desc: "Risque élevé! Ce message contains des mots-clés frauduleux souvent utilisés dans les arnaques d'ingénierie sociale.",
        about_title: "À propos de Radaa", about_desc: "Radaa est une plateforme de cybersécurité conçue pour protéger les utilisateurs contre le spam, le phishing, les liens malveillants et les fichiers suspects.",
        stat_features: "Fonctionnalités", stat_languages: "Langues", stat_powered: "Propulsé par IA", stat_free: "Gratuit",
        goals_title: "Nos Objectifs", team_title: "L'Équipe", tech_title: "Technologies", team_role: "Étudiant Universitaire · Développeur Full Stack",
        goal_1: "Détecter spam et phishing", goal_2: "Scanner les liens malveillants", goal_3: "Analyser les fichiers suspects",
        goal_4: "Détection IA des menaces", goal_5: "Support multilingue", goal_6: "Protéger les utilisateurs en ligne"
    },
    ary: { 
        dir: "rtl", welcome: "مرحبا بيك في ردع", logout: "خروج",analyze_btn: "حلل الميساج",
        description: "مرحبا بيك في ردع، المنصة لي كتحميك من الميساجات ديال النصب والسبام.",
        home: "الرئيسية", about: "شكون احنا", login: "تسجيل الدخول", register: "تسجيل", email: "البريد الإلكتروني :", password: "كلمة المرور :", username: "اسم المستخدم :", login_btn: "تسجيل الدخول إلى الردع", create_account: "إنشاء حساب",
        msg: "الميساجات", lnk: "الروابط", det: "الذكاء الاصطناعي", fil: "الملفات", adv: "نصيحة",
        msg_title: "كاشف الميساجات ديال النصب والسبام",
        msg_desc: "لصق أي ميساج جاك فيه الشك، سواء إس إم إس (SMS) أو إيميل هنا لتحت. السيستيم ديال منصة ردع غادي يحلل الهدرة باش يشوف واش كاين شي بلان ديال النصب، ليانات شفارة أو كذوب.", 
        scan_title: "ماكينة الفحص والتحليل", label_text: "الميساج لي شاك فيه:",
        detected_words: "الكلمات لي فرشو الميساج (خطر):",
        safe_title: "🛡️ هاني: ميساج عادي ما فيه تا خطر", safe_desc: "الميساج كيبان نقي ومزيان. ولكن ديما بقى حادي راسك من بنادم لي ما كتعرفوش.",
        spam_title: "⚠️ حاري راسك: هادا ميساج ديال النصب (Spam)", spam_desc: "خطر كبير! هاد الميساج فيه كلمات كيتستعملو ديما باش يطمعو العباد ويشفرو ليهم الوفا ولا لكونط بونكير ديالهم.",
        about_title: "شكون هو ردع", about_desc: "ردع منصة ديال الأمن السيبراني مصممة باش تحمي العباد من السبام والنصب والليانات الكذوب والملفات الخطرة.",
        stat_features: "الميزات", stat_languages: "اللغات", stat_powered: "بالذكاء", stat_free: "بالمجان",
        goals_title: "الأهداف ديالنا", team_title: "الفريق", tech_title: "التكنولوجيا", team_role: "طالب جامعي · مطور فول ستاك",
        goal_1: "كشف ميساجات النصب والسبام", goal_2: "فحص الليانات الخطرة", goal_3: "تحليل الملفات المشبوهة",
        goal_4: "كشف التهديدات بالذكاء الاصطناعي", goal_5: "دعم جميع اللغات", goal_6: "حماية العباد على الانترنت"
    }
};


const LOCAL_DATABASES = {
    en_sms_spam: "data/en_spam.csv",
    fr_phishing: "data/fr_phishing.txt",
    ar_spam: "data/ar_spam.txt",
    ary_moroccan: "data/ary_moroccan.json"
};

let remoteSpamKeywords = [];


async function loadAllLocalDatasets() {
    console.log("⏳ Loading local security databases...");
    
    try {
      
        const [resEn, resFr, resAr, resAry] = await Promise.all([
            fetch(LOCAL_DATABASES.en_sms_spam).then(r => r.ok ? r.text() : ""),
            fetch(LOCAL_DATABASES.fr_phishing).then(r => r.ok ? r.text() : ""),
            fetch(LOCAL_DATABASES.ar_spam).then(r => r.ok ? r.text() : ""),
            fetch(LOCAL_DATABASES.ary_moroccan).then(r => r.ok ? r.json() : null)
        ]);

        if (resEn) {
            const lines = resEn.split("\n");
            for (let i = 1; i < lines.length; i++) {
                const match = lines[i].split(",");
                if (match && match[1]) {
                    const words = match[1].toLowerCase().replace(/[^a-z ]/g, "").split(" ");
                    words.forEach(w => {
                        if (w.length > 3 && !remoteSpamKeywords.includes(w)) remoteSpamKeywords.push(w);
                    });
                }
            }
        }

      
        const txtData = resFr + "\n" + resAr;
        txtData.split("\n").forEach(line => {
            const clean = line.trim().toLowerCase();
            if (clean && clean.length > 2 && !remoteSpamKeywords.includes(clean)) {
                remoteSpamKeywords.push(clean);
            }
        });

       
        if (resAry) {
            const aryList = resAry.keywords || resAry;
            aryList.forEach(k => {
                if (!remoteSpamKeywords.includes(k.toLowerCase())) remoteSpamKeywords.push(k.toLowerCase());
            });
        }

        const ultimateTriggers = [
            "impôt", "amende", "135€", "régularisez", "renewal", "credits", "topped up", "bubbletext", "tgxxrz",
            "درهم", "تربح", "دراهم", "خمسة", "فايسبوك", "فيسبوك", "facebook", "password", "تهكيرك", "نسرقك"
        ];
        ultimateTriggers.forEach(t => {
            if (!remoteSpamKeywords.includes(t)) remoteSpamKeywords.push(t);
        });

        console.log("🛡️ Success! Local databases loaded. Active filters: " + remoteSpamKeywords.length);
    } catch (error) {
        console.error("❌ Error reading local files:", error);
    }
}


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
    let foundSpamWords = [];

    remoteSpamKeywords.forEach(keyword => {
        if (cleanText.includes(keyword)) {
            if (!foundSpamWords.includes(keyword)) {
                foundSpamWords.push(keyword);
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


function showRegister(event) {
    if (event) event.preventDefault();
    document.getElementById("loginContainer").style.display = "none";
    document.getElementById("registerContainer").style.display = "block";
}

function showLogin(event) {
    if (event) event.preventDefault();
    document.getElementById("registerContainer").style.display = "none";
    document.getElementById("loginContainer").style.display = "block";
}


function handleLogin(event) {
   
    return true;
}


function handleRegister(event) {
    
    return true;
}

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