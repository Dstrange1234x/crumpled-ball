
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var paper;
var ground;

function preload()
{
	
}

function setup() {
	createCanvas(1000, 700);

	box1=createSprite(width/1.3,height-20,225,20);
	box1.shapeColor=color("red");

	box2=createSprite(width/1.5,height-60,20,100);
	box2.shapeColor=color("red");

	box3=createSprite(width/1.1,height-60, 20,100);
	box3.shapeColor=("red");


	
	
	
	
	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	paper=new Paper(200,100,30);
	ground=new Ground(500,height,1000,20)
	

	Engine.run(engine);
  
}


function draw() {
 
  background(0);
  Engine.update(engine);
  
  paper.display();
  ground.display();

keyPressed();

  drawSprites();
 
}

function keyPressed(){
	if (keyCode===UP_ARROW){
Matter.Body.applyForce(paper.body,paper.body.position,{x:15,y:-15})
	}
}

