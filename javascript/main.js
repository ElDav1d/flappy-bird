// * GLOBAL VARIABLES
const startBtnDOM = document.querySelector("#start-btn");
const canvas = document.querySelector("#my-canvas");
const splashScreenDOM = document.querySelector("#splash-screen");

// * STATE MANAGEMENT FUNCTIONS
function startGame() {
  console.log("EXECUTING");

//   1 change screen
splashScreenDOM.style.display = 'none'
canvas.style.display = 'block'
//   2 create game
//   3 init game
}

// * ADD EVENT LISTENERS
startBtnDOM.addEventListener("click", startGame);
