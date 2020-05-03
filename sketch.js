const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

//var engine, world;
var box1;
var box2;
var box3;
var box4;
var box5;
var box6;
var box7;
var box8;
var box9;
var box10;
var box11;
var box12;
var box13;
var box14;

function setup() {
  createCanvas(800,400);

  engine = Engine.create();
  world =  Engine.world;

   box1 = new Box(80,300,25,300);
   box2 = new Box(720,300,25,300);

   box3 = new Box(400,350,60,100);

   box4 = new Box(135,380,80,300);
   box5 = new Box(665,380,80,300);

   box6 = new Box(230,315,96,350);
   box7 = new Box(570,315,96,350);

   box8 = new Box(325,330,60,140);
   box9 = new Box(475,330,60,140);

   box10 = new Box(400,195,230,200);

   box11 = new Box(230,120,50,30);
   box12 = new Box(570,120,50,30);

   box13 = new Box(30,360,60,100);
   box14 = new Box(770,360,60,100);


}

function draw() {
  background("blue");

  Engine.update(engine);
  
  text("x:"+mouseX,50,50); text("y:"+mouseY,50,70);

  strokeWeight(3);
  stroke("black");
  fill(255);  

  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  box6.display();
  box7.display();
  box8.display();
  box9.display();
  box10.display();
  box11.display();
  box12.display();
  box13.display();
  box14.display();

  triangle(60,143,100,143,80,93);
  triangle(700,143,740,143,720,93);
  triangle(281,90,400,0,518,90);

  drawSprites();
}