// created the Box class
class Box {
  constructor(x,y,width,height) {
    var options = {
      'restitution':0.3,
      'friction':0.5,
      'density':0.5,
      isStatic:false
    }

// created the rectangle body
    this.body = Bodies.rectangle(x,y,width,height,options);
    this.width = width;
    this.height = height;
    this.color = Math.round(random(1,4));
    World.add(world, this.body);

  }

// displaying the function 
  display(){
    var pos =this.body.position;
    push();
    rectMode(CENTER);

// generate the random colours
    switch(this.color){
      case 1:
        fill(255,183,178);
        break;
      case 2:
        fill(255,218,193);
        break;
      case 3:
        fill(181,234,215);
        break;
      case 4:
        fill(199,206,234);
        break;
    }
    rect(pos.x, pos.y, this.width, this.height);
    pop();
  }

}