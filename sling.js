class sling {
    constructor(bodyA,pointB){
        var options={
            bodyA:bodyA,
            pointB:pointB,
            length:10,
            stiffness:1.2,
        }
        
        console.log(bodyA)
        this.pointB=pointB
       
        this.sling=Constraint.create(options)
        World.add(world,this.sling)
        console.log(this.sling)
        
    }
    display(){
        var pointA=this.sling.bodyA.position;
        var pointaB=this.pointB;
        push ()
        strokeWeight (5)
        stroke ("green")
        line (pointA.x,pointA.y,pointaB.x,pointaB.y)
        pop ()
      
    }
   
}