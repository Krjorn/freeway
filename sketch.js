function setup() {
  createCanvas(600, 400);
  soundtrack.loop();
}

function draw() {
  background(roadImg);
  
  showActor();
  moveActor();
  verifyCollisionCar();
  
  showCar();
  moveCar();
  returnCarInitialPosition();
  
  showScore();
  scorePoint();
}