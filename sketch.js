var fixedRect, movingRect;
var gameObject1,gameObject2;


function setup() {
  createCanvas(1200,800);
  fixedRect=createSprite(400, 200, 80, 50);
  fixedRect.shapeColor="red";

  movingRect=createSprite(600, 200, 50, 80);
  movingRect.shapeColor="red";

  gameObject1=createSprite(100, 100, 80, 50);
  gameObject1.shapeColor="red";

  gameObject2=createSprite(100, 800, 80, 50);
  gameObject2.shapeColor="red";

  gameObject1.velocityY=5;
  gameObject2.velocityY=-5;

}


function draw() {
  background(0,0,0);
  movingRect.x=mouseX;  
  movingRect.y=mouseY;
  
  if (Collision(movingRect,fixedRect)) {
    fixedRect.shapeColor="blue";
    movingRect.shapeColor="blue";
  }
  else{
    fixedRect.shapeColor="red";
    movingRect.shapeColor="red";
  }

  bounceOff(gameObject1,gameObject2);

  drawSprites();
}

