class Pickaxe {
    constructor(x, y) {
      var options = {
        'restitution':0.8,
        'friction':1.0,
        'density':1.0
      }
      this.image=loadImage("MyGame/Pickaxe.png")
      this.body = Bodies.circle(x, y, 50, options);
      this.r=50
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      push();
      imageMode(RADIUS);
      
      image(this.image,pos.x,pos.y,this.r,this.r);
      pop();
    }
}