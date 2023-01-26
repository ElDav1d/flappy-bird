class Game {
  constructor() {
    this.bg = new Image();
    this.bg.src = "./images/bg.png";

    this.pollito = new Pollito();

    this.tubosArray = [];
    this.frames = 1; // CONTROL PASSED FRAMES
  }

  drawBg = () => {
    context.drawImage(this.bg, 0, 0, canvas.width, canvas.height);
  };

  clearCanvas = () => {
    context.clearRect(0, 0, canvas.width, canvasheight);
  };

  // spawning tubos

  tubosAparecen = () => {
    // check for time since last element is added (VS use position on screen)
    const hadPassed2Seconds = this.frames % 120 === 0 // if 1 fps 

    if (this.tubosArray.length === 0 || hadPassed2Seconds) {
      const tuboParaAñadir = new Tubo();
      this.tubosArray.push(tuboParaAñadir);
    }
  };

  // colisiones con tubos
  // colision suelo
  // gameOver => enviar a la pantalla final
  // botón de pausa

  // BONUS
  // puntuación
  // vidas => sistema de respawn
  // dificultad
  // cambio de dirección => animaciones

  gameLoop = () => {
    this.frames++
    // 1 clean canvas

    // 2 element motion and action
    this.pollito.gravityPollito();
    this.tubosAparecen();
    this.tubosArray.forEach(tubo => {
      tubo.moveTubo();
    });

    // 3 element drawing
    this.drawBg(); //CARE ABOUT DRAWING ORDER!! => OVERLAPS
    this.pollito.drawPollito();
    this.tubosArray.forEach(tubo => {
      tubo.drawTubo();
    });

    // 4 recursion and control
    requestAnimationFrame(this.gameLoop);
  };
}
