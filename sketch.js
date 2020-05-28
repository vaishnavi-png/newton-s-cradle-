const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;

var engine,world;
var bobObject, rope;
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);
    engine = Engine.create();
	world = engine.world;

	ground = new Roof(400, 250, 500, 30 , {isStatic:true});

	bobObject1 = new Bob(280,500,30);
	bobObject2 = new Bob(340,500,30);
	bobObject3 = new Bob(400,500,30);
    bobObject4 = new Bob(460,500,30);
	bobObject5 = new Bob(520,500,30);

	rope1= new Rope(bobObject1.body, ground.body, -bobDiameter*2, 0);
	rope2 = new Rope(bobObject2.body, ground.body, -bobDiameter*2, 0);


	Engine.run(engine);
}

function draw() {
  rectMode(CENTER);
  background("grey");
  Matter.Engine.update(engine);

  ground.display();
  bobObject1.display();
  bobObject2.display();
  bobObject3.display();
  bobObject4.display();
  bobObject5.display();
  
  rope1.display();
  rope2.display();
  drawSprites(); 
}




