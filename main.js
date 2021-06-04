canvas=document.getElementById("myCanvas");
ctx = canvas.getContext("2d");
car1_width = 120; car1_height = 70;
car1_x = 10;
car1_y = 10;
background_image = "https://i.postimg.cc/KzWwHPcq/racing.gif";
car1_image = "https://i.postimg.cc/YqdnnNX1/car1.png";
car2_width = 120; car2_height = 70;
car2_x = 10;
car2_y = 10;
car2_image = "https://p.kindpng.com/picc/s/224-2246620_race-car-clipart-above-car-vector-top-view.png"
function add(){
    background_imgTag = new Image();
    background_imgTag.onload = uploadBackground;
    background_imgTag.src = background_image;

    car1_imgTag = new Image();
    car1_imgTag.onload = uploadRover;
    car1_imgTag.src = rover_image;
}
function uploadBackground(){
    ctx.drawImage(background_image,0,0,canvas.width,canvas.height);
}
function uploadRover(){
    ctx.drawImage(car1_image,car1_x,car1_y, car1_width,car1_height);
}
function add(){
    background_imgTag = new Image();
    background_imgTag.onload = uploadBackground;
    background_imgTag.src = background_image;

    car2_imgTag = new Image();
    car2_imgTag.onload = uploadRover;
    car2_imgTag.src = rover_image;
}
function uploadBackground(){
    ctx.drawImage(background_image,0,0,canvas.width,canvas.height);
}
function uploadRover(){
    ctx.drawImage(car2_image,car2_x,car2_y, car2_width,car2_height);
}
window.addEventListener("keydown",my_keydown);

function my_keydown(e){
keyPressed = e.keyCode;
console.log(keyPressed);
if(keyPressed == '38'){
    up();
    console.log("up");
}
if(keyPressed == '40'){
    down();
    console.log("down");
}
if(keyPressed == '37'){
    left();
    console.log("left");
}
if(keyPressed == '39'){
    right();
    console.log("right");
}
}
function up(){
    if(car1 >= 0){
        car1_y = car1_y - 10;
        console.log("when up arrow is pressed, x = " + car1_x + " y =  " + car1_y);
        uploadBackground();
        uploadCar1();
    }
}

function down(){
    if(car1_y <= 500){
        car1_y = car1_y + 10;
        console.log("when up arrow is pressed, x = " + car1_x + " y =  " + car1_y);
        uploadBackground();
        uploadCar1();
    }
}
function left(){
    if(car1_x >= 0){
        car1_x = car1_x - 10;
        console.log("when up arrow is pressed, x = " + car1_x + " y =  " + car1_y);
        uploadBackground();
        uploadCar1();
    }
}

function right(){
    if(car1_x <= 700){
        car1_x = car1_x + 10;
        console.log("when up arrow is pressed, x = " + car1_x + " y =  " + car1_y);
        uploadBackground();
        uploadCar1();
    }
}
function up(){
    if(car2 >= 0){
        car2_y = car2_y - 10;
        console.log("when up arrow is pressed, x = " + car2_x + " y =  " + car2_y);
        uploadBackground();
        uploadCar2();
    }
}

function down(){
    if(car2_y <= 500){
        car2_y = car2_y + 10;
        console.log("when up arrow is pressed, x = " + car2_x + " y =  " + car2_y);
        uploadBackground();
        uploadCar2();
    }
}
function left(){
    if(car2_x >= 0){
        car2_x = car2_x - 10;
        console.log("when up arrow is pressed, x = " + car2_x + " y =  " + car2_y);
        uploadBackground();
        uploadCar2();
    }
}

function right(){
    if(car2_x <= 700){
        car2_x = car2_x + 10;
        console.log("when up arrow is pressed, x = " + car2_x + " y =  " + car2_y);
        uploadBackground();
        uploadCar2();
    }
}