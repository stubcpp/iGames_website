# 🌐 Стратегія та архітектура вебсайту iGames (Структура типу OpenCode.ai)

Цей документ є єдиним джерелом правди (Single Source of Truth) для ШІ-кодера (агента OpenCode) щодо створення, багатосторінкової структури та інтеграції вебсайту проєкту **iGames**.

---

## 🏗️ 1. Концепція, структура та візуальний стиль сайту

Сайт створюється як легкий, сучасний багатосторінковий портал за зразком **opencode.ai**. Сайт є вітриною нативного C++ додатка та базою знань для гравців.

### 🎨 Візуальний стиль (Сувора вимога)
* **Палітра:** **Виключно СВІТЛИЙ стиль**. Основа — чистий білий (`#FFFFFF`), світло-сірий (`#F9FAFB` або `#F3F4F6`) для блоків та розділювачів. 
* **Акценти:** Благородний темно-сірий або графітовий колір для тексту, щоб забезпечити ідеальну контрастність. Жодних темних чи чорних фонів.
* **Естетика:** Простір, багато "повітря", мінімалізм, чіткі лінії та акуратні кнопки.

### Природна структура розділів (Мапа сайту):
1. **Головна сторінка (`/` або `index.html`):** 
   * Світлий, чистий дизайн. Скріншоти нативного `wxWidgets`-клієнта, опис переваг (C++17, швидкість, безпека).
   * **Велика, чітка кнопка «Download»** для завантаження клієнта (Windows / Linux / macOS).
2. **Документація (`/docs/`):**
   * Двопанельний макет: ліворуч — зручне світле меню навігації, праворуч — структурований текст.
   * Розділи: «Як почати грати», «Правила шашок (російські, ланцюгові побиття)», «Правила нард (довгі, серверний рандом)», «Система рейтингів (ELO)».
3. **Лідерборд / Статистика (`/leaderboard/`):**
   * Сторінка з табами: Шахи | Шашки | Нарди.
   * Динамічна світла таблиця Топ-10 гравців, що підтягується в реальному часі.
4. **Історія проєкту / Changelog (`/changelog/`):**
   * Фіксація спринтів (від 1 до 7) для демонстрації прозорості розробки.

---

## 🛠️ 2. Технологічний стек та хостинг

* **Платформа:** **GitHub Pages** (безкоштовний, надійний статичний хостинг).
* **Стилізація:** **Tailwind CSS** (чиста, швидка верстка, утилити типу `bg-white`, `bg-gray-50`, `text-gray-900`).
* **Динаміка:** Асинхронний **JavaScript (Fetch API)** для Лідерборду.

---

## 🔌 3. Гібридна схема взаємодії (Домашній сервер ↔ Інтернет)

Для етапу Beta-тестування C++ сервер (`igames_server`) та база даних (`igames.db`) залишаються запущеними на **локальному домашньому ноутбуці розробника**, щоб уникнути передчасних витрат на оренду VPS.

### Топологія мережі:
```text
[ Користувач / Браузер ]
          │
          ├─── (1) Завантажує статичний HTML/CSS/JS ────> [ GitHub Pages (Хостинг) ]
          │
          └─── (2) Запит Fetch API (/api/leaderboard) ──> [ ngrok Тунель (Публічний URL) ]
                                                                     │
                                                                     ▼
                                                          [ Домашній ноутбук ]
                                                          └── igames_server (C++ порт 8080)
                                                              └── igames.db (SQLite)
```

### Розподіл обов'язків та логіка роботи:
1. **GitHub Pages** віддає користувачеві сторінки сайту (текст, картинки, кнопки завантаження) у світлому стилі. Він не виконує серверний код і не має прямого доступу до бази даних.
2. **ngrok** створює безпечний публічний тунель (наприклад, `https://ngrok-free.app`) до порту 8080 вашого домашнього C++ сервера.
3. **JavaScript (Fetch API)** на сторінці `/leaderboard/` при її відкритті робить асинхронний фоновий запит на адресу ngrok, отримує JSON-дані про топ-гравців безпосередньо з вашого ноутбука та динамічно малює таблицю в браузері.

---

## 📝 4. Технічне завдання для ШІ-кодера (OpenCode)

### Завдання 1: Верстка та навігація (Шапка + Меню)
* Створити фіксований світлий `Header` із логотипом iGames та посиланнями: `About`, `Docs`, `Leaderboard`, `Changelog`, `Download`.

### Завдання 2: Створення розділу Документації (`/docs/`)
* Конвертувати та адаптувати технічні файли (`CLIENT.md`, `SERVER.md` тощо) у зрозумілі статті для звичайних гравців. Оформити у світлих тонах.

