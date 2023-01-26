class Tubo {
  constructor(yPos, isImgUP) {
    // propiedades tubos
    this.x = canvas.width;
    this.y = yPos;
    this.h = 200;
    this.w = 50;
    this.speed = 2;
    this.image = new Image();

    if(isImgUP) {
        this.image.src = "./images/obstacle_top.png";
    } else {
        this.image.src = "./images/obstacle_bottom.png";
    }
  }

  drawTubo = () => {
    context.drawImage(this.image, this.x, this.y, this.w, this.h);
  };

  // tubos avanzan

  moveTubo = () => {
    this.x -= this.speed;
  };
}
