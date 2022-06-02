noseX = 0;
noseY = 0;
difference = 0;
rightWristX = 0;
leftWristX = 0;

function setup(){
    canvas = createCanvas(400, 300);
    canvas.position(700, 150);
    video = createCapture(VIDEO);
    video.size(550, 500);

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function gotPoses(results){
    if(results.length > 0){
        console.log(results);
        noseX = results[0].pose.nose.x;
        noseY = results[0].pose.nose.y;
     console.log("noseX = " + noseX +" noseY = "+ noseY); 
    leftWristX = results[0].pose.leftWrist.x;
    rightWristX = results[0].pose.rightWrist.x;
    console.log("leftWristX = "+ leftWristX + "rightWristX"+ rightWristX);
   difference = leftWristX - rightWristX;
   difference = floor(leftWristX - rightWristX);
   console.log("leftWristX = "+ leftWristX + " rigthWristX " + rightWristX + "difference = "+ difference);

   }
}

function modelLoaded(){
console.log('PoseNet Is Initialized');
}

function draw(){
    background('#969A97');
    document.getElementById("square_side").innerHTML = "Width and Height of a square will be = "+ difference +"px"
    fill("#00FF00");
    stroke("#00FF0");
    square(noseX , noseY, difference);
}