/* eslint-disable no-undef */

document.addEventListener('click', (event) => {
  if (!event.target.classList.contains('page-choice')) {
    return;
  }
  const chosenPage = `https://${event.target.textContent}`;
  browser.tabs.create({
    url: chosenPage
  });
});

let sec;

if (!(localStorage.getItem('time') > 1)) {
  sec = 1;
} else {
  sec = localStorage.getItem('time');
}

localStorage.setItem('time', sec);

function consol () {
  sec = +sec + +1;
  localStorage.setItem('time', sec);
  if (!(document.querySelector('#thisOne') === null)) document.querySelector('#thisOne').textContent = sec;
}
consol();
setInterval(consol, 1000);
