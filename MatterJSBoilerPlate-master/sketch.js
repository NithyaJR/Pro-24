
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ground;

function preload()
{
	
}

function setup() {
	createCanvas(1200, 500);


	engine = Engine.create();
	world = engine.world;
	ground= new Ground(600,480,1200,20);


	Engine.run(engine);
  
}


function draw() {
  background(0);
  Engine.update(engine);
  
  ground.display();
 
}



