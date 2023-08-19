let actorX = 150;
let actorY = 370;

let hit = false;

let myScore = 0;

function showActor() {
  image(actorImg, actorX, actorY, 28, 24);
}

function moveActor() {
  if (keyIsDown(87)) {
    actorY -= 3;
  }
  if (keyIsDown(83)) {
    actorY += 3;
  }
  actorY = constrain(actorY, 5, 371);
}

function verifyCollisionCar() {
  for (let i = 0; i < carsImg.length; i++) {
    hit = collideRectRect(carsX[i], carsY[i], carWidth, carHeight, actorX, actorY, 22, 28);
    if (hit) {
      returnActorInitialPosition();
      hitSfx.play();
      if (scoreMoreThanZero()) {
        myScore -= 1;
      }
    }
  }
}

function returnActorInitialPosition() {
  actorY = 370;
}

function showScore() {
  textAlign(CENTER);
  textSize(22);
  textStyle(BOLD);
  fill(102, 255, 178);
  text(myScore, 130, 26);
}

function scorePoint() {
  if (actorY < 20) {
    myScore += 1;
    pointSfx.play();
    returnActorInitialPosition();
  }
}

function scoreMoreThanZero() {
  return myScore > 0;
}