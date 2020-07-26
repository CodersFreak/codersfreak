let snake = document.getElementById("X");
let fruit = document.getElementById("fruit");
let posX = 0,
  posY = 0;

let dir = 0;
let box = document.getElementById("box");
document.onkeypress = function (e) {
  e = e || window.event;
  console.log(e.key);
  if (e.key == "w") dir = 1;
  else if (e.key == "s") dir = 2;
  else if (e.key == "a") dir = 3;
  else if (e.key == "d") dir = 4;
  else console.log(cool);
};

let Play = function () {
  snake.style.left = posX + "px";
  snake.style.top = posY + "px";
  if (dir == 1) posY -= 20;
  else if (dir == 2) posY += 20;
  else if (dir == 3) posX -= 20;
  else if (dir == 4) posX += 20;
  else posX += 20;
};
let t = setInterval(Play, 100);
