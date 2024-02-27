var rightEarx = 0;
var rightEary = 0;
var leftEarx = 0;
var leftEary = 0;

function preload(){
//leftElfEar=loadImage ("https://i.postimg.cc/pdDbjTsC/esquerda.png");
//rightElfEar=loadImage  ("https://i.postimg.cc/7ZJyxX7p/direita.jpg");
}
function setup(){
    canvas=createCanvas(300,300);
    canvas.center();
    video=createCapture(VIDEO);
    video.hide();
    video.size(300,300);
    poseNet=ml5.poseNet(video,modelLoaded);
    poseNet.on('pose',gotPoses);
}
function draw(){
   image(video,0,0,300,300);
    //image(rightElfEar,rigthEarx,rightEary,30,30); 
    //image(leftElfEar,leftEarx,leftEary,30,30);
    circle(rightEarx,rightEary,20);
    circle(leftEarx,leftEary,20);
    
     
}
function modelLoaded(){
    console.log ("poseNet foi inicializado");
}
function gotPoses(results){
if(results.length > 0){
    console.log(results);
    //console.log("orelha x: "+results[0].pose.rightEar.x);
    //console.log("orelha y: "+results[0].pose.rightEar.y);
    console.log("olho direito x: "+results[0].pose.rightEye.x);
    console.log("olho direito y: "+results[0].pose.rightEye.y);
    console.log("olho esquerdo x: "+results[0].pose.leftEye.x);
    console.log("olho esquerdo y: "+results[0].pose.leftEye.y);
    rightEarx= results[0].pose.rightEar.x-10;
    rightEary= results[0].pose.rightEar.y;
    leftEarx= results[0].pose.leftEar.x+10;
    leftEary= results[0].pose.leftEar.y;
    console.log(rightEarx);
    console.log(rightEary);
    console.log(leftEarx);
    console.log(leftEary);
}
}
function takeSnapshot(){
    save("imagempessoa.png");
}
