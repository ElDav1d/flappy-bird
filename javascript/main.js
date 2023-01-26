// * GLOBAL VARIABLES
const startBtnDOM = document.querySelector("#start-btn");
const canvas = document.querySelector("#my-canvas");
const splashScreenDOM = document.querySelector("#splash-screen");
const context = canvas.getContext('2d');

// * STATE MANAGEMENT FUNCTIONS
const startGame = () => {
  

  //   1 change screen
  splashScreenDOM.style.display = "none";
  canvas.style.display = "block";

  //   2 create game
  const game = new Game();

  //   3 init game
  game.gameLoop();
  // console.log("EXECUTING");
};

// * ADD EVENT LISTENERS
startBtnDOM.addEventListener("click", startGame);
