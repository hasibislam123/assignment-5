
const heartCountSpan = document.getElementById('Available-balance-heart');
const hearts = document.querySelectorAll('.red-heart');
let heartCount = 0;

hearts.forEach((heart) => {
  heart.addEventListener('click', () => {
    heartCount++;
    heartCountSpan.innerText = heartCount;
    heart.classList.toggle('text-red-500'); 
  });
});


let coins = 100;
const coinSpan = document.getElementById('Available-balance-coin');
coinSpan.innerText = coins;


const callHistoryContainer = document.getElementById('call-history');
const callButtons = document.querySelectorAll('.call-btn');
const clearHistoryBtn = document.getElementById('clear-history-btn');

callButtons.forEach((btn) => {
  btn.addEventListener('click', () => {

    const card = btn.closest('.bg-white');
    const serviceName = card.querySelector('.serviceName').innerText;
    const serviceNumber = card.querySelector('.serviceNumber').innerText;

    if (coins < 20) {
      alert("Not enough coins to make a call!");
      return;
    }

    coins -= 20;
    coinSpan.innerText = coins;

    alert(`Calling ${serviceName} at ${serviceNumber}`);
    const historyItem = document.createElement('div');
    historyItem.innerText = `${serviceName} - ${serviceNumber}`;
    historyItem.classList.add('mb-2');
    callHistoryContainer.appendChild(historyItem);
  });
});



clearHistoryBtn.addEventListener('click', () => {
  callHistoryContainer.innerHTML = '';
});