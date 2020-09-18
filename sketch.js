function setup() {
  createCanvas(800,400);
  
  MR = createSprite(200, 200, 50, 50);
  MR.shapeColor = "blue";

  FR = createSprite(600, 200, 50, 50);
  FR.shapeColor = "blue";
}

function draw() {
  background("yellow");  
 
MR.x = mouseX;
MR.y = mouseY;

if (MR.x - FR.x < MR.width/2 + FR.width/2 && 
    FR.x - MR.x < MR.width/2 + FR.width/2 &&
    MR.y - FR.y < MR.height/2 + FR.height/2 && 
    FR.y - MR.y < MR.height/2 + FR.height/2 ){
    MR.shapeColor = "red";
}
 
  drawSprites();
}