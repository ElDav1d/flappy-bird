class Game {
  constructor() {
    this.bg = new Image();
    this.bg.src = "./images/bg.png";

    this.pollito = new Pollito();

    this.tubosArray = [];
    this.frames = 1; // CONTROL PASSED FRAMES
    this.tuboSeparation = 300;
    this.tuboYPosFactor = -100;
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
        const randomPosY = Math.random() * (this.tuboYPosFactor) //negative en order to move ouside Y 
      const tuboDeArriba = new Tubo(randomPosY, true)
      this.tubosArray.push(tuboDeArriba);

      const tuboDeAbajo = new Tubo(tuboDeArriba.y + this.tuboSeparation, false);
      this.tubosArray.push(tuboDeAbajo);
    }

    // optimise remove out of screen elements from array
  };

  // colisiones con tubos
  checkPollitoCollision = () => {
    this.tubosArray.forEach (tubo => {
        // compara si cada tubo colisiona con pollito
        if (
            tubo.x < this.pollito.x + this.pollito.w &&
            tubo.x + tubo.w > this.pollito.x &&
            tubo.y < this.pollito.y + this.pollito.h &&
            tubo.h + tubo.y > this.pollito.y
          ) {
            // Collision detected!
            console.log('boooom');;
          }
    })
  }
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
      tubo.moveTubo(); //separating draw and move => GETTING 2 Tubos SIMULTANEOUSLY
    });
    this.checkPollitoCollision()

    // 3 element drawing
    this.drawBg(); //CARE ABOUT DRAWING ORDER!! => OVERLAPS
    this.pollito.drawPollito();
    this.tubosArray.forEach(tubo => {
      tubo.drawTubo(); //separating draw and move => GETTING 2 Tubos SIMULTANEOUSLY
    });

    // 4 recursion and control
    requestAnimationFrame(this.gameLoop);
  };
}
