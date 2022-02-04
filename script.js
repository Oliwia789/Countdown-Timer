const trip = "1 august 2022";

const daysEl = document.getElementById("days");
const hoursEl = document.getElementById("hours");
const minsEl = document.getElementById("mins");
const secondsEl = document.getElementById("seconds");

function countdown() {
    const tripDate = new Date(trip);
    const currentDate = new Date();

    const totalSecondes = (tripDate - currentDate) / 1000;


    const secondes = Math.floor(totalSecondes) % 60;
    const minutes = Math.floor(totalSecondes / 60) % 60;
    const hours = Math.floor(totalSecondes / 3600) % 24;
    const days = Math.floor(totalSecondes / 3600 / 24);
    
    daysEl.innerHTML = days;
    hoursEl.innerHTML = formatTime(hours);
    minsEl.innerHTML = formatTime(minutes);
    secondsEl.innerHTML = formatTime(secondes);
   
}

function formatTime(time) {
    return time < 10 ? (`0${time}`) : time;
}

countdown();

//setInterval(countdown, 1000);

