/* eslint-disable no-undef */

let sec = localStorage.getItem('time');

function timer () {
  sec = +sec + +1;
  localStorage.setItem('time', sec);
  if (!(document.querySelector('#thisOne') === null)) document.querySelector('#thisOne').textContent = sec;
}

timer();
setInterval(timer, 1000);

// document.addEventListener('click', (event) => {
//   if (!event.target.classList.contains('page-choice')) {
//     return;
//   }
//   const chosenPage = `https://${event.target.textContent}`;
//   browser.tabs.create({
//     url: chosenPage
//   });
// });
