var fixedRect, movingRect;

var gameObject1, gameObject2, gameObject3, gameObject4;

var ball1, ball2, ball3, ball4;

function setup() {
  createCanvas(1200, 800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "yellow";
  fixedRect.debug = true;
  movingRect = createSprite(400, 200, 80, 30);
  movingRect.shapeColor = "blue";
  movingRect.debug = true;
  gameObject1 = createSprite(100, 100, 50, 50);
  gameObject1.shapeColor = "hotpink"
  gameObject2 = createSprite(200, 100, 50, 50)
  gameObject2.shapeColor = "hotpink"
  gameObject3 = createSprite(300, 100, 50, 50)
  gameObject3.shapeColor = "hotpink"
  gameObject4 = createSprite(400, 100, 50, 50)
  gameObject4.shapeColor = "hotpink"


  ball1 = createSprite(10, 200, 20, 20);
  ball1.shapeColor = "purple"
  ball1.velocityX = 2;
  ball2 = createSprite(600, 200, 20, 20);
  ball2.shapeColor = "red"
  ball2.velocityX = -2;
  ball3 = createSprite(1000, 10, 20, 20);
  ball3.shapeColor = "lightblue"
  ball3.velocityY = 2;
  ball4 = createSprite(1000, 790, 20, 20)
  ball4.shapeColor = "orange"
  ball4.velocityY = -2;
}

function draw() {
  background(0, 0, 0);
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;


  if (isTouching(movingRect, gameObject3)) {
    gameObject1.shapeColor = "blue"
    gameObject4.shapeColor = "blue"
  }
  else {
    gameObject1.shapeColor = "tan"
    gameObject4.shapeColor = "tan"
  }

  bounceOff(ball1, ball2);

  bounceOff(ball3, ball4);

  drawSprites();
}

