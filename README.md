# 🔢 Scientific Calculator

A clean, responsive, and interactive **Scientific Calculator** built using **HTML**, **CSS**, and **Vanilla JavaScript**. It supports advanced math operations, has a built-in history tracker, and offers a toggle between **Light** and **Dark** themes — all running in the browser with zero dependencies.

---

## 🌟 Features

- ✨ **Basic Arithmetic** (`+`, `-`, `*`, `/`)
- 🧠 **Scientific Functions** (`sin`, `cos`, `tan`, `log`, `ln`, `√`, `^`)
- 🧮 **Order of Operations & Brackets** handling
- 🌘 **Dark Mode / Light Mode** toggle
- 📜 **Calculation History** (with Clear button)
- ⌨️ **Full Keyboard Support**
- 🎨 **Responsive UI** for different screen sizes
- 🪄 **Animated buttons + visual feedback**
- 🌍 **No external dependencies** — just open and use

---

## 🖥️ Tech Stack

| Part         | Tech         |
|--------------|--------------|
| Markup       | HTML5        |
| Styling      | CSS3 (custom `light.css` and `dark.css`) |
| Logic        | JavaScript (Vanilla) |
| Fonts        | [Google Fonts - Inter](https://fonts.google.com/specimen/Inter) |
| Icons        | Custom SVG assets |

---

## 🗂️ Project Structure
```bash
Scientific-Calculator/
├── index.html
├── scripts/
│ └── script.js
├── styles/
│ ├── light.css
│ └── dark.css
├── assets/
│ ├── SunIcon.svg
│ ├── MoonIcon.svg
│ └── GitHubLight.svg
```

---

## 🚀 How to Run

> No installation or setup required! Just double-click or open `index.html` in any browser.

### 1. **Navigate to the project folder:**
```bash
cd Scientific-Calculator
```

### 2. **Open index.html in your browser:**

- Right-click → Open with → Your browser
- OR drag the file into your browser tab

---

## 🎮 Keyboard Shortcuts

- Type numbers and operators directly on your keyboard
- Enter → Calculate
- Backspace → Delete last character
- Clipboard support: Paste expressions with Ctrl + V

---

## 🧪 Functions Supported

| Function     | Syntax       | Example                      |
| ------------ | ------------ | ---------------------------- |
| Square Root  | `sqrt(x)`    | `sqrt(25)` = 5               |
| Exponent     | `^`          | `2^3` = 8                    |
| Logarithm    | `log(x)`     | `log(100)` = 2               |
| Natural log  | `ln(x)`      | `ln(1)` = 0                  |
| Trigonometry | `sin(x)` etc | `cos(0)` = 1                 |
| π Constant   | `π` button   | Inserts value `3.1415926535` |

---

## 🧠 Logic Highlights

- Auto-balances parentheses ( / )
- Evaluates ^ as exponent (** in JS)
- Maps sin, cos, tan, log, ln, sqrt to Math functions
- Result validation: Handles invalid inputs or math errors gracefully

---

## 📦 Deployment

You can deploy this project as a static site using:

- GitHub Pages
- Netlify
- Vercel

### GitHub Pages (quickest):

- Push the repo to GitHub
- Go to Settings > Pages
- Select branch = main, folder = /root (if files are in root)
- Your site will be live at:
```bash
https://<your-username>.github.io/Scientific-Calculator
```

---

## 📸 Screenshots
![light mode](https://github.com/user-attachments/assets/e08b6b42-717f-4cd1-b4b2-6e57581d31cd)
![dark mode](https://github.com/user-attachments/assets/c108015b-058c-4cf2-a22f-7ecf8764ef1e)

---
