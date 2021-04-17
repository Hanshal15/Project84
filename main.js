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

function up1() {
    if (car1y>=0){
        car1y=car1y-10;
        console.log("when up arrow is pressed,x =" + car1x + "y =" + car1y);
        loadbackground();
        uploadcar();
        uploadcar2();
    }
}

function down1() {
    if (car1y<=500){
        car1y=car1y+10;
        console.log("when down arrow is pressed,x =" + car1x + "y =" + car1y);
        loadbackground();
        uploadcar();
        uploadcar2();
    }
}

function right1() {
    if (car1x<=700){
        car1x=car1x+10;
        console.log("when right arrow is pressed,x =" + car1x + "y =" + car1y);
        loadbackground();
        uploadcar();
        uploadcar2();
    }
}

function left1() {
    if (car1x>=0){
        car1x=car1x-10;
        console.log("when left arrow is pressed,x =" + car1x + "y =" + car1y);
        loadbackground();
        uploadcar();
        uploadcar2();
    }
}


function up2() {
    if (car2y>=0){
        car2y=car2y-10;
        console.log("when up arrow is pressed,x =" + car2x + "y =" + car2y);
        loadbackground();
        uploadcar();
        uploadcar2();
    }
}

function down2() {
    if (car2y<=500){
        car2y=car2y+10;
        console.log("when down arrow is pressed,x =" + car2x + "y =" + car2y);
        loadbackground();
        uploadcar();
        uploadcar2();
    }
}

function right2() {
    if (car2x<=700){
        car2x=car2x+10;
        console.log("when right arrow is pressed,x =" + car2x + "y =" + car2y);
        loadbackground();
        uploadcar();
        uploadcar2();
    }
}

function left2() {
    if (car2x>=0){
        car2x=car2x-10;
        console.log("when left arrow is pressed,x =" + car2x + "y =" + car2y);
        loadbackground();
        uploadcar();
        uploadcar2();
    }
}

window.addEventListener("keydown",keydown);

function keydown(e) {
 keypressed = e.keyCode  
 console.log(keypressed);
 if (keypressed == '38') {
     up1();
     console.log("up")
 }

 if (keypressed == '40') {
    down1();
    console.log("down")
}

if (keypressed == '37') {
    left1();
    console.log("left")
}

if (keypressed == '39') {
    right1();
    console.log("right")
}



if (keypressed == '119') {
    up2();
    console.log("up")
}

if (keypressed == '115') {
   down2();
   console.log("down")
}

if (keypressed == '97') {
   left2();
   console.log("left")
}

if (keypressed == '100') {
   right2();
   console.log("right")
}
}