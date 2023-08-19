let actorsX = [150, 422];
let actorsY = [370, 370];
let moveUp = [87, 38];
let moveDown = [83, 40];

let hit = false;

let score = [0, 0];
let scoresX = [130, 470];
let scoresY = [26, 26];

function showActor() {
  for (let a = 0; a < actorsImg.length; a++) {
    image(actorsImg[a], actorsX[a], actorsY[a], 28, 24);
  }
}

function moveActor() {
  for (let a = 0; a < actorsImg.length; a++) {
    if (keyIsDown(moveUp[a])) {
      actorsY[a] -= 3;
    }
    if (keyIsDown(moveDown[a])) {
      actorsY[a] += 3;
    }
    actorsY[a] = constrain(actorsY[a], 5, 370);
  }
}

function verifyCollisionCar() {
  myCollision();
  oponentCollision();
}

function showScore() {
  textAlign(CENTER);
  textSize(22);
  textStyle(BOLD);
  fill(102, 255, 178);
  for (let a =0; a < actorsImg.length; a++) {
    text(score[a], scoresX[a], scoresY[a]);
  }
}

function scorePoint() {
  for (let a =0; a < actorsImg.length; a++) {
    if (actorsY[a] < 20) {
      score[a] += 1;
      pointSfx.play();
      actorsY[a] = 370;
    }
  }
}

function myCollision() {
  for (let i = 0; i < carsImg.length; i++) {
    if (hit = collideRectRect(carsX[i], carsY[i], carWidth, carHeight, actorsX[0], actorsY[0], 22, 28)) {
      actorsY[0] = 370;
      hitSfx.play();
      if (score[0] > 0) {
        score[0] -= 1;
      }
    }
  }
}

function oponentCollision() {
  for (let i = 0; i < carsImg.length; i++) {
    if (hit = collideRectRect(carsX[i], carsY[i], carWidth, carHeight, actorsX[1], actorsY[1], 22, 28)) {
      actorsY[1] = 370;
      hitSfx.play();
      if (score[1] > 0) {
        score[1] -= 1;
      }
    }
  }
}