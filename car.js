//Y = 525
let carsX = [650, 650, 650, 650, 650, 650];
let carsY = [41, 97, 150, 211, 263, 319];
let carsSpeed = [4, 3.2, 2.7, 5, 2.5, 3.5];
let carWidth = 72;
let carHeight = 39;

function showCar() {
  for (let i = 0; i < carsImg.length; i++) {
    image(carsImg[i], carsX[i], carsY[i], carWidth, carHeight);
  }
}

function moveCar() {
  for (let i = 0; i < carsImg.length; i++) {
    carsX[i] -= carsSpeed[i];
  }
}

function returnCarInitialPosition() {
  for (let i = 0; i < carsImg.length; i++) {
    if (pastScreen(carsX[i])) {
      carsX[i] = 650;
    }
  }
}

function pastScreen(x) {
  return x < -carWidth;
}