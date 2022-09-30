import Board from "./Board";
import Avatar from "./models/Avatar";
import Dragon from "./models/Dragon";

class Game {
    constructor(canvas, ctx){
        this.canvas = canvas;
        this.ctx = ctx;
        this.board;
        this.avImg = new Image(40, 40);
        this.avImg.src = './images/Avatar.gif';
        this.dragonImg = new Image(40,40);
        this.dragonImg.src = './images/Dragon.gif';
        this.p1;
        this.dragons = [];
    }

    initialize() {
        //initializing the game board and filling it with its unique geographies.
        this.board = new Board(this.canvas.width, this.canvas.height, this.ctx);
        this.board.fillTileTerrain();

        //creating a starting point for our avatar that is always on grass.
        let avatarSeed;
        while (true) {
            avatarSeed = Math.floor(Math.random()*this.board.tiles.length);
            if(this.board.tiles[avatarSeed].terrain == 'grass') break;
        }
        //initializing player 1 with their avatar (and starting point on the map)
        this.p1 = new Avatar(this.avImg,this.board.tiles[avatarSeed], 40, this.board.tiles);

        //creating 2 - 5 dragons and placing them on thier starting points (mountains).
        const numDragons = Math.floor(Math.random()*4 + 2);
        for (let i = 0; i < numDragons; i++){
            let dragonSeed;
            while (true) {
                dragonSeed = Math.floor(Math.random()*this.board.tiles.length);
                if(this.board.tiles[dragonSeed].terrain == 'mountain') break;
            }
            this.dragons.push(new Dragon(this.dragonImg, this.board.tiles[dragonSeed], 40, 0,0, this.board.tiles))
        }
    }

    play() {
        this.ctx.clearRect(0,0,this.canvas.width,this.canvas.height);
        this.board.drawTiles(this.ctx);
        this.p1.draw(this.ctx);
        this.dragons.forEach((dragon) => {
            dragon.draw(this.ctx);
            //dragon.move(this.canvas.width, this.canvas.height);
        })


        window.requestAnimationFrame(this.play.bind(this));
    }

} export default Game;