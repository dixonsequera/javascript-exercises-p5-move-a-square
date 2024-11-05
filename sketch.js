let x = 200;
let y = 200;
let size = 50;
let velocityY = 0;
let gravity = 0.5;
let isJumping = false;
let jumpCount = 0;

let obstacleX = 150;
let obstacleY = 300;
let obstacleWidth = 100;
let obstacleHeight = 20;

function setup() {
  let canvas = createCanvas(400, 400);
  canvas.parent("game-container");

  background(220);
}

function draw() {
  background(220);

  fill(255, 0, 0);
  rect(x, y, size, size);

  fill(0, 0, 255);
  rect(obstacleX, obstacleY, obstacleWidth, obstacleHeight);

  if (y + size < height) {
    y += velocityY;
    velocityY += gravity;
  } else {
    y = height - size;
    isJumping = false;
  }

  if (
    x < obstacleX + obstacleWidth &&
    x + size > obstacleX &&
    y + size > obstacleY &&
    y < obstacleY + obstacleHeight
  ) {
    velocityY = 0;
    y = obstacleY - size;
    isJumping = false;
  }
}

function keyPressed() {
  if (keyCode === LEFT_ARROW) {
    x -= 5;
  } else if (keyCode === RIGHT_ARROW) {
    x += 5;
  }

  if (key === " " && !isJumping) {
    velocityY = -10;
    isJumping = true;
    jumpCount++;
    document.getElementById("jump-count").innerText = jumpCount;
  }
}
