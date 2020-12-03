const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var engine;
var world;
var roof1;
var bob1,bob2,bob3,bob4,bob5;
var sli1,sli2,sli3,sli4,sli5;
function setup() {
	createCanvas(800,800);


	engine = Engine.create();
    world = engine.world;
  
bob1=new pendulum(200,450);
bob2=new pendulum(270,450);
bob3=new pendulum(340,450);
bob4=new pendulum(410,450);
bob5=new pendulum(480,450);
sli1=new Sling(bob1.body,{x:200,y:250});
sli2=new Sling(bob2.body,{x:270,y:250});
sli3=new Sling(bob3.body,{x:340,y:250});
sli4=new Sling(bob4.body,{x:410,y:250});
sli5=new Sling(bob5.body,{x:480,y:250});


    Engine.run(engine)
}
function draw(){
rectMode(CENTER);
background("pink");
Engine.update(engine);
//roof1.display();
bob1.display();
bob2.display();
bob3.display();
bob4.display();
bob5.display();
sli1.display();
sli2.display();
sli3.display();
sli4.display();
sli5.display();

}
function mouseDragged(){
    Matter.Body.setPosition(bob1.body,{x:mouseX,y:mouseY})
}

