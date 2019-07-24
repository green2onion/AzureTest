const HOURHAND = document.querySelector("#hour");
const MINUTEHAND = document.querySelector("#minute");
const SECONDHAND = document.querySelector("#second");

var date = new Date();
let hr = date.getHours();
let min = date.getMinutes();
let sec = date.getSeconds();

let hrPosition = 360 / 12 * hr + min * (360 / 60 / 60);
let minPosition = 360 / 60 * min + sec * (360 / 60 / 60);
let secPosition = 360 / 60 * sec;

function runTheClock()
{
    secPosition += 360 / 60;
    minPosition += 360 / 60 / 60;
    hrPosition += 360 / 60 / 60 / 12;

    HOURHAND.style.transform = "rotate(" + hrPosition + "deg)"
    MINUTEHAND.style.transform = "rotate(" + minPosition + "deg)"
    SECONDHAND.style.transform = "rotate(" + secPosition + "deg)"
}


var interval = setInterval(runTheClock, 1000);
