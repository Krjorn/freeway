let roadImg;
let actorImg;
let carImg;
let car2Img;
let car3Img;
let carsImg;

let soundtrack;
let hitSfx;
let pointSfx;

function preload() {
  roadImg = loadImage("img/estrada.png");
  actorImg = loadImage("img/ator-1.png");
  carImg = loadImage("img/carro-1.png");
  car2Img = loadImage("img/carro-2.png");
  car3Img = loadImage("img/carro-3.png");
  carsImg = [carImg, car2Img, car3Img, carImg, car2Img, car3Img];
  
  soundtrack = loadSound("sound/soundtrack.mp3");
  hitSfx = loadSound("sound/hit.mp3");
  pointSfx = loadSound("sound/point.mp3");
}