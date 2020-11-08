class Paper {
constructor(x,y,radius){
    var options={
    
        isStatic:false,
        resutitution:0.3,
        density:1.2
    }
    
       

        this.body = Bodies.circle(x, y, 15,options);
       this.radius=70;
        World.add(world, this.body);
      }
      display(){
        var pos = this.body.position;
        //pos.x = mouseX;
        //pos.y = mouseY;
        var angle = this.body.angle;
    
        push();
        translate(pos.x, pos.y);
        rotate(angle);
        strokeWeight(3);
        stroke('green')
        fill('green')
        rectMode(CENTER)
        circle(0, 0, this.radius);
        pop();
      }
    }
    