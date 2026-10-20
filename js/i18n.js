(function () {
  "use strict";

  var STORAGE_KEY = "igames-language";
  var DEFAULT_LANG = "uk";
  var SUPPORTED = ["uk", "en"];

  var translations = {
    uk: {
      "meta.title": "iGames — Сучасна платформа інтелектуальних ігор",
      "meta.description": "Грай у шахи, класичні шашки 8х8 та довгі нарди у блискавичному додатку для комп'ютера. Серверний захист контролює кожен хід і гарантує чесну гру без читерів.",
      "meta.ogTitle": "iGames — Сучасна платформа інтелектуальних ігор",
      "meta.ogDescription": "Грай у шахи, класичні шашки 8х8 та довгі нарди у блискавичному додатку. Серверний захист гарантує 100% чесну гру без читерів.",
      "meta.ogLocale": "uk_UA",
      "a11y.skip": "Перейти до вмісту",
      "nav.about": "Про проєкт",
      "nav.docs": "Документація",
      "nav.leaderboard": "Рейтинг",
      "nav.changelog": "Оновлення",
      "nav.download": "Завантажити",
      "nav.language": "Мова",
      "nav.primaryAria": "Основна навігація",
      "nav.mobileAria": "Мобільна навігація",
      "nav.footerAria": "Навігація в нижній частині",
      "nav.openMenuAria": "Відкрити головне меню",
      "lang.groupAria": "Мова інтерфейсу",
      "hero.badge": "Інтелектуальні ігри",
      "hero.titleRest": "— Сучасна платформа інтелектуальних ігор",
      "hero.subtitle": "Грай у шахи, класичні шашки 8х8 та довгі нарди у блискавичному додатку для вашого комп'ютера. Наш надійний серверний захист повністю контролює правила та забезпечує 100% чесну гру без читерів.",
      "download.windows": "Завантажити для Windows",
      "download.linux": "Завантажити для Linux",
      "download.macos": "Завантажити для macOS",
      "download.availability": "Доступно для Windows, Linux та macOS",
      "screenshot.title": "Інтерфейс програми iGames (Intellectual Games)",
      "screenshot.placeholder": "Скріншот додатка з'явиться незабаром",
      "about.title": "Про проєкт iGames",
      "about.description": "iGames — це легка та сучасна ігрова екосистема, створена для шанувальників інтелектуальних настільних ігор, де швидкість роботи поєднується з безкомпромісною чесністю онлайн-змагань.",
      "about.nameMeaning": "Літера «i» в назві означає Intellectual Games — інтелектуальні ігри.",
      "about.card1Title": "Миттєвий запуск та стабільність",
      "about.card1Body": "Забудьте про важкі сайти та затримки. Наш комп'ютерний додаток важить лічені мегабайти, запускається за секунду та бездоганно працює навіть на слабких ноутбуках.",
      "about.card2Title": "Абсолютно чесна гра та відгуки",
      "about.card2Body": "Повне блокування обману. Усі ходи та кидки кубиків прораховуються на сервері, а вбудована система відгуків та скарг дозволяє оцінювати поведінку суперників після кожної партії.",
      "about.card3Title": "Повноцінний ігровий всесвіт",
      "about.card3Body": "Шахи, динамічні класичні шашки 8х8 з можливістю бити назад і далекобійними дамками, а також довгі нарди. Усередині — особистий профіль із перемогами, нічиїми, поразками та рейтингом ELO, живі чати кімнат і загального лобі, статистика сервера з лічильниками онлайн-гравців та активних партій, а також тренування з ботами різної складності."
    },
    en: {
      "meta.title": "iGames — Modern Platform for Intellectual Games",
      "meta.description": "Play Chess, Classic 8x8 Checkers, and Long Backgammon in a lightning-fast desktop app. Server protection validates every move for 100% fair play with no cheaters.",
      "meta.ogTitle": "iGames — Modern Platform for Intellectual Games",
      "meta.ogDescription": "Play Chess, Classic 8x8 Checkers, and Long Backgammon in a lightning-fast desktop app. Server protection validates every move for 100% fair play with no cheaters.",
      "meta.ogLocale": "en_US",
      "a11y.skip": "Skip to content",
      "nav.about": "About",
      "nav.docs": "Docs",
      "nav.leaderboard": "Leaderboard",
      "nav.changelog": "Changelog",
      "nav.download": "Download",
      "nav.language": "Language",
      "nav.primaryAria": "Primary navigation",
      "nav.mobileAria": "Mobile navigation",
      "nav.footerAria": "Footer navigation",
      "nav.openMenuAria": "Open main menu",
      "lang.groupAria": "Interface language",
      "hero.badge": "Intellectual Games",
      "hero.titleRest": "— Modern Platform for Intellectual Games",
      "hero.subtitle": "Play Chess, Classic 8x8 Checkers, and Long Backgammon in a lightning-fast desktop application. Our bulletproof server protection validates every single move to guarantee 100% fair play with no cheaters.",
      "download.windows": "Download for Windows",
      "download.linux": "Download for Linux",
      "download.macos": "Download for macOS",
      "download.availability": "Available for Windows, Linux, and macOS",
      "screenshot.title": "iGames (Intellectual Games) Client Interface",
      "screenshot.placeholder": "Application screenshot coming soon",
      "about.title": "About iGames",
      "about.description": "iGames is a lightweight, modern gaming ecosystem designed for board game enthusiasts, where maximum performance meets uncompromising digital fair play.",
      "about.nameMeaning": "The “i” in iGames stands for Intellectual Games.",
      "about.card1Title": "Instant Launch & Stability",
      "about.card1Body": "Forget about heavy web browsers and lag. Our desktop application takes up minimal space, launches in a split second, and runs flawlessly even on low-end laptops.",
      "about.card2Title": "Strict Fair Play & Player Reviews",
      "about.card2Body": "Zero tolerance for cheating. All moves and dice choices are computed strictly on the server, while our post-match feedback system allows you to review your opponent's sportsmanship.",
      "about.card3Title": "Feature-Rich Gaming Universe",
      "about.card3Body": "Chess, dynamic Classic 8x8 Checkers with backward captures and long-range flying kings, plus Long Backgammon. Inside, you get a personal profile with wins, draws, losses and ELO, live room and global lobby chats, server statistics with online player counters and active game trackers, and practice matches against AI bots at adjustable difficulty."
    }
  };

  var ACTIVE_CLASSES = ["bg-white", "text-gray-900", "shadow-sm"];
  var INACTIVE_CLASS = "text-gray-500";

  function isSupported(lang) {
    return SUPPORTED.indexOf(lang) !== -1;
  }

  function readStoredLanguage() {
    try {
      var stored = window.localStorage.getItem(STORAGE_KEY);
      return isSupported(stored) ? stored : DEFAULT_LANG;
    } catch (error) {
      return DEFAULT_LANG;
    }
  }

  function saveLanguage(lang) {
    try {
      window.localStorage.setItem(STORAGE_KEY, lang);
    } catch (error) {
      /* Storage unavailable: language still applies for this session. */
    }
  }

  function applyLanguage(lang) {
    var safeLang = isSupported(lang) ? lang : DEFAULT_LANG;
    var dict = translations[safeLang];

    document.documentElement.lang = safeLang;

    var textNodes = document.querySelectorAll("[data-i18n]");
    for (var i = 0; i < textNodes.length; i++) {
      var key = textNodes[i].getAttribute("data-i18n");
      if (typeof dict[key] === "string") {
        textNodes[i].textContent = dict[key];
      }
    }

    var contentNodes = document.querySelectorAll("[data-i18n-content]");
    for (var j = 0; j < contentNodes.length; j++) {
      var contentKey = contentNodes[j].getAttribute("data-i18n-content");
      if (typeof dict[contentKey] === "string") {
        contentNodes[j].setAttribute("content", dict[contentKey]);
      }
    }

    var ariaNodes = document.querySelectorAll("[data-i18n-aria-label]");
    for (var k = 0; k < ariaNodes.length; k++) {
      var ariaKey = ariaNodes[k].getAttribute("data-i18n-aria-label");
      if (typeof dict[ariaKey] === "string") {
        ariaNodes[k].setAttribute("aria-label", dict[ariaKey]);
      }
    }

    if (typeof dict["meta.title"] === "string") {
      document.title = dict["meta.title"];
    }

    var langButtons = document.querySelectorAll("[data-lang-btn]");
    for (var m = 0; m < langButtons.length; m++) {
      var button = langButtons[m];
      var isActive = button.getAttribute("data-lang-btn") === safeLang;

      button.setAttribute("aria-pressed", isActive ? "true" : "false");

      for (var n = 0; n < ACTIVE_CLASSES.length; n++) {
        if (isActive) {
          button.classList.add(ACTIVE_CLASSES[n]);
        } else {
          button.classList.remove(ACTIVE_CLASSES[n]);
        }
      }

      if (isActive) {
        button.classList.remove(INACTIVE_CLASS);
      } else {
        button.classList.add(INACTIVE_CLASS);
      }
    }
  }

  document.addEventListener("click", function (event) {
    var target = event.target;

    while (target && target !== document) {
      if (target.hasAttribute && target.hasAttribute("data-lang-btn")) {
        var lang = target.getAttribute("data-lang-btn");
        if (isSupported(lang)) {
          applyLanguage(lang);
          saveLanguage(lang);
        }
        return;
      }
      target = target.parentNode;
    }
  });

  function init() {
    applyLanguage(readStoredLanguage());
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
