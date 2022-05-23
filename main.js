difference = 0;
leftwrist = 0;
rightwrist = 0;

function setup(){
    video = createCapture(VIDEO);
    video.size(350,300);
    video.position(100,200)
    
    canvas = createCanvas(350,300);
    canvas.position(780,200);
    
    poseNet = ml5.poseNet(video,modelLoaded);
    poseNet.on('pose',gotPoses);
}
function modelLoaded(){
    console.log("PoseNet is Initialized");
}
function gotPoses(results){
    if(results.length > 0){
        console.log(results);
        leftwrist = results[0].pose.leftWrist.x;
        rightwrist = results[0].pose.rightWrist.x;
        difference = floor(leftwrist - rightwrist);
        console.log("leftwrist = "+leftwrist + "rightwrist = "+rightwrist + "difference = "+ difference);
    }
}
function draw(){
    background('#f7f7f7');
    textSize(difference);
    fill('#292b2c');
    text("Neeharika",50,300);
    document.getElementById("fs").innerHTML = "Font size = " + difference  + "px";
}