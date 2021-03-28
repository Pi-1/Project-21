var bullet, wall;
var speed, weight, thickness;

function setup() {
  createCanvas(1600,400);
  createSprite(400, 200, 50, 50);

  speed = random(223,321)
  weight = random(30,52)
  thickness = random(22,83)

  bullet = createSprite(50,200,25,10);
  bullet.shapeColor = ("white");

  wall = createSprite(1200,200,thickness,height/2);
  color(80,80,80)

}

function draw() {
  background(255,255,255);  

  bullet.velocityX = 10;

  var damage = (0.5 * weight * speed * speed)/(thickness * thickness * thickness);

  if (damage > 10) {

    bullet.shapeColor = "red";
    
  }

  if (damage < 10) {

    bullet.shapeColor = "green";
    
  }

  if (bullet.isTouching(wall)) {

    bullet.velocityX = 0;
  }
  drawSprites();
}