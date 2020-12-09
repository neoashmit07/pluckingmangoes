
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var boy,mango1,mango2,mango3,mango4,mango5,tree,ground;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	boy = new Launcher(200,500,100,150);
	tree = new Tree(650,500,130,150);
	ground = new Ground(600,700,300,300);

	Engine.run(engine);
  
}


function draw() {
	
  Engine.update(engine);
  //rectMode(CENTER);
  background(0);
  
  drawSprites();
	boy.display();
	tree.display();
	ground.display();
}



