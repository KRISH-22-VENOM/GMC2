class Traveller {
  constructor(x, y) {
    console.log("Hey wassup!!!");
    
    this.step = 5;
    this.sizes = [1,2,3,5,8,13,21,34];
    this.generation = 0;
    this.x = x;
    this.y = y;
    this.color = random(["red","rgb(232,75,102)","pink","rgb(160,92,160)","magenta","purple"]);
    
    this.walk();
  }
  
  walk() {
    stroke(this.color);
    let variationX = random([-10, 10]);
    let variationY = random([-10, 10]);
    
    strokeWeight(this.sizes[this.generation]);
    this.generation = (this.generation >= 100) ? 0 : this.generation + 1;
        
    this.x += this.step * variationX;
    this.y += this.step * variationY;
    
    point(this.x, this.y);
  }  
  
}