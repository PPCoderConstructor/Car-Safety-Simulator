var car, wall;
var speed, weight;
var deformation;

function setup() 
{
  createCanvas(800,400);

  speed = random(0, 50);
  weight = random(400, 1500)

  car = createSprite(100, 200, 20, 20);
  car.shapeColor = "white"

  wall = createSprite(700, 200, 30, 200)
  wall.shapeColor = "brown"

  car.collide(wall)
}

function draw() 
{
  background(0);

  car.velocityX = speed;
  car.weight = weight

  if (car.isTouching(wall))
  {
    deformation = 0.5 * speed* speed* weight / 2250;
  }

  if (car.isTouching(wall) && deformation < 100)
  {
    car.collide(wall);
    car.shapeColor = "green"
  }

  if (car.isTouching(wall) && deformation > 100 && deformation < 180)
  {
    car.collide(wall);
    car.shapeColor = "yellow"
  }

  if (car.isTouching(wall) && deformation > 180)
  {
    car.collide(wall);
    car.shapeColor = "red"
  }

  drawSprites();
}