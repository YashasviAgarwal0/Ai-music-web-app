song1 = "";
song2 = "";
leftWristx = "";
leftWristy = "";
rightWristx = "";
rightWristy = "";

function preload()
{
    song1 = loadSound("music.mp3");
    song2 = loadSound("music2.mp3")
}

function setup()
{
    canvas = createCanvas(350, 350);
    canvas.center();

    video = createCapture(VIDEO);
    video.hide();
    
    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on("pose", gotPoses);
}

function modelLoaded()
{
    console.log("PoseNet is Initialized");
}

function gotPoses(results)
{
  if(results.length > 0)
  {
    console.log(results);
  leftWristx = results[0].pose.leftWrist.x;
  leftWristy = results[0].pose.leftWrist.y;
  rightWristx = results[0].pose.rightWrist.x;
  rightWristy = results[0].pose.rightWrist.y;
  }
}

function draw()
{
    image(video, 0, 0, 350, 350);
}

function playSong()
{
    song1.play();
    song2.play();
    song.setVolume(1);
    song.rate(1);
}