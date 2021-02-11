var fixedRect, movingRect;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;

  ball1 = createSprite(200,400,80,30);
  ball1.shapeColor = "blue";
  ball1.debug = true;
  ball1.velocityX = 3;

  ball2 = createSprite(300,400,80,30);
  ball2.shapeColor = "pink";
  ball2.debug = true;
  ball2.velocityX = -3;

  ball3 = createSprite(700,400,80,30);
  ball3.shapeColor = "red";
  ball3.debug = true;
  ball3.velocityY = 3;

  ball4 = createSprite(700,600,80,30);
  ball4.shapeColor = "yellow";
  ball4.debug = true;
  ball4.velocityY = -3;

}

function draw() {
  background(0,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;
   if(isTouching(movingRect, fixedRect)){
      movingRect.shapeColor = "blue";
      fixedRect.shapeColor = "blue";
   }
   else{
    movingRect.shapeColor = "green";
    fixedRect.shapeColor = "green";
   }
   
  bounceOff(ball1,ball2);
  bounceOff(ball3,ball4);
   drawSprites();
  }








