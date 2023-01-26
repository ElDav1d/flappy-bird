class Tubo {
  constructor() {
    // propiedades tubos
    this.x = canvas.width;
    this.y = 0;
    this.h = 200;
    this.w = 50;
    this.speed = 2;
    this.image = new Image();
    this.image.src = "./images/obstacle_top.png";
  }

  drawTubo = () => {
    context.drawImage(this.image, this.x, this.y, this.w, this.h);
  };

  // tubos avanzan

  moveTubo = () => {
    this.x -= this.speed;
  };
}
