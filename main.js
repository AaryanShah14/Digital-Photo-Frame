function preload() {

}

function setup() {
    canvas = createCanvas(700, 500);
    canvas.position(325, 200);
    video = createCapture(VIDEO);
    video.hide();
}


function draw() {
    image(video, 230, 150, 220, 200);

    fill(255, 0, 0);
    stroke(255, 0, 0);

    fill(0, 128, 0);
    stroke(0, 128, 0);
    rect(90, 40, 460, 20);

    rect(90, 420, 460, 20);
    circle(90, 62, 90);
    circle(570, 62, 90);
    circle(120, 420, 90);
    circle(570, 420, 90)
}

function take_snapshot() {
    save('user_name.png');
}