class Pollito {
  constructor() {
    // propiedades pollito
    this.x = 50;
    this.y = 50;
    this.h = 35;
    this.w = 45;
    this.speed = 2;
    this.jumpSpeed = 50;
    this.image = new Image();
    this.image.src = "./images/flappy.png";
  }

  drawPollito = () => {
    context.drawImage(this.image, this.x, this.y, this.w, this.h);
  };

  // pollito tiene efecto gravedad

  gravityPollito = () => {
    const isTouchingCeil = this.y < 0;

    if (isTouchingCeil) {
      this.y = 0; //
    } else {
      this.y += this.speed;
    }
  };

  // pollito sube
  jumpPollito = () => {
    this.y -= this.jumpSpeed;
  };
}
