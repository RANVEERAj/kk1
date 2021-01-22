class Ball {
constructor(x,y,r){
    var opts={
        isStatic:false
    }
 this.ball=Bodies.circle(x,y,r,opts)
 this.radius=r;
 World.add(world,this.ball)
 console.log(this.ball)

}
display(){
   
    ellipseMode(RADIUS)
    var past= this.ball.position;
    push ()
    stroke ("black")
    fill (121, 125, 132)
    ellipse(past.x,past.y,this.radius,this.radius)
    pop ()
}
}