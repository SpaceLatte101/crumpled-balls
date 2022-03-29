const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine,world;
var ground1,ground2,ground3,left_side;
var ball;

function setup() {
	createCanvas(800, 300);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
    ground1 = new Ground(400, 270, 800, 5);
	ground2 = new Ground(570, 245, 4, 55);
	ground3 = new Ground(680, 245, 4, 55);
    left_side = new Ground(800,150,4,300);

    var ball_options = {
	  restitution:0.3,
      friction:0,
      density:1.2,
    }

	ball = Bodies.circle(130,50,8,ball_options);
    World.add(world,ball);

	rectMode(CENTER);
	ellipseMode(RADIUS);
  
}


function draw() {
  
  background("black");

  fill("white")
  ellipse(ball.position.x,ball.position.y,8);

  ground1.show();
  ground2.show();
  ground3.show();
  left_side.show();
  Engine.update(engine);
  drawSprites();
 
}

function keyPressed() {
    if (keyCode === UP_ARROW){
        Matter.Body.applyForce(ball,{x:0,y:0},{x:6,y:6})
    }
}
