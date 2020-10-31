class Bird extends BaseClass {
  constructor(x,y){
    super(x,y,50,50);
    this.image = loadImage("sprites/bird.png");
    this.smokeImage= loadImage("sprites/smoke.png");
    this.birdTraces= []
  }

  display() {
    //this.body.position.x = mouseX;
    //this.body.position.y = mouseY;
   
    
    if(this.body.position.x>200&& this.body.velocity.x>10){
      var position=[this.body.position.x, this.body.position.y];
      this.birdTraces.push(position);
    }
    super.display();
    for(var i=0; i<this.birdTraces.length; i++){
      image(this.smokeImage,this.birdTraces[i][0],this.birdTraces[i][1]);
     }
  }
  
}
