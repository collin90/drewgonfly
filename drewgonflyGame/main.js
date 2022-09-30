import './style.css'
import Game from "./Game";

//initializing the canvas and context for the game.
const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext("2d");

//initializing and starting a new game
const game = new Game(canvas, ctx);
game.initialize();
game.play();


