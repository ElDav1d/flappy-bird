class Game {
  constructor() {
    this.bg = new Image();
    this.bg.src = "./images/bg.png";

    this.pollito = new Pollito();

    this.tubosArray = [];
    this.frames = 1; // CONTROL PASSED FRAMES
    this.tuboSeparation = 300;
    this.tuboYPosFactor = -100;

    this.isGameOn = true;
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
    const hadPassed2Seconds = this.frames % 120 === 0; // if 1 fps

    if (this.tubosArray.length === 0 || hadPassed2Seconds) {
      const randomPosY = Math.random() * this.tuboYPosFactor; //negative en order to move outside Y
      const tuboDeArriba = new Tubo(randomPosY, true);
      this.tubosArray.push(tuboDeArriba);

      const tuboDeAbajo = new Tubo(tuboDeArriba.y + this.tuboSeparation, false);
      this.tubosArray.push(tuboDeAbajo);
    }

  };
  
  // optimise remove out of screen elements from array
  
  removeTubes = () => {
    if (this.tubosArray[0].x < 0 + this.tubosArray[0].w < 0) {
      this.tubosArray.shift();
    }
  };

  // colisiones con tubos
  checkPollitoCollisionTubo = () => {
    this.tubosArray.forEach(tubo => {
      // compara si cada tubo colisiona con pollito
      if (
        tubo.x < this.pollito.x + this.pollito.w &&
        tubo.x + tubo.w > this.pollito.x &&
        tubo.y < this.pollito.y + this.pollito.h &&
        tubo.h + tubo.y > this.pollito.y
      ) {
        // Collision detected!
        this.gameOver();
      }
    });
  };

  checkPollitoCollisionSuelo = () => {
    const isOnFloor =  this.pollito.y + this.pollito.h > canvas.height;

    if (isOnFloor) {
      this.gameOver();
    }
  };

  // gameOver => enviar a la pantalla final
  gameOver = () => {
    this.isGameOn = false;
    setTimeout(() => {
      canvas.style.display = "none";
      
      gameoverScreenDOM.style.display = "flex";
    }, 1000)
  };

  
  // BONUS
  // 1 colision suelo
  // 2 botón de pausa
  // 3 reestart
  // 4 optimize arrays for out of screen el

  // 5 puntuación
  // 6 vidas => sistema de respawn
  // 7 dificultad
  // 8 cambio de dirección => animaciones

  gameLoop = () => {
    this.frames++;
    // 1 clean canvas

    // 2 element motion and action
    this.pollito.gravityPollito();
    this.tubosAparecen();
    this.tubosArray.forEach(tubo => {
      tubo.moveTubo(); //separating draw and move => GETTING 2 Tubos SIMULTANEOUSLY
    });
    this.checkPollitoCollisionTubo();
    this.checkPollitoCollisionSuelo();
    this.removeTubes();

    // 3 element drawing
    this.drawBg(); //CARE ABOUT DRAWING ORDER!! => OVERLAPS
    this.pollito.drawPollito();
    this.tubosArray.forEach(tubo => {
      tubo.drawTubo(); //separating draw and move => GETTING 2 Tubos SIMULTANEOUSLY
    });

    // 4 recursion and control
    if (this.isGameOn) {
      requestAnimationFrame(this.gameLoop);
    }
  };
}
