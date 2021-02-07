class Hero{
    constructor(x, y, r) {
        var options = {
            density: 1,
            frictionAir: 1
        };
        this.x = x;
        this.y = y;
        this.r = r;
        this.image = loadImage("Superhero-02.png");
        this.body = Bodies.circle(this.x, this.y, (this.r)/2, options);
        World.add(world, this.body)
    }
    display(){
        var pos = this.body.position;
     //   this.addImage(this.image);
        push()
        ellipseMode(RADIUS);
     //   this.addImage(this.image);
        strokeWeight(0);
        stroke(0);
        ellipse(0,0,this.r);
        pop();
    }
}