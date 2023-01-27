// * GLOBAL VARIABLES
const startBtnDOM = document.querySelector("#start-btn");
const restartBtnDOM = document.querySelector("#restart-btn");
const canvas = document.querySelector("#my-canvas");
const splashScreenDOM = document.querySelector("#splash-screen");
const pauseBtnDOM = document.querySelector("#pause");
const gameoverScreenDOM = document.querySelector('#gameover-screen')
const context = canvas.getContext("2d");
let game; // EXPOSING game to rest of functionality

// * STATE MANAGEMENT FUNCTIONS
const startGame = () => {
  //   1 change screen
  splashScreenDOM.style.display = "none";
  gameoverScreenDOM.style.display = "none";
  canvas.style.display = "block";

  //   2 create game
  game = new Game(); // ACCESS from GLOBAL SCOPE

  //   3 init game
  game.gameLoop();
  // console.log("EXECUTING");
};

const restartGame = () => {
  gameoverScreenDOM.style.display = "none";
  startGame();
}

const handleMovePollito = event => {
  if (event.code === "Space") {
    game.pollito.jumpPollito();
  }
};
// * ADD EVENT LISTENERS
startBtnDOM.addEventListener("click", startGame);
restartBtnDOM.addEventListener("click", restartGame);

window.addEventListener("keydown", handleMovePollito);

pauseBtnDOM.addEventListener("click", () => {
  if (game.isGameOn === true) {
    game.isGameOn = false;
  } else {
    game.isGameOn = true;
    game.gameLoop(); // SINCE WE DON'T startGame, the INSTANCE of new Game still EXISTS and KEEPS its STATE on its properties, so we just RETRIEVE ALL OF IT by  gameLoop()
  }
});
