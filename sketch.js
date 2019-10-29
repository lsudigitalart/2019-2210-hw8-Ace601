let img0;
let img1;
let img2;
let img3;
var y1 = 0
let r = random(1,10);
function preload(){
    img0 = loadImage('Monster1.png');
    img1 = loadImage('Monster2.png');
    img2 = loadImage('Monster4.png');
    img3 = loadImage('Monster3.png');



}

function setup(){
createCanvas(1200,1200)
}

function draw(){
background(0)
img0(110,110)
img1(770,300)
img2(550,600)
img3(50,770)

image(img0, 110 ,y1);
image(img1,770 ,y1);
image(img2, 550, y1);
image(img3, 50, y1);
y1++
}

function creature0(img0){

image(img0(random(width)) ,random(heigth));



}