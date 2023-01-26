// * GLOBAL VARIABLES
const startBtnDOM = document.querySelector("#start-btn");
const canvas = document.querySelector("#my-canvas");
const splashScreenDOM = document.querySelector("#splash-screen");
const context = canvas.getContext("2d");
let game; // EXPOSING game to rest of functionality

// * STATE MANAGEMENT FUNCTIONS
const startGame = () => {
  //   1 change screen
  splashScreenDOM.style.display = "none";
  canvas.style.display = "block";

  //   2 create game
  game = new Game(); // ACCESS from GLOBAL SCOPE

  //   3 init game
  game.gameLoop();
  // console.log("EXECUTING");
};

const handleMovePollito = event => {
  if (event.code === "Space") {
    game.pollito.jumpPollito();
  }
};
// * ADD EVENT LISTENERS
startBtnDOM.addEventListener("click", startGame);

window.addEventListener("keydown", handleMovePollito);
