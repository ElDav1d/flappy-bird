class Pollito {
  constructor() {
    this.x = 50;
    this.y = 50;
    this.h = 30;
    this.w = 30;
    this.speed = 2;
    this.image = new Image();
    this.image.src = "./images/flappy.png";
  }

  drawPollito = () => {
    context.drawImage(this.image, this.x, this.y, this.w, this.h);
  };

  // gravedad
  // subir
}
