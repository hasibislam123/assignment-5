
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


document.addEventListener('DOMContentLoaded', () => {
  const copyBtns = document.querySelectorAll('.copy-btn'); // সব Copy button
  const copyCountEl = document.getElementById('copy-count');
  let count = 0;

  copyBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      count++;
      copyCountEl.textContent = count;
      alert('Text copied! Total copies: ' + count);
    });
  });
});


document.addEventListener('DOMContentLoaded', () => {
  const copyBtns = document.querySelectorAll('.copy-btn'); // সব copy button
  const copyCountEl = document.getElementById('copy-count'); // header copy count
  let count = 0;

  copyBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      // button এর parent card থেকে serviceNumber h1 খুঁজে নাও
      const card = btn.closest('.bg-white'); // parent card div
      const serviceNumberEl = card.querySelector('.serviceNumber');
      const number = serviceNumberEl.textContent.trim(); // number get

      // Clipboard এ copy
      navigator.clipboard.writeText(number).then(() => {
        // Copy count update
        count++;
        copyCountEl.textContent = count;
        // Alert
        alert(`Hotline number ${number} copied! Total copies: ${count}`);
      }).catch(err => {
        console.error('Failed to copy: ', err);
      });
    });
  });
});
