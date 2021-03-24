//clock
setInterval(updateClock, 100);

function updateClock() {
    const clockContainer = document.querySelector('.clock');
    clockContainer.innerText = new Date().toLocaleTimeString();
}