### Завдання 3: Реалізація Лідерборду (`/leaderboard/`)
* Написати JS-скрипт, який робить запит на константу `NGROK_URL` (наприклад, `/api/leaderboard?game=chess`).
* Обробити вимкнений стан сервера: якщо домашній ноутбук офлайн, показувати світлу плашку: *«Сервер авторизації тимчасово на технічному обслуговуванні. Лідерборд оновиться найближчим часом»*.

### Завдання 4: Модифікація C++ сервера (`igames_server`)
Додати в обробник HTTP-запитів `ixwebsocket` ендпоінт `/api/leaderboard`. Сервер **обов'язково** повинен повертати JSON із заголовками **CORS**, інакше браузер заблокує запит із GitHub Pages.

**Приклад правильної відповіді сервера на C++:**
```cpp
// Усередині обробника HTTP-запитів ixwebsocket:
if (request.uri == "/api/leaderboard") {
    std::string gameType = request.get_parameter("game"); // chess, checkers, backgammon
    
    // 1. Формуємо SQL-запит залежно від типу гри
    std::string query = "SELECT login, elo_chess FROM users ORDER BY elo_chess DESC LIMIT 10;";
    if (gameType == "checkers") {
        query = "SELECT login, elo_checkers FROM users ORDER BY elo_checkers DESC LIMIT 10;";
    } else if (gameType == "backgammon") {
        query = "SELECT login, elo_backgammon FROM users ORDER BY elo_backgammon DESC LIMIT 10;";
    }

    // 2. Отримуємо дані з DatabaseWorker та формуємо JSON-рядок
    std::string jsonResponse = "[{\"login\":\"Player1\",\"elo\":1250},{\"login\":\"Player2\",\"elo\":1210}]"; 

    // 3. Відправляємо відповідь з обов'язковими CORS-заголовками
    ix::WebSocketHttpResponse response;
    response.status = 200;
    response.description = "OK";
    response.headers["Content-Type"] = "application/json";
    response.headers["Access-Control-Allow-Origin"] = "*"; // Дозволяє запити з GitHub Pages
    response.headers["Access-Control-Allow-Methods"] = "GET, OPTIONS";
    response.body = jsonResponse;
    
    return response;
}
```
---

## 📝 5. Промти для кодера OpenCode на базі DeepSeek V4

### Task 1: Create Website Structure and Home Page (index.html)
We are developing a lightweight, lightweight multi-page informational website for a native C++17 gaming ecosystem called **iGames** (Chess, Checkers, Backgammon). The site structure is modeled after `opencode.ai`.
## Visual Style Guidelines (Strict Requirement)
* **Theme:** Strictly **LIGHT mode**. No dark backgrounds anywhere.
* **Palette:** Pure white (`#FFFFFF`) or ultra-light gray (`#F9FAFB` / `#F3F4F6`) for sections and content cards.
* **Text:** Dark charcoal or graphite (`#1F2937`) to ensure excellent contrast and readability.
* **Accents:** Professional solid blue or indigo for buttons, links, and active elements, placed nicely on light backgrounds.
* **Aesthetics:** Minimalist, airy, clean design with plenty of white space and crisp borders.
## Steps to Execute:
1. Use **Tailwind CSS** (inject via official CDN in the `<head>` for simplicity).
2. Create a fixed light-styled navigation header (`Header`) shared across the site. Nav items: `About`, `Docs`, `Leaderboard`, `Changelog`, and a noticeable `Download` button.
3. Build the `Hero Section` on the main page:
   - **Headline:** "iGames — Online Platform for Intellectual Board Games (Chess, Checkers, Backgammon)".
   - **Subheadline:** Describe it as a native, high-performance C++17 & wxWidgets application featuring authoritarian server-side anti-cheat protection.
   - **Call to Action:** A prominent, clean "Download" button with OS platform icons (Windows, Linux, macOS) pointing to download links.
   - Leave placeholder blocks for future application screenshots (will be stored in `images/` directory).
4. Create a minimalist footer with copyright: "© 2026 iGames".
Generate the complete, valid HTML code for `index.html`. Do not truncate or skip any layout blocks.

### # Task 2: Create Documentation Layout (docs/index.html)
The home page is complete. Now, create the documentation page at `docs/index.html`. The visual theme must remain strictly **LIGHT mode**, and the fixed navigation `Header` and `Footer` must be identical to the home page.
## Layout Requirements:
1. Use a clean, two-panel responsive grid (two columns):
   - **Left Column** (approx. 1/4 width): A fixed, clean vertical navigation tree for documentation articles.
   - **Right Column** (approx. 3/4 width): Main content viewport styled with Tailwind Typography (`prose` classes) for perfect markdown-to-html readability.
2. Left Menu Navigation Links:
   - Getting Started (How to Play)
   - Checkers Rules
   - Backgammon Rules
   - ELO Rating System
