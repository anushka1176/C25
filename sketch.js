
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;


var ground;
var paper,dustbin;
var paperImage,dustbinImage;

function preload()
{
	paperImage = loadImage("Sprites/paper.png");

	dustbinImage = loadImage("Sprites/dustbin.png");
	
}

function setup() {
	createCanvas(1600, 800);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	paper=new Paper(200,200,15);
	dustbin=new Dustbin(1300,760,300,400);
	ground= new Ground(width/2,800,2500,30);
    

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(240,200,150);
Engine.update(engine);
  paper.display();
  
  dustbin.display();
 
  ground.display();


 
  drawSprites();
 
}


function keyPressed(){
	if  (keyCode === UP_ARROW) {
		Matter.Body.applyForce(paper.body,paper.body.position,{x:55,y:-55});
	}
}
