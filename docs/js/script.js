const translations = {
    en: {
        dir: "ltr", welcome: "welcome to Radaa", logout: "Logout",
        description: "Welcome to Radaa a platform that ensures you are safe from spam",
        home: "Home", about: "About", contact: "Contact",
        msg: "Messages", lnk: "Links", det: "Detect by Ai", fil: "files", adv: "Advice",
        msg_title: "Spam Message Detector",
        msg_desc: "Paste any suspicious message, SMS, or email below. Our security analyzer will scan the text for malicious patterns, phishing links, and fraud indicators.",
        scan_title: "Terminal Analyzer", label_text: "Suspicious Text / Message:",
        detected_words: "Detected Red-Flags:",
        safe_title: "🛡️ SAFE: No Threat Detected", safe_desc: "The message looks clean. However, always remain cautious with unknown senders.",
        spam_title: "⚠️ ALERT: Spam / Phishing Detected", spam_desc: "High risk! This message contains fraudulent keywords often used in social engineering scams."
    },
    ar: {
        dir: "rtl", welcome: "مرحباً بك في ردع", 
        description: "مرحباً بك في ردع، المنصة التي تضمن حمايتك من الرسائل المزعجة (Spam).", 
        home: "الرئيسية", about: "من نحن", contact: "اتصل بنا",
        msg: "الرسائل", lnk: "الروابط", det: "الفحص بالذكاء الاصطناعي", fil: "الملفات", adv: "نصيحة",
        logout: "تسجيل الخروج",
        msg_title: "كاشف الرسائل المزعجة والاحتيالية",
        msg_desc: "قم بلصق أي رسالة مشبوهة، رسالة نصية قصيرة (SMS)، أو بريد إلكتروني أدناه. سيتولى محلل الأمان في منصة ردع فحص النص لكشف الأنماط الخبيثة، روابط التصيد، ومؤشرات الاحتيال.", 
        scan_title: "محلل البيانات الآمن", label_text: "النص أو الرسالة المشبوهة:",
        detected_words: "الكلمات الدلالية المكتشفة (خطورة):",
        safe_title: "🛡️ آمن: لم يتم العثور على تهديد", safe_desc: "تبدو الرسالة نظيفة وآمنة. ومع ذلك، يرجى الحذر دائماً من المرسلين المجهولين.",
        spam_title: "⚠️ تحذير: تم اكتشاف رسالة احتيالية (Spam)", spam_desc: "مستوى الخطورة عالٍ! تحتوي هذه الرسالة على كلمات دلالية مضللة تُستخدم عادةً في عمليات النصب والهندسة الاجتماعية."
    },
    fr: {
        dir: "ltr", welcome: "Bienvenue sur Radaa", logout: "Déconnexion",
        description: "Bienvenue sur Radaa, une plateforme qui vous protège contre le spam.",
        home: "Accueil", about: "À propos", contact: "Contact",
        msg: "Messages", lnk: "Liens", det: "Détection par IA", fil: "Fichiers", adv: "Conseils",
        msg_title: "Détecteur de Messages Spam",
        msg_desc: "Collez tout message, SMS ou e-mail suspect ci-dessous. Notre analyseur de sécurité scannera le texte pour détecter les modèles malveillants, les liens de phishing et les indicateurs de fraude.",
        scan_title: "Analyseur de Terminal", label_text: "Texte / Message Suspect:",
        detected_words: "Indicateurs de Risque Détectés:",
        safe_title: "🛡️ SÉCURISÉ: Aucun Danger Détecté", safe_desc: "Le message semble propre. Restez néanmoins vigilant face aux expéditeurs inconnus.",
        spam_title: "⚠️ ALERTE: Spam / Phishing Détecté", spam_desc: "Risque élevé! Ce message contains des mots-clés frauduleux souvent utilisés dans les arnaques d'ingénierie sociale."
    },
    ary: { 
        dir: "rtl", welcome: "مرحبا بيك في ردع", logout: "خروج",
        description: "مرحبا بيك في ردع، المنصة لي كتحميك من الميساجات ديال النصب والسبام.",
        home: "الرئيسية", about: "شكون احنا", contact: "اتصل بنا",
        msg: "الميساجات", lnk: "الروابط", det: "الذكاء الاصطناعي", fil: "الملفات", adv: "نصيحة",
        msg_title: "كاشف الميساجات ديال النصب والسبام",
        msg_desc: "لصق أي ميساج جاك فيه الشك، سواء إس إم إس (SMS) أو إيميل هنا لتحت. السيستيم ديال منصة ردع غادي يحلل الهدرة باش يشوف واش كاين شي بلان ديال النصب، ليانات شفارة أو كذوب.", 
        scan_title: "ماكينة الفحص والتحليل", label_text: "الميساج لي شاك فيه:",
        detected_words: "الكلمات لي فرشو الميساج (خطر):",
        safe_title: "🛡️ هاني: ميساج عادي ما فيه تا خطر", safe_desc: "الميساج كيبان نقي ومزيان. ولكن ديما بقى حادي راسك من بنادم لي ما كتعرفوش.",
        spam_title: "⚠️ حاري راسك: هادا ميساج ديال النصب (Spam)", spam_desc: "خطر كبير! هاد الميساج فيه كلمات كيتستعملو ديما باش يطمعو العباد ويشفرو ليهم الوفا ولا لكونط بونكير ديالهم."
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
                element.innerHTML = `<i class="fa-solid fa-power-off"></i> ${translation[key]}`;
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


function analyzeText() {
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
    } else {
        resultBox.className = "result-box safe-alert";
        resultStatus.textContent = translations[currentLang].safe_title;
        resultReason.textContent = translations[currentLang].safe_desc;
        document.getElementById("suspiciousWordsContainer").style.display = "none";
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
    event.preventDefault();
    document.getElementById("loginContainer").style.display = "none";
    document.getElementById("registerContainer").style.display = "block";
}


function showLogin(event) {
    event.preventDefault();
    document.getElementById("registerContainer").style.display = "none";
    document.getElementById("loginContainer").style.display = "block";
}


function handleLogin(event) {
   
    console.log("🔒 Accessing platform secure shell...");
    return true; 
}


function handleRegister(event) {
    event.preventDefault();
    alert("🎉 Account created securely! Now login to access the terminal.");
   
    document.getElementById("registerContainer").style.display = "none";
    document.getElementById("loginContainer").style.display = "block";
    return false;
}