class Game {
  constructor() {
    this.bg = new Image();
    this.bg.src = "./images/bg.png";

    this.pollito = new Pollito();
    // this.tubos= new Tubo;
  }

  drawBg = () => {
    context.drawImage(this.bg, 0, 0, canvas.width, canvas.height);
  };

  // tubos avanzan
  // propiedades tubos:
  // pollito tiene efecto gravedad
  // pollito sube
  // propiedades pollito
  // colisiones con tubos
  // colision suelo
  // spawning tubos
  // gameOver => enviar a la pantalla final
  // botón de pausa

  // BONUS
  // puntuación
  // vidas => sistema de respawn
  // dificultad
  // cambio de dirección => animaciones

  gameLoop = () => {
    // 1 clean canvas
    // 2 element motion and action
    // 3 element drawing
    this.drawBg();
    this.pollito.drawPollito();

    
    // 4 recursion and control
    requestAnimationFrame(this.gameLoop);
  };
}
