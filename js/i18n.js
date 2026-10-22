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
      "meta.ogDescription": "Грай у шахи, класичні шашки та довгі нарди в блискавичному додатку для комп'ютера з надійним захистом від читерів.",
      "meta.ogLocale": "uk_UA",
      "a11y.skip": "Перейти до вмісту",
      "banner.betaPrefix": "🚀 Сервіс працює в режимі бета-тестування. Поточна адреса сервера за замовчуванням:",
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
      "download.availability": "Доступно для Windows, Linux та macOS",
      "download.trigger": "Завантажити iGames",
      "download.triggerHint": "Оберіть платформу та формат",
      "download.menuTitle": "Оберіть платформу",
      "download.closeAria": "Закрити меню завантажень",
      "download.os.windows": "Windows",
      "download.os.linux": "Linux",
      "download.os.macos": "macOS",
      "download.windows.installer": "Інсталятор .exe",
      "download.windows.installerDesc": "Класичне встановлення",
      "download.windows.portable": "Портативний .zip",
      "download.windows.portableDesc": "Без встановлення — розпакуйте та запускайте",
      "download.linux.deb": ".deb пакет",
      "download.linux.debDesc": "Для Ubuntu та Debian",
      "download.linux.rpm": ".rpm пакет",
      "download.linux.rpmDesc": "Для Fedora та RHEL",
      "download.linux.tarball": ".tar.gz архів",
      "download.linux.tarballDesc": "Розпакуйте та запускайте",
      "download.macos.dmg": ".dmg інсталятор",
      "download.macos.dmgDesc": "Стандартне встановлення для macOS",
      "download.macos.zip": "Портативний .zip",
      "download.macos.zipDesc": "Без встановлення — розпакуйте та запускайте",
      "screenshot.title": "Інтерфейс програми iGames (Intellectual Games)",
      "screenshot.alt": "Інтерфейс шахової партії в iGames: дошка, таймер, чат кімнати та історія ходів.",
      "about.title": "Про проєкт iGames",
      "about.description": "iGames — це легка та сучасна ігрова екосистема, створена для шанувальників інтелектуальних настільних ігор, де швидкість роботи поєднується з безкомпромісною чесністю онлайн-змагань.",
      "about.card1Title": "Миттєвий запуск та стабільність",
      "about.card1Body": "Забудьте про важкі сайти та затримки. Наш комп'ютерний додаток важить лічені мегабайти, запускається за секунду та бездоганно працює навіть на слабких ноутбуках.",
      "about.card2Title": "Абсолютно чесна гра та відгуки",
      "about.card2Body": "Повне блокування обману. Усі ходи та кидки кубиків прораховуються на сервері, а вбудована система відгуків та скарг дозволяє оцінювати поведінку суперників після кожної партії.",
      "about.card3Title": "Повноцінний ігровий всесвіт",
      "about.card3Body": "Шахи, динамічні класичні шашки 8х8 з можливістю бити назад і далекобійними дамками, а також довгі нарди. Усередині — особистий профіль із перемогами, нічиїми, поразками та рейтингом ELO, живі чати кімнат і загального лобі, статистика сервера з лічильниками онлайн-гравців та активних партій, а також тренування з ботами різної складності.",
      "community.title": "Грай разом із друзями!",
      "community.body": "Приєднуйся до екосистеми iGames, створюй приватні кімнати, запрошуй друзів на інтелектуальні дуелі та ділися відгуками про зіграні матчі. Разом ми будуємо найчеснішу ігрову спільноту!",
      "share.button": "Поділитися сайтом",
      "share.copied": "Посилання скопійовано!",
      "docs.meta.title": "Документація — iGames",
      "docs.meta.description": "Дізнайтеся, як почати грати в iGames, вивчіть правила шахів, класичних шашок 8х8 і довгих нард та розберіться, як працює рейтинг ELO.",
      "docs.eyebrow": "Документація",
      "docs.title": "Довідковий центр iGames",
      "docs.intro": "Усе, що потрібно для впевненого старту: від встановлення клієнта до правил шахів, шашок, довгих нард і рейтингу ELO.",
      "docs.contents": "Зміст",
      "docs.gettingStarted.title": "З чого почати",
      "docs.gettingStarted.body": "iGames — це легкий клієнтський додаток для настільних ігор. Щоб почати, завантажте версію для своєї операційної системи, запустіть її та підключіться до глобальної екосистеми гравців.",
      "docs.gettingStarted.step1": "Завантажте клієнт для Windows, Linux або macOS.",
      "docs.gettingStarted.step2": "Запустіть програму — вона підключиться до глобальної екосистеми iGames.",
      "docs.gettingStarted.step3": "Оберіть дисципліну та приєднуйтеся до лобі або кімнати.",
      "docs.gettingStarted.downloadLink": "Завантажити клієнт для своєї ОС",
      "docs.gettingStarted.loginAlt": "Вікно входу до клієнта iGames із полями логіна та пароля.",
      "docs.gettingStarted.loginCaption": "Вхід до облікового запису",
      "docs.gettingStarted.registerAlt": "Вікно реєстрації iGames із полями логіна, пароля, підтвердження пароля та email.",
      "docs.gettingStarted.registerCaption": "Створення облікового запису",
      "docs.gettingStarted.serverTitle": "Налаштування сервера",
      "docs.gettingStarted.serverBody": "Перед підключенням відкрийте вкладку «Налаштування сервера». За замовчуванням клієнт використовує ws://localhost:8080. Для віддаленого середовища вкажіть адресу та порт сервера й збережіть налаштування.",
      "docs.gettingStarted.serverAlt": "Вікно налаштувань сервера iGames із полями адреси localhost, порту 8080 та прапорцем запам'ятовування.",
      "docs.gettingStarted.serverCaption": "Підключення до локального або віддаленого сервера",
      "docs.chess.title": "Шахи",
      "docs.chess.body": "Класичні Шахи — Гра королів. Елітна дисципліна, яка вимагає глибокого стратегічного мислення, тактичної пильності та вміння контролювати центр дошки. Повна відповідність правил ФІДЕ, включаючи рокіровку, взяття на проході та автоматичну фіксацію нічиєї (пат, триразове повторення позиції).",
      "docs.checkers.title": "Класичні шашки 8х8",
      "docs.checkers.intro": "Класичні шашки 8х8 — динамічна дисципліна на стандартній дошці 8×8. Тут важливі контроль діагоналей, темп і вміння бачити загрози не лише попереду, а й позаду.",
      "docs.checkers.setupTitle": "Дошка та рух",
      "docs.checkers.setupBody": "Кожен гравець починає з 12 шашок на темних клітинках. Прості шашки рухаються по діагоналі вперед на одну клітинку, а взяття виконують стрибком через шашку суперника.",
      "docs.checkers.backwardTitle": "Зворотні взяття",
      "docs.checkers.backwardBody": "Ключова особливість варіації: прості шашки можуть брати не лише вперед, а й назад. Тому клітинка позаду не є безпечною — прораховуйте зворотні загрози перед кожним ходом.",
      "docs.checkers.kingsTitle": "Дальні «летючі» дамки",
      "docs.checkers.kingsBody": "Шашка, яка досягає останньої горизонталі, стає дамкою. Дамки рухаються та беруть на будь-яку відстань по діагоналі, якщо шлях вільний. Це відкриває «летючі» комбінації через усю дошку.",
      "docs.checkers.goalTitle": "Мета партії",
      "docs.checkers.goalBody": "Перемагає гравець, який позбавляє суперника всіх шашок або можливості зробити хід. Уважність до зворотних взяттів і довгих діагоналей часто вирішує результат.",
      "docs.backgammon.title": "Довгі нарди",
      "docs.backgammon.intro": "Довгі нарди — це дисципліна для тих, хто любить довгі стратегії, контроль простору та точний розрахунок темпу. Усі 15 шашок починають поза дошкою, а партія будується навколо входу в дім, проведення шашок і зняття їх з дошки.",
      "docs.backgammon.placementTitle": "Стратегічна розстановка",
      "docs.backgammon.placementBody": "Спочатку гравці вводять шашки у свою домашню чверть, а потім проводять їх по колу. Зайнятий суперником пункт блокує рух, тому важливо заздалегідь будувати власну структуру та залишати собі запасні маршрути.",
      "docs.backgammon.blockingTitle": "Блокування та темп",
      "docs.backgammon.blockingBody": "У довгих нардах немає вибивання на бар: зайнятий пункт просто блокує прохід. Контролюйте входи до своєї домашньої чверті, створюйте щільні бар'єри та змушуйте суперника витрачати кидки на обхідні шляхи.",
      "docs.backgammon.diceTitle": "100% серверна генерація кубиків",
      "docs.backgammon.diceBody": "Кидки кубиків генеруються виключно на сервері, а не в клієнті. Сервер є єдиним джерелом істини: він формує результат, перевіряє допустимі ходи та синхронізує стан партії для обох гравців. Клієнт лише відображає отримані дані, тому будь-які маніпуляції з кубиками на боці клієнта повністю виключені. Це гарантує 100% захищену та чесну гру для обох суперників.",
      "docs.elo.title": "Рейтинг ELO",
      "docs.elo.intro": "ELO — це автоматична змагальна драбина iGames. Вона відображає поточний рівень гравця та динаміку його прогресу в кожній окремій дисципліні.",
      "docs.elo.gameProfileAlt": "Вікно профілю гри iGames із налаштуваннями шахової партії; ліворуч видно рейтинги шахів, шашок і нард.",
      "docs.elo.gameProfileCaption": "Профіль гри: налаштування та рейтинги дисциплін",
      "docs.elo.gamerProfileAlt": "Вікно профілю гравця iGames з ім'ям і контактними даними; ліворуч видно рейтинги дисциплін.",
      "docs.elo.gamerProfileCaption": "Профіль гравця: обліковий запис і рейтинги",
      "docs.elo.kFactorTitle": "K-фактор 32",
      "docs.elo.kFactorBody": "Після кожної рейтингової партії сервер застосовує стандартну формулу ELO з K-фактором 32. Кожен результат має відчутний вплив на рейтинг, а система швидко реагує на зміни результатів.",
      "docs.elo.floorTitle": "Мінімальний рейтинг 100",
      "docs.elo.floorBody": "Рейтинг ніколи не опускається нижче 100. Навіть після серії поразок гравець зберігає базову позначку 100, тому драбина залишається мотивуючою.",
      "docs.elo.disciplinesTitle": "Окремі дисципліни",
      "docs.elo.disciplinesBody": "Шахи, класичні шашки 8х8 та довгі нарди ведуть незалежні рейтинги. Успіхи в одній грі не змінюють рейтинг в іншій, тому кожна дисципліна має власну змагальну історію.",
      "docs.elo.transactionTitle": "Транзакційний перерахунок",
      "docs.elo.transactionBody": "Результат партії, зміна рейтингу та запис в історію застосовуються сервером як одна узгоджена транзакція. Це виключає розбіжності між гравцями та втрату оновлень.",
      "leaderboard.meta.title": "Рейтинг — iGames",
      "leaderboard.meta.description": "Дивіться поточний рейтинг ELO у шахах, шашках і довгих нардах. Оберіть дисципліну та перегляньте таблицю найсильніших гравців iGames.",
      "leaderboard.eyebrow": "Рейтинг гравців",
      "leaderboard.title": "Лідерборд iGames",
      "leaderboard.intro": "Поточні рейтинги ELO за дисциплінами. Оберіть гру, щоб переглянути таблицю.",
      "leaderboard.tabsAria": "Дисципліни рейтингу",
      "leaderboard.tab.chess": "Шахи",
      "leaderboard.tab.checkers": "Шашки",
      "leaderboard.tab.backgammon": "Нарди",
      "leaderboard.tableCaption": "Рейтинг ELO за обраною дисципліною",
      "leaderboard.rank": "Місце",
      "leaderboard.username": "Гравець",
      "leaderboard.elo": "Рейтинг ELO",
      "leaderboard.loading": "Завантаження рейтингу…",
      "leaderboard.empty": "Поки що немає рейтингових гравців.",
      "leaderboard.error": "Сервер авторизації тимчасово на технічному обслуговуванні. Лідерборд оновиться найближчим часом.",
      "leaderboard.retry": "Спробувати ще раз",
      "changelog.meta.title": "Журнал розробки — iGames",
      "changelog.meta.description": "Дізнайтеся, як iGames пройшов шлях від першої ідеї 2006 року до сучасної платформи інтелектуальних ігор з чесною грою та рейтингом ELO.",
      "changelog.eyebrow": "Журнал розробки",
      "changelog.title": "📜 Журнал розробки проєкту iGames",
      "changelog.intro": "Історія створення сучасної платформи інтелектуальних ігор: від ідеї до робочої мережевої системи.",
      "changelog.backstory.title": "🌟 Як усе починалося (Передісторія)",
      "changelog.backstory.item1": "Приблизно 2006 рік: Автор активно грав у шахи на відомому ігровому сервері games.alkar.net. Саме тоді з'явилася мрія створити свій власний, більш зручний та вдосконалений сервіс, який об'єднав би не лише шахи, а й нарди.",
      "changelog.backstory.item2": "2025 рік: Через багато років ідея нарешті переросла у реальну роботу — автор зміг безпосередньо приступити до написання коду проєкту iGames.",
      "changelog.backstory.item3": "Вибір інструментів: Для створення красивого зовнішнього вигляду програми (графічної частини) була обрана бібліотека wxWidgets, а для обміну повідомленнями між гравцями та сервером — створена власна зручна система MessageFrame.",
      "changelog.backstory.item4": "Початком 2026 року з'явилися перші робочі прототипи, які підтвердили, що концепція працює.",
      "changelog.timeline.title": "⏳ Хронологія розвитку проєкту",
      "changelog.timeline.subtitle": "Найсвіжіші події — зверху",
      "changelog.timeline.current": "Поточний статус",
      "changelog.stage7.badge": "Етап 7",
      "changelog.stage7.title": "Вихід у мережу та стабільність на Windows",
      "changelog.stage7.item1.title": "Виправлено роботу на Windows",
      "changelog.stage7.item1.body": "Усунено критичну помилку, через яку програма на операційній системі Windows раптово закривалася під час спроби підключитися до мережі. Тепер додаток працює стабільно.",
      "changelog.stage7.item2.title": "Постійна адреса в інтернеті",
      "changelog.stage7.item2.body": "Замість тимчасових посилань, які раніше змінювалися щогодини, проєкт отримав постійну та фіксовану тестову адресу:",
      "changelog.stage7.item3.title": "Захист від збоїв",
      "changelog.stage7.item3.body": "Налаштовано автоматичне відновлення зв'язку. Якщо інтернет на секунду зникне, програма сама відновить з'єднання за 5 секунд.",
      "changelog.stage6.badge": "Етап 6",
      "changelog.stage6.title": "Розумний сервер та захист від обману",
      "changelog.stage6.item1.title": "Контроль чесної гри",
      "changelog.stage6.item1.body": "Сервер перестав бути просто посередником. Тепер він сам знає правила шахів, шашок та нард, перевіряє кожен хід гравців та повністю блокує будь-які спроби читерства.",
      "changelog.stage6.item2.title": "Чесні кубики в нардах",
      "changelog.stage6.item2.body": "Усі кидки кубиків тепер прораховуються виключно на сервері за допомогою генератора випадкових чисел. Гравці бачать абсолютно чесний результат, який неможливо підробити.",
      "changelog.stage5.badge": "Етап 5",
      "changelog.stage5.title": "Запуск тестового сайту та автоматична збірка",
      "changelog.stage5.item1.title": "Запуск сайту",
      "changelog.stage5.item1.body": "Створено та запущено першу версію сайту на платформі GitHub Pages для демонстрації можливостей проєкту.",
      "changelog.stage5.item2.title": "Автоматизація",
      "changelog.stage5.item2.body": "Налаштовано систему, яка самостійно збирає готові архіви з програмою для Windows та Linux одразу після внесення будь-яких покращень у код.",
      "changelog.stage4.badge": "Етап 4",
      "changelog.stage4.title": "Перехід на бінарний протокол та оптимізація",
      "changelog.stage4.item1.title": "Швидкість роботи",
      "changelog.stage4.item1.body": "Проєкт повністю відмовився від передачі даних довгими текстовими рядками. Весь обмін інформацією переведено на компактні бінарні пакети, що значно прискорило роботу гри навіть на слабкому інтернеті.",
      "changelog.stage4.item2.title": "Стабільність клієнта",
      "changelog.stage4.item2.body": "Повністю перероблено внутрішню логіку програми-клієнта, усунено зависання інтерфейсу під час активної гри чи надсилання повідомлень у чат.",
      "changelog.stage3.badge": "Етап 3",
      "changelog.stage3.title": "Безпека та оновлення системи рейтингів",
      "changelog.stage3.item1.title": "Впровадження системи ELO",
      "changelog.stage3.item1.body": "Реалізовано повноцінний підрахунок рейтингу гравців за міжнародною системою ELO. Статистика та лічильники ігор оновлюються миттєво та надсилаються обом суперникам одразу після завершення партії.",
      "changelog.stage3.item2.title": "Надійний захист профілів",
      "changelog.stage3.item2.body": "Впроваджено сучасне шифрування паролів користувачів для захисту їхніх облікових записів від зламу.",
      "changelog.stage12.badge": "Етап 1-2",
      "changelog.stage12.title": "Наведення ладу в базі даних та потоках",
      "changelog.stage12.item1.title": "Асинхронна робота з базою",
      "changelog.stage12.item1.body": "Записи до бази даних (профілі, матчі) перенесені в окремий фоновий потік. Завдяки цьому збереження інформації на диск більше не викликає затримок чи «заїкань» під час самої гри.",
      "changelog.stage12.item2.title": "Потокобезпека",
      "changelog.stage12.item2.body": "Повністю виправлено внутрішні конфлікти сервера, коли кілька гравців одночасно здійснювали дії, що раніше могло призвести до падіння сервера."
    },
    en: {
      "meta.title": "iGames — Modern Platform for Intellectual Games",
      "meta.description": "Play Chess, Classic 8x8 Checkers, and Long Backgammon in a lightning-fast desktop app. Server protection validates every move for 100% fair play with no cheaters.",
      "meta.ogTitle": "iGames — Modern Platform for Intellectual Games",
      "meta.ogDescription": "Play Chess, Classic Checkers, and Long Backgammon in a lightning-fast desktop application with strict anti-cheat.",
      "meta.ogLocale": "en_US",
      "a11y.skip": "Skip to content",
      "banner.betaPrefix": "🚀 The service is currently running in Beta Testing mode. Default server address:",
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
      "download.availability": "Available for Windows, Linux, and macOS",
      "download.trigger": "Download iGames",
      "download.triggerHint": "Choose your platform and package",
      "download.menuTitle": "Choose your platform",
      "download.closeAria": "Close download menu",
      "download.os.windows": "Windows",
      "download.os.linux": "Linux",
      "download.os.macos": "macOS",
      "download.windows.installer": ".exe Installer",
      "download.windows.installerDesc": "Standard installation",
      "download.windows.portable": "Portable .zip Archive",
      "download.windows.portableDesc": "No installation — unzip and run",
      "download.linux.deb": ".deb Package",
      "download.linux.debDesc": "For Ubuntu and Debian",
      "download.linux.rpm": ".rpm Package",
      "download.linux.rpmDesc": "For Fedora and RHEL",
      "download.linux.tarball": ".tar.gz Archive",
      "download.linux.tarballDesc": "Unpack and run",
      "download.macos.dmg": ".dmg Installer",
      "download.macos.dmgDesc": "Standard macOS installation",
      "download.macos.zip": "Portable .zip Archive",
      "download.macos.zipDesc": "No installation — unzip and run",
      "screenshot.title": "iGames (Intellectual Games) Client Interface",
      "screenshot.alt": "iGames chess match interface showing the board, clock, room chat and move history.",
      "about.title": "About iGames",
      "about.description": "iGames is a lightweight, modern gaming ecosystem designed for board game enthusiasts, where maximum performance meets uncompromising digital fair play.",
      "about.card1Title": "Instant Launch & Stability",
      "about.card1Body": "Forget about heavy web browsers and lag. Our desktop application takes up minimal space, launches in a split second, and runs flawlessly even on low-end laptops.",
      "about.card2Title": "Strict Fair Play & Player Reviews",
      "about.card2Body": "Zero tolerance for cheating. All moves and dice choices are computed strictly on the server, while our post-match feedback system allows you to review your opponent's sportsmanship.",
      "about.card3Title": "Feature-Rich Gaming Universe",
      "about.card3Body": "Chess, dynamic Classic 8x8 Checkers with backward captures and long-range flying kings, plus Long Backgammon. Inside, you get a personal profile with wins, draws, losses and ELO, live room and global lobby chats, server statistics with online player counters and active game trackers, and practice matches against AI bots at adjustable difficulty.",
      "community.title": "Play Together with Friends!",
      "community.body": "Join the iGames ecosystem, create private rooms, invite your friends to intellectual duels, and leave post-match feedback. Together, we are building the ultimate fair-play gaming community!",
      "share.button": "Share Website",
      "share.copied": "Link copied to clipboard!",
      "docs.meta.title": "Documentation — iGames",
      "docs.meta.description": "Learn how to get started with iGames, read the rules for Chess, Classic 8x8 Checkers, and Long Backgammon, and understand how the ELO rating works.",
      "docs.eyebrow": "Documentation",
      "docs.title": "iGames Documentation",
      "docs.intro": "Everything you need for a confident start: from installing the client to the rules of Chess, Checkers, Long Backgammon, and the ELO rating.",
      "docs.contents": "Contents",
      "docs.gettingStarted.title": "Getting Started",
      "docs.gettingStarted.body": "iGames is a lightweight desktop client for board games. To get started, download the version for your operating system, launch it, and connect to the global player ecosystem.",
      "docs.gettingStarted.step1": "Download the client for Windows, Linux, or macOS.",
      "docs.gettingStarted.step2": "Launch the app and let it connect to the global iGames ecosystem.",
      "docs.gettingStarted.step3": "Choose a discipline and join the lobby or a room.",
      "docs.gettingStarted.downloadLink": "Download the client for your OS",
      "docs.gettingStarted.loginAlt": "iGames client sign-in window with login and password fields.",
      "docs.gettingStarted.loginCaption": "Account sign-in",
      "docs.gettingStarted.registerAlt": "iGames registration window with login, password, password confirmation, and email fields.",
      "docs.gettingStarted.registerCaption": "Account registration",
      "docs.gettingStarted.serverTitle": "Server settings",
      "docs.gettingStarted.serverBody": "Before connecting, open the Server settings tab. The client uses ws://localhost:8080 by default. For a remote environment, enter the server address and port, then save the settings.",
      "docs.gettingStarted.serverAlt": "iGames server settings window with localhost address, port 8080, and remember-settings checkbox.",
      "docs.gettingStarted.serverCaption": "Connecting to a local or remote server",
      "docs.chess.title": "Chess",
      "docs.chess.body": "Classic Chess — The game of kings. An elite discipline requiring deep strategic planning, tactical alertness, and center-board control. Full FIDE rules compliance, including castling, en passant, and automated draw detection (stalemate, threefold repetition).",
      "docs.checkers.title": "Classic 8x8 Checkers",
      "docs.checkers.intro": "Classic 8x8 Checkers is a dynamic discipline played on a standard 8×8 board. Diagonal control, tempo, and the ability to spot threats both ahead and behind are essential.",
      "docs.checkers.setupTitle": "Board and movement",
      "docs.checkers.setupBody": "Each player starts with 12 pieces on the dark squares. Ordinary pieces move one square diagonally forward, and captures are made by jumping over an opponent's piece.",
      "docs.checkers.backwardTitle": "Backward captures",
      "docs.checkers.backwardBody": "A key feature of this variation: ordinary pieces can capture backward as well as forward. A square behind your piece is never automatically safe, so calculate backward threats before every move.",
      "docs.checkers.kingsTitle": "Long-range flying kings",
      "docs.checkers.kingsBody": "A piece that reaches the far rank becomes a king. Kings move and capture at any distance along a diagonal, provided the path is clear. This enables long-range “flying” combinations across the whole board.",
      "docs.checkers.goalTitle": "Objective",
      "docs.checkers.goalBody": "You win by leaving your opponent with no pieces or no legal move. Attention to backward captures and long diagonals often decides the game.",
      "docs.backgammon.title": "Long Backgammon",
      "docs.backgammon.intro": "Long Backgammon rewards long-term strategy, spatial control, and precise tempo calculation. All 15 checkers start off the board, and the game revolves around entering your home board, racing around, and bearing off.",
      "docs.backgammon.placementTitle": "Strategic placement",
      "docs.backgammon.placementBody": "Players first enter their checkers into their home board, then move them around the board. A point occupied by the opponent blocks movement, so build your own structure early and keep backup routes open.",
      "docs.backgammon.blockingTitle": "Blocking and tempo",
      "docs.backgammon.blockingBody": "Long Backgammon has no hitting or bar: an occupied point simply blocks the path. Control the entry points to your home board, create compact barriers, and force your opponent to spend rolls on detours.",
      "docs.backgammon.diceTitle": "100% server-authoritative dice",
      "docs.backgammon.diceBody": "Dice rolls are generated exclusively on the server, never in the client. The server is the single source of truth: it produces the result, validates legal moves, and synchronizes the game state for both players. The client only displays the received data, so client-side dice manipulation is completely eliminated. This guarantees 100% secure and fair play for both opponents.",
      "docs.elo.title": "ELO Rating",
      "docs.elo.intro": "ELO is iGames' automated competitive ladder. It reflects a player's current level and progress in each individual discipline.",
      "docs.elo.gameProfileAlt": "iGames game profile window with chess game settings; ratings for chess, checkers, and backgammon are visible on the left.",
      "docs.elo.gameProfileCaption": "Game profile: settings and discipline ratings",
      "docs.elo.gamerProfileAlt": "iGames player profile window with name and contact fields; discipline ratings are visible on the left.",
      "docs.elo.gamerProfileCaption": "Player profile: account and ratings",
      "docs.elo.kFactorTitle": "K-factor 32",
      "docs.elo.kFactorBody": "After every rated game, the server applies the standard ELO formula with a K-factor of 32. Each result has a meaningful impact on your rating, and the system responds quickly to changes in results.",
      "docs.elo.floorTitle": "Rating floor of 100",
      "docs.elo.floorBody": "A rating never falls below 100. Even after a losing streak, a player keeps the baseline of 100, so the ladder remains motivating.",
      "docs.elo.disciplinesTitle": "Separate disciplines",
      "docs.elo.disciplinesBody": "Chess, Classic 8x8 Checkers, and Long Backgammon each maintain an independent rating. Success in one game does not change your rating in another, so every discipline has its own competitive history.",
      "docs.elo.transactionTitle": "Transactional updates",
      "docs.elo.transactionBody": "The game result, rating change, and history record are applied by the server as one consistent transaction. This prevents discrepancies between players and lost updates.",
      "leaderboard.meta.title": "Leaderboard — iGames",
      "leaderboard.meta.description": "View the current ELO leaderboard for Chess, Checkers, and Long Backgammon. Choose a discipline and see the top iGames players.",
      "leaderboard.eyebrow": "Player rankings",
      "leaderboard.title": "iGames Leaderboard",
      "leaderboard.intro": "Current ELO ratings by discipline. Choose a game to view its leaderboard.",
      "leaderboard.tabsAria": "Leaderboard disciplines",
      "leaderboard.tab.chess": "Chess",
      "leaderboard.tab.checkers": "Checkers",
      "leaderboard.tab.backgammon": "Backgammon",
      "leaderboard.tableCaption": "ELO leaderboard for the selected discipline",
      "leaderboard.rank": "Rank",
      "leaderboard.username": "Username",
      "leaderboard.elo": "ELO Rating",
      "leaderboard.loading": "Loading leaderboard...",
      "leaderboard.empty": "No rated players yet.",
      "leaderboard.error": "Authorization server is temporarily offline for maintenance. The leaderboard will refresh shortly.",
      "leaderboard.retry": "Try again",
      "changelog.meta.title": "Development Changelog — iGames",
      "changelog.meta.description": "Discover how iGames evolved from a first idea in 2006 into a modern intellectual gaming platform with fair play and ELO ratings.",
      "changelog.eyebrow": "Development log",
      "changelog.title": "📜 iGames Development Changelog",
      "changelog.intro": "The journey of building a modern intellectual gaming platform: from a core idea to a robust network system.",
      "changelog.backstory.title": "🌟 How It All Started (Backstory)",
      "changelog.backstory.item1": "Around 2006: The author was an active chess player on the famous gaming server games.alkar.net. That experience sparked a dream to create a custom, more elegant, and feature-rich platform combining both chess and backgammon.",
      "changelog.backstory.item2": "2025: Many years later, the idea turned into action, and the author officially began writing the codebase for iGames.",
      "changelog.backstory.item3": "Choice of Tools: To deliver a beautiful and responsive user interface, the wxWidgets library was chosen. For fast and reliable network communication, a custom message formatting protocol named MessageFrame was developed.",
      "changelog.backstory.item4": "Early 2026: The first working prototypes emerged, proving that the concept was fully viable.",
      "changelog.timeline.title": "⏳ Project Timeline",
      "changelog.timeline.subtitle": "Newest updates on top",
      "changelog.timeline.current": "Current status",
      "changelog.stage7.badge": "Stage 7",
      "changelog.stage7.title": "Public Network Deployment & Windows Stability",
      "changelog.stage7.item1.title": "Fixed Windows Crashes",
      "changelog.stage7.item1.body": "Resolved a critical issue where the client app abruptly closed on Windows when establishing a network connection. The app is now perfectly stable.",
      "changelog.stage7.item2.title": "Permanent Internet URL",
      "changelog.stage7.item2.body": "Instead of temporary session URLs that expired hourly, the project now features a permanent, fixed test address:",
      "changelog.stage7.item3.title": "Auto-Reconnect Capability",
      "changelog.stage7.item3.body": "Implemented smart drop protection. If the connection flickers, the system automatically restores the tunnel within 5 seconds without changing the address.",
      "changelog.stage6.badge": "Stage 6",
      "changelog.stage6.title": "Authoritative Server & Anti-Cheat Protection",
      "changelog.stage6.item1.title": "Full Rules Authority",
      "changelog.stage6.item1.body": "The server is no longer just a blind proxy. It now enforces full rules for Chess, Checkers, and Long Backgammon, validating every move to block any cheating attempts.",
      "changelog.stage6.item2.title": "Secure Server-Side Dice",
      "changelog.stage6.item2.body": "In Backgammon, dice rolls are now generated strictly on the server using a secure random generator, ensuring 100% fair and unalterable gameplay.",
      "changelog.stage5.badge": "Stage 5",
      "changelog.stage5.title": "Beta Website & CI/CD Pipelines",
      "changelog.stage5.item1.title": "Web Launch",
      "changelog.stage5.item1.body": "Deployed the initial version of the test website on GitHub Pages to showcase project features and provide downloads.",
      "changelog.stage5.item2.title": "Automation Workflow",
      "changelog.stage5.item2.body": "Configured an automated system that packages fresh Windows and Linux build archives instantly upon code updates.",
      "changelog.stage4.badge": "Stage 4",
      "changelog.stage4.title": "Binary Protocol Migration & Performance Boost",
      "changelog.stage4.item1.title": "High-Speed Network",
      "changelog.stage4.item1.body": "Completely removed slow text-string parsing. The entire data layer now utilizes compact binary packages, dramatically improving response times even on weaker internet connections.",
      "changelog.stage4.item2.title": "Interface Optimization",
      "changelog.stage4.item2.body": "Redesigned the background networking loop to prevent the user interface from freezing or lagging during intense matches or heavy chat interactions.",
      "changelog.stage3.badge": "Stage 3",
      "changelog.stage3.title": "ELO Rating System & Enhanced Security",
      "changelog.stage3.item1.title": "Instant ELO Updates",
      "changelog.stage3.item1.body": "Implemented a proper player rating system based on international ELO formulas. Match statistics and win/loss counters update instantly and are pushed to both players upon game completion.",
      "changelog.stage3.item2.title": "Secure Accounts",
      "changelog.stage3.item2.body": "Integrated robust password hashing algorithms to guarantee modern security standards for player profiles.",
      "changelog.stage12.badge": "Stages 1-2",
      "changelog.stage12.title": "Async Database Engine & Thread Safety",
      "changelog.stage12.item1.title": "Background DB Operations",
      "changelog.stage12.item1.body": "Shifted disk operations (profiles, logs) into a dedicated background worker thread, ensuring saving data never causes in-game stutters or lag.",
      "changelog.stage12.item2.title": "Server Stabilization",
      "changelog.stage12.item2.body": "Resolved core threading conflicts where multiple simultaneous player actions could previously compromise server stability."
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

    var altNodes = document.querySelectorAll("[data-i18n-alt]");
    for (var a = 0; a < altNodes.length; a++) {
      var altKey = altNodes[a].getAttribute("data-i18n-alt");
      if (typeof dict[altKey] === "string") {
        altNodes[a].setAttribute("alt", dict[altKey]);
      }
    }

    var titleNode = document.querySelector("title[data-i18n]");
    var titleKey = titleNode ? titleNode.getAttribute("data-i18n") : "meta.title";
    if (typeof dict[titleKey] === "string") {
      document.title = dict[titleKey];
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

  function initDownloadSelector() {
    var root = document.querySelector("[data-download]");
    if (!root) {
      return;
    }

    var trigger = root.querySelector("[data-download-trigger]");
    var menu = root.querySelector("#download-menu");
    var closeButton = root.querySelector("[data-download-close]");
    var chevron = root.querySelector("[data-download-chevron]");

    if (!trigger || !menu) {
      return;
    }

    var tabs = root.querySelectorAll('[role="tab"]');
    var panels = root.querySelectorAll('[role="tabpanel"]');

    function setMenu(open, returnFocus) {
      menu.hidden = !open;
      trigger.setAttribute("aria-expanded", open ? "true" : "false");

      if (chevron) {
        chevron.classList.toggle("rotate-180", open);
      }

      if (!open && returnFocus) {
        trigger.focus();
      }
    }

    function selectTab(tab, focusTab) {
      for (var i = 0; i < tabs.length; i++) {
        var isSelected = tabs[i] === tab;

        tabs[i].setAttribute("aria-selected", isSelected ? "true" : "false");
        tabs[i].tabIndex = isSelected ? 0 : -1;
        tabs[i].classList.toggle("bg-white", isSelected);
        tabs[i].classList.toggle("text-gray-900", isSelected);
        tabs[i].classList.toggle("shadow-sm", isSelected);
        tabs[i].classList.toggle("text-gray-500", !isSelected);
      }

      var targetId = tab.getAttribute("aria-controls");
      for (var j = 0; j < panels.length; j++) {
        panels[j].hidden = panels[j].id !== targetId;
      }

      if (focusTab) {
        tab.focus();
      }
    }

    trigger.addEventListener("click", function () {
      setMenu(menu.hidden, false);
    });

    if (closeButton) {
      closeButton.addEventListener("click", function () {
        setMenu(false, true);
      });
    }

    for (var t = 0; t < tabs.length; t++) {
      tabs[t].addEventListener("click", function () {
        selectTab(this, false);
      });
    }

    document.addEventListener("click", function (event) {
      if (menu.hidden) {
        return;
      }

      if (!root.contains(event.target)) {
        setMenu(false, false);
      }
    });

    document.addEventListener("keydown", function (event) {
      if (menu.hidden) {
        return;
      }

      if (event.key === "Escape") {
        event.preventDefault();
        setMenu(false, true);
        return;
      }

      var index = -1;
      for (var i = 0; i < tabs.length; i++) {
        if (tabs[i] === document.activeElement) {
          index = i;
          break;
        }
      }

      if (index === -1) {
        return;
      }

      if (event.key === "ArrowRight") {
        event.preventDefault();
        selectTab(tabs[(index + 1) % tabs.length], true);
      } else if (event.key === "ArrowLeft") {
        event.preventDefault();
        selectTab(tabs[(index - 1 + tabs.length) % tabs.length], true);
      } else if (event.key === "Home") {
        event.preventDefault();
        selectTab(tabs[0], true);
      } else if (event.key === "End") {
        event.preventDefault();
        selectTab(tabs[tabs.length - 1], true);
      }
    });

    var initialTab = root.querySelector('[role="tab"][aria-selected="true"]');
    if (tabs.length) {
      selectTab(initialTab || tabs[0], false);
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
    initDownloadSelector();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
