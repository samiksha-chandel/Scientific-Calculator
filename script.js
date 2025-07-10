const lightTheme = "styles/light.css";
const darkTheme = "styles/dark.css";
const sunIcon = "assets/SunIcon.svg";
const moonIcon = "assets/MoonIcon.svg";
const themeIcon = document.getElementById("theme-icon");
const res = document.getElementById("result");
const toast = document.getElementById("toast");

res.addEventListener("paste", (e) => {
  e.preventDefault();
  const text = e.clipboardData.getData("text/plain");
  res.value += text;
});

let historyData = [];

function calculate(value) {
  // count opened and closed parentheses
  const openParens = (value.match(/\(/g) || []).length;
  const closeParens = (value.match(/\)/g) || []).length;

  // add missing closing parens at the end
  const balancedValue = value + ")".repeat(openParens - closeParens);

  try {
    // replace ^ with ** for exponent
    const sanitizedValue = balancedValue.replace(/\^/g, "**");

    // replace functions with Math equivalents
    const expression = sanitizedValue
      .replace(/sin/g, "Math.sin")
      .replace(/cos/g, "Math.cos")
      .replace(/tan/g, "Math.tan")
      .replace(/log/g, "Math.log10")
      .replace(/ln/g, "Math.log")
      .replace(/sqrt/g, "Math.sqrt");

    const calculatedValue = eval(expression);

    if (isNaN(calculatedValue)) {
      res.value = "Math Error";
      setTimeout(() => {
        res.value = "";
      }, 1300);
    } 
    else {
      res.value = calculatedValue;
      // ✅ Add to history
      // Save to history
      historyData.push(`${balancedValue} = ${calculatedValue}`);
      updateHistoryUI();
    }
  } catch (err) {
    res.value = "Invalid Input";
    setTimeout(() => {
      res.value = "";
    }, 1300);
  }
}


// Swaps the stylesheet to achieve dark mode.
function changeTheme() {
  const theme = document.getElementById("theme");
  setTimeout(() => {
    toast.innerHTML = "Calculator";
  }, 1500);
  if (theme.getAttribute("href") === lightTheme) {
    theme.setAttribute("href", darkTheme);
    themeIcon.setAttribute("src", sunIcon);
    toast.innerHTML = "Dark Mode 🌙";
  } else {
    theme.setAttribute("href", lightTheme);
    themeIcon.setAttribute("src", moonIcon);
    toast.innerHTML = "Light Mode ☀️";
  }
}

// Displays entered value on screen.
function liveScreen(enteredValue) {
  if (!res.value) {
    res.value = "";
  }
  res.value += enteredValue;
}

//adding event handler on the document to handle keyboard inputs
document.addEventListener("keydown", keyboardInputHandler);

//function to handle keyboard inputs
function keyboardInputHandler(e) {
  // to fix the default behavior of browser,
  // enter and backspace were causing undesired behavior when some key was already in focus.
  e.preventDefault();
  //grabbing the liveScreen

  //numbers
  if (e.key === "0") {
    res.value += "0";
  } else if (e.key === "1") {
    res.value += "1";
  } else if (e.key === "2") {
    res.value += "2";
  } else if (e.key === "3") {
    res.value += "3";
  } else if (e.key === "4") {
    res.value += "4";
  } else if (e.key === "5") {
    res.value += "5";
  } else if (e.key === "6") {
    res.value += "6";
  } else if (e.key === "7") {
    res.value += "7";
  } else if (e.key === "8") {
    res.value += "8";
  } else if (e.key === "9") {
    res.value += "9";
  }

  //operators
  if (e.key === "+") {
    res.value += "+";
  } else if (e.key === "-") {
    res.value += "-";
  } else if (e.key === "*") {
    res.value += "*";
  } else if (e.key === "/") {
    res.value += "/";
  }

  //decimal key
  if (e.key === ".") {
    res.value += ".";
  }

  //press enter to see result
  if (e.key === "Enter") {
    calculate(result.value);
  }

  //backspace for removing the last input
  if (e.key === "Backspace") {
    const resultInput = res.value;
    //remove the last element in the string
    res.value = resultInput.substring(0, res.value.length - 1);
  }
}

function updateHistoryUI() {
  const historyLog = document.getElementById("history-log");
  historyLog.innerHTML = historyData
    .slice() // copy array
    .reverse() // newest at top
    .map(entry => `<div>${entry}</div>`)
    .join("");
}

function clearHistory() {
  historyData = [];
  updateHistoryUI();
}

