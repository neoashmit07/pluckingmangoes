class Stone{
    constructor(x,y,width,height){
        var options={
            isStatic:false,
            restitution:0,
            friction:1,
            density:1.2
        }

        this.body = Bodies.rectangle(x,y,width,height,options);
        this.width= width;
        this.height= height;
        this.image = loadImage("stone.png");
        World.add(world,this.body);
    }

    display(){
        rectMode(CENTER);
        //fill("red");
        var pos= this.body.position;
        rect(pos.x,pos.y,this.width,this.height);
        imageMode(CENTER);
        image(this.image,0,0,this.width,this.height)
    }
}