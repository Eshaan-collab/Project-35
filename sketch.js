var ballon;
var background;




function preload(){
background=loadImage("Images/pro-C35 images/Hot Air Ballon-01.png");
}

function setup() {
  createCanvas(500,500);
  createSprite(400, 200, 50, 50);
  var balloon
}

function draw() {
   background("Images/pro-C35 images/Hot Air Ballon-01.png");

if(keyDown(LEFT_ARROW)){
  balloon.x=balloon.x-10;
}
else if(keyDown(RIGHT_ARROW)){
  balloon.x=balloon.x+10;
}
else if(keyDown(UP_ARROW)){
  balloon.y=ballon.y-10;
}
else if(keyDown(DOWN_ARROW)){
  balloon.y=balloon.y+10;
}

  drawSprites();
}