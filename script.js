const display = document.getElementById('display');
const historyDiv = document.getElementById('history');
let history = [];

function appendValue(value) {
  display.value += value;
}

function clearDisplay() {
  display.value = '';
}

function calculate() {
  try {
    const result = eval(display.value);
    addToHistory(`${display.value} = ${result}`);
    display.value = result;
  } catch {
    display.value = 'Error';
  }
}

function addToHistory(entry) {
  history.unshift(entry);
  if (history.length > 5) history.pop();
  updateHistoryDisplay();
}

function updateHistoryDisplay() {
  historyDiv.innerHTML = history.map(item => `<div>${item}</div>`).join('');
}

function toggleTheme() {
  document.body.classList.toggle('dark');
}

document.addEventListener('keydown', (e) => {
  if (e.key >= '0' && e.key <= '9' || ['+', '-', '*', '/', '.', '%'].includes(e.key)) {
    appendValue(e.key);
  } else if (e.key === 'Enter') {
    calculate();
  } else if (e.key === 'Backspace') {
    display.value = display.value.slice(0, -1);
  } else if (e.key.toLowerCase() === 'c') {
    clearDisplay();
  }
});
