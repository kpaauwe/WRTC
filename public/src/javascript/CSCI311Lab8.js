//timeloop.js
//calls update() defined in a script in the html file

var ticks = 1;
var myClock;
const colors = ["blue", "red", "green", "purple", "salmon"]

function startTimer() {myClock = setInterval(timerInterrupt,33);}  //update 30 frames per second

function resetTimer() {ticks = 0;}

function stopTimer() {clearInterval(myClock);}

function timerInterrupt() {
    if(ticks %30 == 0) {
        update(); //Use update to make changes to html DOM
    }
    if(ticks %111 == 0) {
        document.getElementById("header").style.color = colors[ticks%colors.length];
    }
    if(ticks %222 == 0) {
        document.getElementById("paragraph").style.color=colors[(ticks*3)%colors.length];
    }
    if(ticks %13 == 0) {
        document.getElementById("body").style.backgroundColor=colors[(ticks+1)%colors.length];
    }
    if (ticks % 5 == 0) {
        document.getElementById("image").style.width= 100 - (ticks%100) + "%";
        document.getElementById("image").style.transform= "rotate(" + (360 - ticks%360) + "deg)";

    }
    ticks++;
}