3. Fill the Right Column content with player-friendly copy:
   - **Getting Started:** Explain that users need to download the native desktop client to play.
   - **Checkers:** Detail the Russian checkers rules, highlighting backward captures and mandatory capture chains (`CheckersCaptureChain`).
   - **Backgammon:** Emphasize Long Backgammon rules with 100% server-authoritarian dice rolls (`std::mt19937`), preventing any client-side cheats.
   - **ELO System:** Explain the rating system: K-factor of 32, rating floor at 100, calculated transactionally per distinct game discipline.
Generate the full, untruncated HTML code for `docs/index.html`.

# Task 3: Interactive Leaderboard via Fetch API (leaderboard/index.html)
Now, let's build the real-time leaderboard page at `leaderboard/index.html`. The style must remain strictly **LIGHT mode**. Copy the exact `Header` and `Footer` layout from previous pages.
## Functional Requirements:
1. Implement 3 light-styled navigation tabs: "Chess", "Checkers", and "Backgammon". The "Chess" tab must be active by default.
2. Underneath the tabs, place a clean data table with columns: "Rank", "Username", "ELO Rating". Style it with light gray rows and borders.
3. Write vanilla JavaScript inside a `<script>` tag to dynamically populate the table:
   - Declare a constant `const NGROK_URL = "https://ngrok-free.app";` (representing the secure tunnel to our local C++ server).
   - On page load or tab switch, trigger an asynchronous network request: `fetch(`\({NGROK_URL}/api/leaderboard?game=\){current_game}`)`
   - Map the received JSON array (e.g., `[{"login":"User1","elo":1350}]`) to clear old table data and render new rows.
4. **Error Handling (Critical):** Wrap the network request in a `try/catch` or `.catch()` block. If the local C++ server is offline (e.g., the developer's laptop is suspended), hide the empty table and display a clear, light-yellow or light-red warning banner stating: *"Authorization server is temporarily offline for maintenance. The leaderboard will refresh shortly."*
Generate the complete HTML code for `leaderboard/index.html` including full JavaScript Fetch logic.

# Task 4: Integrate HTTP GET Endpoint with CORS into C++ Server
The frontend pages on GitHub Pages are complete. Now, configure our C++ server (`igames_server`), which runs on `ixwebsocket`, to serve leaderboard data via an HTTP GET request.
## Implementation Steps:
1. Locate the HTTP request handler within your server architecture (usually inside `server_app.cpp` or `main.cpp`).
2. Add a route interceptor: `if (request.uri == "/api/leaderboard")`
3. Parse the URL query parameter `game` (values can be `chess`, `checkers`, or `backgammon`).
4. Execute an asynchronous SQL query via `DatabaseWorker` to fetch the Top-10 players from `igames.db`:
   - **Chess:** `SELECT login, elo_chess FROM users ORDER BY elo_chess DESC LIMIT 10;`
   - **Checkers:** `SELECT login, elo_checkers FROM users ORDER BY elo_checkers DESC LIMIT 10;`
   - **Backgammon:** `SELECT login, elo_backgammon FROM users ORDER BY elo_backgammon DESC LIMIT 10;`
5. Format the result array into a standard JSON string: `[{"login": "Player1", "elo": 1500}, {"login": "Player2", "elo": 1420}]`
6. **Cross-Origin Resource Sharing (CORS) - Mandatory:** Create an `ix::WebSocketHttpResponse` object with status `200` and append these exact headers, otherwise browsers will block the API requests coming from GitHub Pages:
   - `response.headers["Content-Type"] = "application/json";`
   - `response.headers["Access-Control-Allow-Origin"] = "*";`
   - `response.headers["Access-Control-Allow-Methods"] = "GET, OPTIONS";`
7. Handle `OPTIONS` preflight requests: If the browser issues an `OPTIONS` request method, immediately return an empty body with status `200` containing the exact same CORS headers.
Refactor the HTTP server routing code and output the precise implementation.

# Task 5: Initialize Git Repository in iGames_website Folder
We have created a completely isolated directory for our website named `iGames_website` (separate from our core C++ repository). Your task is to initialize a clean Git repository directly inside this folder and set up the static web structure for GitHub Pages deployment.
## Steps to Execute:
1. **Navigate and Initialize:** Enter the `iGames_website` folder and run `git init` to create a fresh, separate repository.
2. **Create Root Directory Structure:**
   Inside the root of `iGames_website`, create the following clean folders for our assets and subpages:
   - `/docs/` (this will hold the multi-page Documentation sections)
   - `/leaderboard/` (this will hold the real-time ELO table template)
   - `/changelog/` (this will track our sprint logs history)
   - `/images/` (for screenshots and graphics)
3. **Configure Settings:** Create a baseline `.gitignore` file to ensure no OS-specific trash (like `.DS_Store` or IDE configs) gets tracked.
Please execute these workspace initialization commands and verify the folder tree. We are ready to deploy the website from the root of this repository.

