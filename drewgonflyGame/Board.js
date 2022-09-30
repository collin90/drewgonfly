import Tile from "./Tile";

class Board {
    constructor(width, height) {
        this.width = width;
        this.height = height;
        this.tiles = [];
    }

    fillTileTerrain() {
        
        //initializing tiles.
        for (let r = 0; r < this.width; r += this.width/20) {
            //make 15 tiles in the y direction
            for (let c = 0; c < this.height; c += this.width/20) {
                let terrain = 'grass';
                this.tiles.push(new Tile(terrain, r, c, this.width/20))
            }
        }
        
        //creating array to hold mountain layout styles. can def be expanded.
        const mountainLayouts = [[0,1,16,31,46,61,62], [0,-1,-2,-3,-4,11], [0,15,30], [0,-1,-2], [0,15,14,13]]
        
        //perhaps, we want a 3-5 mountain ranges from the list of positions above.
        let mountainCount = Math.floor(Math.random()*3 + 3);
        let k = 0;
        //filling some tiles with mountain ranges.
        while (k < mountainCount) {
            //pick a random mountain range from the list
            let i = Math.floor(Math.random()*5);
            let mountainChoice = mountainLayouts[i];
            //pick a functional starting point (if it doesn't work, try a new starting point)
            while(true) {
                let p = Math.floor(Math.random()*300);

                if(i == 0) {
                    if(p%15 < 13 && p + 62 < this.tiles.length) {
                        mountainChoice.forEach((tileIndex) => {
                            console.log("MC" + mountainChoice)
                            console.log(tileIndex + p)
                            this.tiles[tileIndex + p].terrain = 'mountain'
                        })
                        break;
                    }
                }
                else if (i == 1){
                    if (p%15 > 4 && p + 11 < this.tiles.length) {
                        mountainChoice.forEach((tileIndex) => {
                            console.log("MC" + mountainChoice)
                            console.log(tileIndex + p)
                            this.tiles[tileIndex + p].terrain = 'mountain'
                        })
                        break;
                    }
                }
                else if (i == 2){
                    if (p + 30 < this.tiles.length) {
                        mountainChoice.forEach((tileIndex) => {
                            console.log("MC" + mountainChoice)
                            console.log(tileIndex + p)
                            this.tiles[tileIndex + p].terrain = 'mountain'
                        })
                        break;
                    }
                }
                else if (i == 3) {
                    if (p%15 > 2) {
                        mountainChoice.forEach((tileIndex) => {
                            console.log("MC" + mountainChoice)
                            console.log(tileIndex + p)
                            this.tiles[tileIndex + p].terrain = 'mountain'
                        })
                        break;
                    }
                }
                else {
                    if (p%15 > 3 && p+15 < this.tiles.length) {
                        mountainChoice.forEach((tileIndex) => {
                            console.log("MC" + mountainChoice)
                            console.log(tileIndex + p)
                            this.tiles[tileIndex + p].terrain = 'mountain'
                        })
                        break;
                    }
                }
            }
            k++;
        }

        //creating array to hold water tiles.  (need to make sure they don't overlap with mountain tiles...)


        //creating array to hold tree tiles. (need to make sure they don't overlap with mountain or water tiles.)



        


    }

    drawTiles(ctx) {
        this.tiles.forEach((tile) => {
            tile.drawTerrain(ctx);
        })
    }
} export default Board;