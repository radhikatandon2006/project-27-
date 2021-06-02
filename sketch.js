 const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
//const Constraint = Matter.Constraint;

var engine, world, roof1; 
 var bobObject1, bobObject2, bobObject3, bobObject4;
 var bobObject5;
//var constrainedLog;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);

    engine = Engine.create();
    world = engine.world;

	//Create the Bodies Here.
	roof1 = new Roof(400,100,800,25);
  World.add(World, roof1); 

  // bobObject1 = new Bob(250,300);
  // bobObject2 = new Bob(300,300);
  // bobObject3 = new Bob(350,300);
  // bobObject4 = new Bob(400,300);
  // bobObject5 = new Bob(450,300);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("lightgrey");
  
  roof1.display();
 
  // bobObject1.display();
  // bobObject2.display();
  // bobObject3.display();
  //bobObject4.display();
 // bobObject5.display();
  



  drawSprites();
 
}



