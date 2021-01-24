class Code{
    constructor(A,B){
        var options = {
            bodyA:A,
            pointB:B,
            stiffness : 0.4
        }
        this.body=Constraint.create(options) ;
        this.pointB = B;
        World.add(world,this.body)
    }

    fly(){
        this.body.bodyA=null
    }

    display(){
        if(this.body.bodyA){
        var posA = this.body.bodyA.position;
        var posB = this.pointB;

        line(posA.x,posA.y,posB.x,posB.y)}
    }
}