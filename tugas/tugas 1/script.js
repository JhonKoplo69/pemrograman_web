const display = document.getElementById('display');

// Fungsi untuk menambah simbol/angka ke display
function appendSymbol(symbol) {
  if (display.innerText === '0') {
    display.innerText = symbol;
  } else {
    display.innerText += symbol;
  }
}

// Fungsi untuk menghitung hasil
function calculateResult() {
  try {
    const result = eval(display.innerText);
    display.innerText = result;
  } catch {
    display.innerText = 'Error';
  }
}

// Fungsi untuk menghapus semua (AC)
function clearDisplay() {
  display.innerText = '0';
}
