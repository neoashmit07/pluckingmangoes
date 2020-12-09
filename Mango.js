class Mango{
    constructor(x,y){
        var options={
            isStatic:false,
            restitution:0,
            friction:1,
            //density:1.2
        }

        this.body = Bodies.circle(x,y,30,options);
        //this.width= width;
        //this.height= height;
        this.image = loadImage("mango.png");
        World.add(world,this.body);
    }

    display(){
        ellipseMode(RADIUS);
        //fill("red");
        var pos= this.body.position;
        ellipse(pos.x,pos.y,30,30);
        imageMode(CENTER);
        image(this.image,0,0,30,30)
    }
}