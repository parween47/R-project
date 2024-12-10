"use strict";
let hour = document.getElementById("hour");
let minute = document.getElementById("minute");
let second = document.getElementById("second");
function displayTime() {
    let date = new Date();
    let hours = date.getHours();
    let secs = date.getSeconds();
    let mins = date.getMinutes();
    let hRotation = hours * 30 + mins / 2;
    let mRotation = mins * 6;
    let sRotation = secs * 6;
    hour.style.transform = `rotate(${hRotation}deg)`;
    minute.style.transform = `rotate(${mRotation}deg)`;
    second.style.transform = `rotate(${sRotation}deg)`;
}
setInterval(displayTime, 1000);
