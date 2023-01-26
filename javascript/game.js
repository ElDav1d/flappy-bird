class Game {
  constructor() {
    this.bg = new Image();
    this.bg.src = "./images/bg.png";    
  }

  gameLoop = () => {
    
    // 1 clean canvas
    // 2 element motion and action
    // 3 element drawing
    context.drawImage(this.bg, 0, 0, canvas.width, canvas.height);
    
    // 4 recursion and control
    requestAnimationFrame(this.gameLoop)
  };
}
