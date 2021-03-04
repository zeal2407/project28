class Launcher{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.004,
            length: 20
        }
    
        this.pointB = pointB
         this.sling = Constraint.create(options);
         World.add(world, this.sling);
    }

    fly(){
        this.sling.bodyA = null;
    }
    attach(body){
        this.sling.bodyA = body;
    }

    display(){

        //image(this.sling1,200,20);
        //image(this.sling2,170,20);
        if(this.sling.bodyA){
            var pointA = this.sling.bodyA.position;
            var pointB = this.pointB;
            
        strokeWeight(2);		
        line(pointA.x,pointA.y,pointB.x,pointB.y);
            push();
            stroke(48,22,8);
         pop();
        }
        }
    }