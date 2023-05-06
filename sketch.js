let logo;
let gif = [];
let space;
let gifW, gifH;
let gridW = 0;
let div, div2;
let d;
let different = [
  "https://samesamebutdifferent-01.netlify.app/",
  "https://samesamebutdifferent-02.netlify.app/",
  "https://samesamebutdifferent-03.netlify.app/",
  "https://samesamebutdifferent-04.netlify.app/",
  "https://samesamebutdifferent-05.netlify.app/",
  "https://samesamebutdifferent-06.netlify.app/",
  "https://samesamebutdifferent-07.netlify.app/",
  "https://samesamebutdifferent-08.netlify.app/",
  "https://samesamebutdifferent-09.netlify.app/",
  "https://samesamebutdifferent-10.netlify.app/",
  "https://samesamebutdifferent-11.netlify.app/",
  "https://samesamebutdifferent-12.netlify.app/",
];
let txt =
  "These identities are from friends, people who are artists, designers, baristas, actors, home cooks, basketball fans, dog lovers, travelers, runners, wives & husbands that I was fortunate to meet.";

let words = [];

function preload() {
  logo = loadImage("logo/logo-ngang.png");
}

function setup() {
  createCanvas(windowWidth, windowHeight);

  background(0);
  // noLoop();
  div = createDiv("< click here to explore a random profile >");

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

  let opacity = map(mouseY, 0, height, 0.25, 1);
  div.style("font-size", float(width / 90) + "px");
  div.position(width / 2 - width / 7.2, width / 3 + height/3);
  div.style("z-index", 5);
  div.style("color", "#FFFFFF");
  div.style("font-family", "Noto Sans Mono");
  div.style("opacity", float(opacity));

  push();
  translate(width / 2 - 600/2, height / 2 + height / 3);
  drawDescription();
  pop();
}

function drawDescription() {
  textFont("Noto Sans Mono");
  textSize(14);
  textAlign(CENTER);
  fill(255, 125);
  text(txt, 0, 0, 600, 500);
}

function drawId() {
  let opacity = map(mouseY, height / 2, height, 1, 0.35);

  gifW = width / 4;
  gifH = width / 6;
  space = 0;
  for (let i = 0; i < 8; i++) {
    gif[i].style("opacity", float(opacity));
    gif[i].size(gifW, gifH);
    gif[i].position(gridW, space + width / 10.5);
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
    location.href = "https://samesame.netlify.app/";
  }
  if (d < 100) {
    location.reload();
    location.href = random(different)
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
