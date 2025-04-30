const celsiusInput = document.getElementById("celsius");
const fahrenheitInput = document.getElementById("fahrenheit");
const calculationText = document.getElementById("calculation");

// Fungsi konversi Celsius ke Fahrenheit
function convertSuhu() {
  const celsiusValue = parseFloat(celsiusInput.value);

  // Cek apakah input adalah angka yang valid
  if (isNaN(celsiusValue)) {
    alert("Inputan tidak boleh kosong");
    return false; // jika input tidak valid, hentikan eksekusi
  } else {
    const fahrenheitValue = (celsiusValue * 9) / 5 + 32;
    fahrenheitInput.value = fahrenheitValue.toFixed(2);
    calculationText.value = `${celsiusValue}°C x (9/5) + 32 = ${fahrenheitValue.toFixed(2)}°F`;
  }
}

// Fungsi reset semua input dan hasil
function resetForm() {
  console.log("reset button clicked");
  celsiusInput.value = "";
  fahrenheitInput.value = "";
  calculationText.value = "";
}

function reverse() {
  console.log("reverse button clicked");
  const fahrenheitValue = parseFloat(fahrenheitInput.value);

  if (isNaN(fahrenheitValue)) {
    alert("Masukkan angka yang valid di Fahrenheit!");
    return;
  }

  const celsiusValue = ((fahrenheitValue - 32) * 5) / 9;
  celsiusInput.value = celsiusValue.toFixed(2);
  calculationText.value = `${fahrenheitValue}°F - 32 x (5/9) = ${celsiusValue.toFixed(2)}°C`;
}
