const inputEl = document.querySelector('input');
const buttonEl = document.querySelector('button');
const timerEl = document.querySelector('span');
let seconds;
let timeInterval;
// Напишите реализацию createTimerAnimator
// который будет анимировать timerEl
function createTimerAnimator() {
    if (seconds <= 0) {
        clearInterval(timeInterval);
    }
    let hours, minutes, sec;
    hours = getZero(Math.floor(seconds / 3600));
    minutes = getZero(Math.floor((seconds - (3600 * hours)) / 60));
    sec = getZero(Math.floor((seconds - (3600 * hours)) % 60));
    time = `${hours}:${minutes}:${sec}`;
    timerEl.innerHTML = time;
    seconds = seconds - 1;
}

// const animateTimer = createTimerAnimator();

inputEl.addEventListener('input', () => {
    // Очистите input так, чтобы в значении
    // оставались только числа
});

buttonEl.addEventListener('click', () => {
    clearInterval(timeInterval);
    reg = /\d/g;
    seconds = inputEl.value.match(reg).join('');
    timeInterval = setInterval((createTimerAnimator), 1000);
    inputEl.value = '';
});


function getZero(num) {
    if (num >= 0 && num < 10) {
        return `0${num}`;
    } else {
        return num;
    }
}