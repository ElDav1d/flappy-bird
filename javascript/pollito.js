class Pollito {
  constructor() {
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

  gravityPollito = () => {
    this.y += this.speed;
  };

  jumpPollito = () => {
    this.y -= this.jumpSpeed;
  };
}
