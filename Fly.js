class Fly {
    construstor(bodyA,pointB) {
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            length: 200,
            stiffness: 1
        }
        this.pointB = pointB;
        this.rope = Constraint.create(options);
        World.add(world, this.body);
    }
    display(){
        push()
        stroke(0);
        strokeWeight(3)
        line(this.pointB.x, this.pointB.y, this.rope.bodyA.position.x, this.rope.bodyA.position.y);
        pop()
        }
}