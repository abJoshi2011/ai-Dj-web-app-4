song = "";
leftWristX = 0;
leftWristY = 0;
scoreleftWrist = 0;
scorerightWrist = 0;
leftWristX = 0;
leftWristY = 0;
function preload()
{
    song = loadSound("music.mp3");
} 
function setup()
{
    canvas = createCanvas(600, 500);
    canvas.center();

    video = createCapture(VIDEO);
    video.hide();
    poseNet = ml5.poseNet(video, modelLoded);
    poseNet.on('pose',gotPoses);
}
function modelLoded()
{
    console.log('PoseNet Is Initialized');
}
function gotPoses(results)
{if(results.length > 0)
    {
        console.log(results);
        console.log(results);
     scorerightWrist = results[0].pose.keypoints[10].score;
     scoreleftWrist = results[0].pose.keypoints[9].score;
     console.log( "scorerightWrist = " +scorerightWrist+"scoreleftWrist = " +scoreleftWrist);

     leftWristX = results[0].pose.leftWrist.x;
     leftWristY = results[0].pose.leftWrist.y;
     console.log("leftWristX = "+leftWristX+"leftWristY  = "+leftWristY);

     rightWristX = results[0].pose.rightWrist.x;
     rightWristY = results[0].pose.rightWrist.y;
     console.log("rightWristX = "+rightWristX+"rightWristY"+rightWristY);
    }

}
function draw()
{
    image(video, 0, 0, 600, 500);
    fill("#ab0000");
    stroke("#ab0000");

    if(scoreleftWrist > 0.2){
        circle(leftWristX, leftWristY, 20 );
        InNumberleftWristY = Number(leftWristY);
        remove_decimals = floor(InNumberleftWristY);
        volume = remove_decimals/500;
        document.getElementById("volume").innerHTML = "volume = " +volume;
        song.setVolume(volume);
}
function play()
{
    song.play();
    song.setVolume(1);
    song.rate(1);
}