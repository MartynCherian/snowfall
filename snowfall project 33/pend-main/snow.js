class Snow{
    constructor(x, y) {
        var options = {
            'restitution':0.8,
            'friction':0.5,
            'density':1.0
        }
        this.body = Bodies.rectangle(x, y, 20, 20, options);
        this.width = 20;
        this.height = 20;
        this.image = loadImage("snow5.webp");
        World.add(world, this.body);
      }
      display(){
        //var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
    
        imageMode(CENTER);
        image(this.image, 0, 0,20, 20);
        pop();
      }
      update(){
        if (this.body.position.y>height){
            Matter.Body.setPosition(this.body,{x:random(0,800),y:random(0,400)})
        }
    }
}