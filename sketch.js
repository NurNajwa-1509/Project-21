const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

let engine;
let world;

var ground;
var left;
var right;
var ball;

function setup() 
{
  createCanvas(900,400);
  engine = Engine.create();
  world = engine.world;
  
  ground =new Ground(410,390,990,10);
  right = new Ground(760,342,10,80);
  left = new Ground(600,342,10,80);

  var ball_options = {
    isStatic:false,
    restitution:0.3,
    friction:0,
    density:1.2
  }

  ball = Bodies.circle(100,120,10,ball_options);
  World.add(world,ball);
 
  rectMode(CENTER);
  ellipseMode(RADIUS);
}

function draw() 
{
  background(0);
  ground.show();
  left.show();
  right.show();
  Engine.update(engine);

  ellipse(ball.position.x,ball.position.y,10);
}

function keyPressed()
{
  if(keyCode === RIGHT_ARROW)
  {
    Matter.Body.applyForce(ball,{x:0,y:0},{x:2,y:0})
  }

  if(keyCode === LEFT_ARROW)
  {
    Matter.Body.applyForce(ball,{x:0,y:0},{x:-2,y:0})
  }
}

