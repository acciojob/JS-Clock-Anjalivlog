//your code here
const hourHand = document.querySelector('.hour-hand');
const minuteHand = document.querySelector('.min-hand');
const secondHand = document.querySelector('.second-hand');

function setDate() {
    const now = new Date();

    const seconds = now.getSeconds();
    const secondsDegrees = ((seconds / 60) * 360) + 90;
    secondHand.style.transform = `rotate(${secondsDegrees}deg)`;

    const minutes = now.getMinutes();
    const minutesDegrees = ((minutes / 60) * 360) + 90;
    const minuteRadians = minutesDegrees * Math.PI / 180;
    const minuteA = Math.cos(minuteRadians).toFixed(6);
    const minuteB = Math.sin(minuteRadians).toFixed(6);
    const minuteC = (-minuteB).toFixed(6);
    const minuteD = minuteA;
    minuteHand.style.transform = `matrix(${minuteA}, ${minuteB}, ${minuteC}, ${minuteD}, 0, 0)`;

    const hours = now.getHours();
    const hoursDegrees = ((hours / 12) * 360) + ((minutes / 60) * 30) + 90;
    const hourRadians = hoursDegrees * Math.PI / 180;
    const hourA = Math.cos(hourRadians).toFixed(6);
    const hourB = Math.sin(hourRadians).toFixed(6);
    const hourC = (-hourB).toFixed(6);
    const hourD = hourA;
    hourHand.style.transform = `matrix(${hourA}, ${hourB}, ${hourC}, ${hourD}, 0, 0)`;
}

// Call the function once to set the initial state, then every second
setDate();
setInterval(setDate, 1000);
