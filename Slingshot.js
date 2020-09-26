class Slingshot{
    constructor(bodyA,pointB){
        var options ={
            bodyA: bodyA,
            pointB: pointB,
            length: 10,
            stiffness: 0.3
        }
        this.slingshot = Constraint.create(options);
        World.add(world, this.slingshot);
    }
    display(){
        if(this.slingshot.bodyA){
        var startPoint = this.slingshot.bodyA.position;
        var endPoint = this.slingshot.pointB;
        line(startPoint.x, startPoint.y, endPoint.x, endPoint.y);
        }
    }
    fly(){
        this.slingshot.bodyA = null;
    }
}