let logo;
let gif = [];
let space;
let gifW, gifH;
let gridW = 0;
let div, div2;
let d;
let different = [
  "https://en.wikipedia.org/wiki/Instant_noodles",
  "https://en.wikipedia.org/wiki/Ramen",
  "https://en.wikipedia.org/wiki/Soy_sauce",
  "https://en.wikipedia.org/wiki/Soybean",
  "https://en.wikipedia.org/wiki/Salt",
  "https://en.wikipedia.org/wiki/Seasoning",
  "https://en.wikipedia.org/wiki/Black_pepper",
  "https://en.wikipedia.org/wiki/Chili_pepper",
  "https://en.wikipedia.org/wiki/Spice",
  "https://en.wikipedia.org/wiki/Vanilla",
  "https://en.wikipedia.org/wiki/Caramel",
  "https://en.wikipedia.org/wiki/Cream",
];

function preload() {
  logo = loadImage("logo/logo-ngang.png");
}

function setup() {
  createCanvas(windowWidth, windowHeight);

  background(0);
  // noLoop();
  div = createDiv("< click to explore a random profile >");

  for (let i = 0; i < 8; i++) {
    gif[i] = createImg("gif/" + i + ".gif");
  }
}

function draw() {
  background(0);
  d = dist(mouseX, mouseY, windowWidth / 2, windowWidth / 2);
  if (mouseX > 0 && mouseX < width && mouseY > 0 && mouseY < width / 20) {
    cursor(HAND);
  } else if (d < 100) {
    cursor(HAND);
  } else {
    cursor(ARROW);
  }

  imageMode(CORNER);
  tint(255, map(mouseY, height / 4, height, 130, 255));
  image(logo, -width / 150, -width / 180, width + 20, width / 16);

  drawId();

  let opacity = map(mouseY, height / 4, height, 0.25, 1);
  div.style("font-size", float(width / 75) + "px");
  div.position(width / 2 - width / 7.5, width / 2);
  div.style("z-index", 5);
  div.style("color", "#FFFFFF");
  div.style("font-family", "Noto Sans Mono");
  div.style("opacity", float(opacity));
}

function drawId() {
  let opacity = map(mouseY, height / 2, height, 1, 0.35);

  gifW = width / 4;
  gifH = width / 6;
  space = 0;
  for (let i = 0; i < 8; i++) {
    gif[i].style("opacity", float(opacity));
    gif[i].size(gifW, gifH);
    gif[i].position(gridW, space + width / 9);
    gridW += gifW;

    if (gridW > gifW * 3) {
      gridW = 0;
      space += gifH;
    }
  }
}
function mousePressed() {
  if (mouseX > 0 && mouseX < width && mouseY > 0 && mouseY < width / 15) {
    location.reload();
    location.href = "https://editor.p5js.org/aj.nguyen93/full/JbzRKq2FS";
  }
  if (d < 100) {
    location.reload();
    location.href = random(different)
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
