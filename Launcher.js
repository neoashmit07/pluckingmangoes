class Launcher{
    constructor(x,y,width,height){
        var options={
            isStatic:true
        }

        this.body = Bodies.rectangle(x,y,width,height,options);
        this.width= width;
        this.height= height;
        this.image = loadImage("boy.png");
        World.add(world,this.body);
    }

    display(){
        rectMode(CENTER);
        //fill("red");
        var pos= this.body.position;
        //translate(this.body.position.x, this.body.position.y);
       // rect(pos.x,pos.y,this.width,this.height);
        imageMode(CENTER);
        
        image(this.image,pos.x,pos.y,this.width,this.height);
    }
}