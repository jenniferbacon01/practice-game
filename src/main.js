// function Game() {
  var canvas = document.getElementById("myCanvas");
  var ctx = canvas.getContext("2d");
  var x = canvas.width/2;
  var y = 0;
  var ballRadius = 10;
  var dx = 0;
  var dy = 2
  var backgroundBlocks = [];
  var blockCoords = [];
// };

  function drawBlock(x, y, width, height){
    ctx.beginPath();
    ctx.rect(x, y, width, height);
    ctx.fillStyle = "#FF0000";
    ctx.fill();
    ctx.closePath();
  }

  function drawBackground() {
    drawBlock(50, 200, 400, 50);
    drawBlock(50, 50, 50, 200);
    drawBlock(400, 50, 50, 200);
  }

  function drawBall(x, y, ballRadius, context = ctx) {
      context.beginPath();
      context.arc(x, y, ballRadius, 0, Math.PI*2);
      context.fillStyle = "#0095DD";
      context.fill();
      context.closePath();
  }

  function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawBackground();
    drawBall(x, y, ballRadius);
    x += dx;
    y += dy;
    if(x + dx > 400 || x + dx < 100) {
      dx = -dx;
    }
    if(y + dy > 200 || y + dy < 0) {
        dy = 0;
        dx = 2
    }
  }
  // setInterval(draw, 50);
