class Bob {
  constructor(x,y,radius) {
    var options ={
      isStatic: true
    }
    this.body = Bodies.circle(x,y,radius,options);
    World.add(world,this.body);

    this.radius = radius;
    World.add(world, this.body);
    
  }

  display() {
    var pos = this.body.position;
    var angle = this.body.position;
    push();
    translate(pos.x, pos.y);
    rotate(angle);
    fill(34,140,244);
    ellipseMode(RADIUS);
    ellipse(0,0,this.radius,this.radius);
    pop();
  }
}