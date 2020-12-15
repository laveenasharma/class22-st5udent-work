const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;


var myEngine,myWorld;
var ground;


function setup() {
  createCanvas(400,400);
myEngine=Engine.create();
myWorld=myEngine.world;
var b_opt={
  isStatic:true
}
ground=Bodies.rectangle(200,height-10,400,20,b_opt);
World.add(myWorld,ground);
console.log(ground);
}

function draw() {
  background("lightblue");  
  Engine.update(myEngine);
  fill("brown");
 rectMode(CENTER);
rect(ground.position.x,ground.position.y,400,20);

}