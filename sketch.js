const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var engine, world;

var ball;
var groundObj;
var leftSide, rightSide;

function preload() {

}

function setup() {
	createCanvas(1200, 700);
	engine = Engine.create();
	world = engine.world;

	var ball_options = {
		isStatic: false,
		restitution: 0.3,
		density: 1.2,
		friction: 0
	}

	//Create the Bodies Here.
	ball = Bodies.circle(225, 10, 10, ball_options);
	World.add(world, ball);

	groundObj = new Ground(width / 2, 670, width, 20);
	leftSide = new Ground(1100, 600, 20, 120);
	rightSide = new Ground(750, 600, 20, 120);

	Engine.run(engine);

	ellipseMode(RADIUS);
}


function draw() {
	rectMode(CENTER);
	background(0);

	ellipse(ball.position.x, ball.position.y, 10);

	drawSprites();
	Engine.update(engine);

	groundObj.display();
	leftSide.display();
	rightSide.display();
}

function keyPressed() {
	if (keyCode == UP_ARROW) {
		Matter.Body.applyForce(ball, ball.position, {x: 15, y: -15});
	}
}



