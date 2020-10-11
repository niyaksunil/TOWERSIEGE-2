// created the constant variables
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

// created the variables
var ground;
var stand1,stand2;
var block1,block2,block3,block4,block5,block6,block7,block8,block9,block10,block11,block12,block13,
block14,block15,block16;
var block01,block02,block03,block04,block05,block06,block07;
var polygon;

function setup(){
  createCanvas(948,600);
  
// created the engine and the world
  engine = Engine.create();
	world = engine.world;

// created the ground and the stands 
  ground = new Ground(474,592,948,20);
  stand1 = new Ground(378,389,307,10);
  stand2 = new Ground(769,220,200,10);

// created the blocks 
  block1 = new Box(330,253,30,40);
  block2 = new Box(360,253,30,40);
  block3 = new Box(390,253,30,40);
  block4 = new Box(420,253,30,40);
  block5 = new Box(450,253,30,40);
  block6 = new Box(480,253,30,40);
  block7 = new Box(300,253,30,40);

  block8 = new Box(330,195,30,40);
  block9 = new Box(360,195,30,40);
  block10 = new Box(390,195,30,40);
  block11 = new Box(420,195,30,40);
  block12 = new Box(450,195,30,40);

  block13 = new Box(360,311,30,40);
  block14 = new Box(390,311,30,40);
  block15 = new Box(420,311,30,40);

  block16 = new Box(390,369,30,40);

  block01 = new Box(730,188,30,40);
  block02 = new Box(760,188,30,40);
  block03 = new Box(790,188,30,40);
  block04 = new Box(820,188,30,40);

  block05 = new Box(760,130,30,40);
  block06 = new Box(790,130,30,40);

  block07 = new Box(775,72,30,40);

// created the polygon and chain
  polygon = new Polygon(146,195,24);
	chain = new SlingShot(polygon.body,{x:146,y:195});

  Engine.run(engine);
  
}

function draw() {
  background(255,185,151);  

// displaying the variables
  ground.display();
  stand1.display();
  stand2.display();
  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  block7.display();
  block8.display();
  block9.display();
  block10.display();
  block11.display();
  block12.display();
  block13.display();
  block14.display();
  block15.display();
  block16.display();
  block01.display();
  block02.display();
  block03.display();
  block04.display();
  block05.display();
  block06.display();
  block07.display();
  polygon.display();
  chain.display();

  drawSprites();
}

// created the function mouseDragged
function mouseDragged(){
	
  Matter.Body.setPosition(polygon.body, {x:mouseX,y:mouseY});

}
  
// created the function mouseReleased
function mouseReleased(){

  chain.fly(); 

}

// created the function keyPressed
function keyPressed(){
  if(keyCode === 32 ){
    Matter.Body.setPosition(polygon.body,{x:146,y:195});
    chain.attach(polygon.body);
  }
} 