class Particles{
    constructor(x,y,r){
        var options={
            isStatic:false
        }
        this.r=15
        this.body=Bodies.circle(x,y,this.r,options)
        this.color=color(random(0,255),random(0,255),random(0,255))
        World.add(world,this.body)
    }
    display(){
        push();
        translate(this.body.position.x,this.body.position.y);
        rotate(this.body.angle);
        fill(this.color);
        ellipseMode(CENTER);
        ellipse(0,0,this.r,this.r);
        pop();
    }
    }
   