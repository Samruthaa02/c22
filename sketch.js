const Engine = Matter.Engine;
const Bodies =Matter.Bodies;
const World = Matter.World;

var engineObj,engineWorld;
var ground,ball;


function setup() {
  createCanvas(800,400);
 

 engineObj=Engine.create();
 engineWorld=engineObj.world;

 ground=Bodies.rectangle(400,350,780,20);
 World.add(engineWorld,ground);
 console.log(ground);
}

function draw() {
  background(0);  
  rectMode(CENTER);
  rect(ground.position.x,ground.position.y,780,20);
}