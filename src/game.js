var Game = function(doc = document) {
  this.canvas = doc.getElementById("myCanvas");
  this.context = this.canvas.getContext("2d");
  this.ballX = this.canvas.width/2;
  this.ballY = 0;
  this.ballRadius = 10;
  this.balldX = 0;
  this.balldY = 2
};

Game.prototype.drawBlock = function(blockX, blockY, blockWidth, blockHeight){
  this.context.beginPath();
  this.context.rect(blockX, blockY, blockWidth, blockHeight);
  this.context.fillStyle = "#FF0000";
  this.context.fill();
  this.context.closePath();
};

Game.prototype.drawBackground = function() {
  this.drawBlock(50, 200, 400, 50);
  this.drawBlock(50, 50, 50, 200);
  this.drawBlock(400, 50, 50, 200);
};

Game.prototype.drawBall = function(ballX, ballY, ballRadius, context = this.ctx) {
  this.context.beginPath();
  this.context.arc(ballX, ballY, ballRadius, 0, Math.PI*2);
  this.context.fillStyle = "#0095DD";
  this.context.fill();
  this.context.closePath();
};

Game.prototype.draw = function() {
  this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
  this.drawBackground();
  this.drawBall(this.ballX, this.ballY, this.ballRadius);
  this.ballX += this.balldX;
  this.ballY += this.balldY;
  if(this.ballX + this.balldX > 400 || this.ballX + this.balldX < 100) {
    this.balldX = -this.balldX;
  }
  if(this.ballY + this.balldY > 200 || this.ballY + this.balldY < 0) {
      this.balldY = 0;
      this.balldX = 2;
  };
};

module.exports = Game;
  // setInterval(draw, 50);
