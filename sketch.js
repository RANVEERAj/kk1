
const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Body=Matter.Body;
const Constraint = Matter.Constraint;


function setup(){
engine=Engine.create();
world=engine.world;

createCanvas(windowWidth,windowHeight)
ground1=new Ground(width/2,height-20,width,30)

ball1= new Ball(400,400,40)
console.log(ball1)

b1=new Block(700,100,60,60)
b2=new Block(700,100,60,60)
b3=new Block(700,100,60,60)
b4=new Block(700,100,60,60)
b5=new Block(700,100,60,60)
b6=new Block(700,100,60,60)
b7=new Block(700,100,60,60)
b8=new Block(700,100,60,60)
b9=new Block(700,100,60,60)

c1=new Block(900,100,60,60)
c2=new Block(900,100,60,60)
c3=new Block(900,100,60,60)
c4=new Block(900,100,60,60)
c5=new Block(900,100,60,60)
c6=new Block(900,100,60,60)
c7=new Block(900,100,60,60)

d1=new Block(1100,100,60,60)
d2=new Block(1100,100,60,60)
d3=new Block(1100,100,60,60)
d4=new Block(1100,100,60,60)
d5=new Block(1100,100,60,60)

rope1= new sling(ball1.body,{x:400,y:100})

}

function draw(){
  Engine.update(engine)

background("skyblue")
ground1.display()
ball1.display()
b1.display()
b2.display()
b3.display()
b4.display()
b5.display()
b6.display()
b7.display()
b8.display()
b9.display()

c1.display()
c2.display()
c3.display()
c4.display()
c5.display()
c6.display()
c7.display()

d1.display()
d2.display()
d3.display()
d4.display()
d5.display()
rope1.display()


}