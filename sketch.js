const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var ground;
var box;
var log;
var pig, bird;

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;
    ground=new Ground(600,height,1200,20)   
 box1=new Box (700,320,70,70)
 box2= new Box (920,320,70,70)
 log1=new Log(810,260,300,PI/2)
 pig=new Pig(820,350)
 bird= new Bird(100,100)
 box3=new Box (700,240,70,70)
 box4= new Box (920,240,70,70)
 log2=new Log(810,180,300,PI/2)
 pig2=new Pig(820,220)
 box5= new Box (810,160,70,70)
 log3=new Log(760,120,150,PI/7)
 log4=new Log(860,120,150,-PI/7)
}

function draw(){
    background(0);
    Engine.update(engine);
    ground.display();
   box1.display();
   box2.display();
   log1.display();
   pig.display();
   bird.display();
   box3.display();
   box4.display();
   log2.display();
   pig2.display();
   box5.display();
   log3.display();
   log4.display();
}