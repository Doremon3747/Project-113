
function setup() {
    canvas = createCanvas(640,480);
    canvas.position(110,250);
    video = createCapture(VIDEO);
    video.hide();

    canvas = createCanvas(230,230);
    canvas.center();
}


function draw() {
  image(video, 0, 0, 640, 480);
  
}

function take_snapshot() {
    save("Image .png");
}

