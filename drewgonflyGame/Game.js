import Board from "./Board";
import Avatar from "./models/Avatar";

class Game {
    constructor(canvas, ctx){
        this.canvas = canvas;
        this.ctx = ctx;
        this.board;
        this.avImg = new Image(40, 40);
        this.avImg.src = './images/Avatar.gif';
        this.p1;
    }

    initialize() {
        this.board = new Board(this.canvas.width, this.canvas.height, this.ctx);
        this.board.fillTileTerrain();
        let avatarSeed = Math.floor(Math.random()*this.board.tiles.length);
        this.p1 = new Avatar(this.avImg,this.board.tiles[avatarSeed], 40, this.board.tiles);
    }

    play() {
        this.board.drawTiles(this.ctx);
        this.p1.draw(this.ctx);


        window.requestAnimationFrame(this.play.bind(this));
    }

} export default Game;