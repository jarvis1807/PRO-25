class Dustbin {
    constructor(x,y,width,height) {
      var options = {
          isStatic: true
      }
      this.dustbinleftbody = loadImage("dustbingreen.png");
      this.dustbinrightbody = loadImage("dustbingreen.png");
      this.dustbinbottombody = loadImage("dustbingreen.png");
      this.body = Bodies.rectangle(x,y,width,height,options);
      this.width = width;
      this.height = height;
      World.add(world, this.body);
    }
    display(){
      image(this.dustbinleftbody, 600,330 )
      image(this.dustbinrightbody, 800,330)
      image(this.dustbinbottombody, 700,375)
      
      var pos =this.body.position;
      rectMode(CENTER);
      fill("green");
      rect(pos.x, pos.y, this.width, this.height);
    }
  };