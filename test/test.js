var assert = require('assert');
describe('drawBall()', function() {
  it('should call beginPath, arc, fill and closePath on context', function() {
    var contextDouble = {
      beginPath: function(){
        beginPathHasBeenCalled = true;
      },
      arc: function(x, y, ballRadius, 0, Math.PI*2){
        this.x = x;
        this.y = y;
        this.ballRadius = ballRadius;
      },
      fill: function(){
        fillHasBeenCalled = true;
      },
      closePath: function(){
        closePathHasBeenCalled = true;
      },
    };
    drawBall(0, 0, 10, contextDouble);
    assert.equal(beginPathHasBeenCalled, true);
    assert.equal(contextDouble.x, 0);
    assert.equal(contextDouble.y, 0);
    assert.equal(contextDouble.ballRadius, 10);
    assert.equal(contextDouble.fillStyle, "#0095DD");
    assert.equal(fillHasBeenCalled, true);
    assert.equal(closePathHasBeenCalled, true);
  });
});
