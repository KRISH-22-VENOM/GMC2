let nodeCollection = [];
let totalNodes = 10;

function setup() {
  createCanvas(400, 400);
  background(220);
  frameRate(3);
  
  for(let a=0; a<totalNodes; a++) {
    nodeCollection.push(new Traveller(random(400), random(400)));
  }
}

function draw() {
  for(let a=0; a<totalNodes; a++) {
    nodeCollection[a].walk();
  }
}