
const translations = {
    en: {
        dir: "ltr",
        welcome: "welcome to Radaa",
        description: "Welcome to Radaa a platform that ensures you are safe from spam",
        home: "Home", about: "About", contact: "Contact",
        msg: "Messages", lnk: "Links", det: "Detect by Ai", fil: "files", adv: "Advice"
    },
    ar: {
        dir: "rtl",
        welcome: "مرحباً بك في رداء",
        description: "مرحباً بك في رداء، المنصة التي تضمن حمايتك من الرسائل المزعجة (Spam).",
        home: "الرئيسية", about: "من نحن", contact: "اتصل بنا",
        msg: "الرسائل", lnk: "الروابط", det: "الفحص بالذكاء الاصطناعي", fil: "الملفات", adv: "نصيحة"
    },
    fr: {
        dir: "ltr",
        welcome: "Bienvenue sur Radaa",
        description: "Bienvenue sur Radaa, une plateforme qui vous protège contre le spam.",
        home: "Accueil", about: "À propos", contact: "Contact",
        msg: "Messages", lnk: "Liens", det: "Détection par IA", fil: "Fichiers", adv: "Conseils"
    }
};


function changeLanguage(lang) {

    localStorage.setItem("selectedLang", lang);
    
    const translation = translations[lang];
    if (!translation) return;

    document.documentElement.dir = translation.dir;
    document.documentElement.lang = lang;

    
    document.querySelectorAll("[data-i18n]").forEach(element => {
        const key = element.getAttribute("data-i18n");
        if (translation[key]) {
            element.textContent = translation[key];
        }
    });

    const langMenu = document.querySelector(".lang-menu-container");
    if (langMenu) {
        if (lang === "ar") {
            langMenu.classList.add("lang-ar");
        } else {
            langMenu.classList.remove("lang-ar");
        }
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
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
}

document.addEventListener("DOMContentLoaded", () => {
    const savedLang = localStorage.getItem("selectedLang") || "en";
    changeLanguage(savedLang);
});