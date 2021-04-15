canvas = document.getElementById("myCanvas");
ctx=canvas.getContext("2d")
var car1width = 200;
var car1height = 200;
var car1x = 10;
var car1y = 10;
var car1image = "car.png";

var car2width = 200;
var car2height = 200;
var car2x = 10;
var car2y = 200;
var backgroundimage = "racing2.jpg";
var car2image = "car2.png";

function add() {
    biamgetag = new Image();
    biamgetag.onload = loadbackground;
    biamgetag.src = backgroundimage;

    car1imagetag = new Image();
    car1imagetag.onload = uploadcar;
    car1imagetag.src = car1image;

    car2imagetag = new Image();
    car2imagetag.onload = uploadcar2;
    car2imagetag.src = car2image;
}

function loadbackground() {
    ctx.drawImage(biamgetag,0,0,canvas.width,canvas.height);
}

function uploadcar() {
    ctx.drawImage(car1imagetag,car1x,car1y,car1width,car1height);
}

function uploadcar2() {
    ctx.drawImage(car2imagetag,car2x,car2y,car2width,car2height);
}

window.addEventListener("keydown",keydown);

function keydown(e) {
 keypressed = e.keyCode  
 console.log(keypressed);
 if (keypressed == '38') {
     up();
     console.log("up")
 }

 if (keypressed == '40') {
    down();
    console.log("down")
}

if (keypressed == '37') {
    left();
    console.log("left")
}

if (keypressed == '39') {
    right();
    console.log("right")
}
}