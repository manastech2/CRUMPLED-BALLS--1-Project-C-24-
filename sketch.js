var rect1, rect2, rect3
var ball
var ground



const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{

	
	
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

		
	var ballOptions ={
		isStatic: false,
		restitution: 0.3,
		friction:0.5,
		density:1.2,
	 }

	
	 ball = Bodies.circle(100,635,20,ballOptions)
	 World.add(world,ball)
	
	var options ={
		isStatic: true
	 }
	
	ground=Bodies.rectangle(400, 660, 800,10,options);
	World.add(world,ground)




	rect1=Bodies.rectangle(600,640,200,20,options)
	rect1.shapeColor=color("white")
	World.add(world,rect1)
	rect2=Bodies.rectangle(500,600,20,100,options)
	rect2.shapeColor=color("white")
	World.add(world,rect2)
	rect3=Bodies.rectangle(690,600,20,100,options)
	rect3.shapeColor=color("white")
	World.add(world,rect3)


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  fill("red")
  ellipseMode(RADIUS)
  ellipse(ball.position.x,ball.position.y,20,20)
  fill("yellow")

  rectMode(CENTER)
  rect(ground.position.x,ground.position.y, 800,10)

  fill("white")

  rectMode(CENTER)
  rect(rect1.position.x,rect1.position.y, 200,20)

  rectMode(CENTER)
  rect(rect2.position.x,rect2.position.y, 20,100)

  rectMode(CENTER)
  rect(rect3.position.x,rect3.position.y, 20,100)
  drawSprites() ;
 
}
 function keyPressed(){
	 if(keyCode===UP_ARROW){
		 Matter.Body.applyForce(ball,ball.position,{x:55, y:-55})
	 }
	 
 }


