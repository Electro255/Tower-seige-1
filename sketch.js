const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var block1,block2,block3,block4,block5,block6,block7,block8,block9,block10,block11,block12,block13,block14,block15,block16;
var polygon, polygonImg;

function preload(){
imageMode(CENTRE);
image(polygon_Img,polygon.position.x,polygon.position.y,40,40);
    polygonImg = loadImage("polygon.png");
}

function setup(){

   //level one
   block1 = new Block(300,275,30,40);
   block2= new Block(330,275,30,40);
   block3 = new Block(360,275,30,40);
   block4 = new Block(390,275,30,40);
   block5 = new Block(420,275,30,40);
   block6 = new Block(450,275,30,40);
   block7 = new Block(480,275,30,40);
   
    //level two
    block8 = new Block(330,235,30,40);
    block9 = new Block(360,235,30,40);
    block10 = new Block(390,235,30,40);
    block11 = new Block(420,235,30,40);
    block12 = new Block(450,235,30,40);

    //level three
    block13 = new Block(360,195,30,40)
    block14 = new Block(390,195,30,40);
    block15 = new Block(420,195,30,40);

    //top
    block16 = new Block(390,155,30,40);
}

function draw(){

    polygon = Bodies.circle(50,200,20);
    World.add(world,polygon);

    Slingshot =new Slingshot(this.polygon,{x : 100, y : 200});
}
