// ============================
// Heart Count in Navbar
// ============================
const heartCountSpan = document.getElementById('Available-balance-heart');
const hearts = document.querySelectorAll('.red-heart');
let heartCount = 0;

hearts.forEach((heart) => {
  heart.addEventListener('click', () => {
    heartCount++;
    heartCountSpan.innerText = heartCount;
    heart.classList.toggle('text-red-500'); // heart turns red
  });
});

// ============================
// Coins Management
// ============================
let coins = 100;
const coinSpan = document.getElementById('Available-balance-coin');
coinSpan.innerText = coins;

// ============================
// Call History Functionality
// ============================
const callHistoryContainer = document.getElementById('call-history');
const callButtons = document.querySelectorAll('.call-btn');
const clearHistoryBtn = document.getElementById('clear-history-btn');

callButtons.forEach((btn) => {
  btn.addEventListener('click', () => {
    // Get parent card
    const card = btn.closest('.shadow-lg');
    const serviceName = card.querySelector('.serviceName').innerText;
    const serviceNumber = card.querySelector('.serviceNumber').innerText;

    // Check coins
    if (coins < 20) {
      alert("Not enough coins to make a call!");
      return;
    }

    // Deduct coins
    coins -= 20;
    coinSpan.innerText = coins;

    // Show alert
    alert(`Calling ${serviceName} at ${serviceNumber}`);

    // Add to call history dynamically
    const historyItem = document.createElement('div');
    historyItem.innerText = `${serviceName} - ${serviceNumber}`;
    historyItem.classList.add('mb-2');
    callHistoryContainer.appendChild(historyItem);
  });
});

// ============================
// Clear Call History
// ============================
clearHistoryBtn.addEventListener('click', () => {
  callHistoryContainer.innerHTML = '';
});