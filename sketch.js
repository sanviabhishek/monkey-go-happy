
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const  Render= Matter.Render;
const Constraint= Matter.Constraint;

var bob1,bob2,bob3,bob4;
var engine,world;
var rope1,rope2,rope3,rope4;


function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground= new Roof(371,200,260,20);
	bob1=new Bob(280,500,60,60);
	bob2=new Bob(340,500,60,60);
	bob3=new Bob(400,500,60,60);
	bob4=new Bob(460,500,60,60);2
	rope1=new Rope(bob1.body,ground.body,-50*2, 0);
	rope2=new Rope(bob2.body,ground.body,-25*2, 0);
	rope3=new Rope(bob3.body,ground.body,0*2, 0);
    rope4=new Rope(bob4.body,ground.body,25*2, 0);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(255);
  
  
  drawSprites();
  ground.display();
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  mouseDragged();
}

function mouseDragged(){
	Matter.body.setPosition(bob1.body,{x:mouseX, y:mouseY});
}


