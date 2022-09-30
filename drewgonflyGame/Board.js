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

        //initializing counters for random numbers of mountain, ocean, and tree geographies.
        let m = 0;
        let w = 0;
        let t = 0;
        
        //creating array to hold mountain layout styles. can def be expanded.
        const mountainLayouts = [[0,1,16,31,46,61,62], [0,-1,-2,-3,-4,11], [0,15,30], [0,-1,-2], [0,15,14,13]]
        const mountainCount = Math.floor(Math.random()*6 + 4);

        //filling some tiles with mountain ranges.
        while (m < mountainCount) {
            //pick a random mountain range from the list
            let i = Math.floor(Math.random()*mountainLayouts.length);
            let mountainChoice = mountainLayouts[i];
            //pick a functional starting point (if it doesn't work, try a new starting point)
            while(true) {
                let p = Math.floor(Math.random()*300);
                if(i == 0) {
                    if(p%15 < 13 && p + 62 < this.tiles.length) {
                        mountainChoice.forEach((tileIndex) => {
                            this.tiles[tileIndex + p].terrain = 'mountain'
                        })
                        break;
                    }
                }
                else if (i == 1){
                    if (p%15 > 4 && p + 11 < this.tiles.length) {
                        mountainChoice.forEach((tileIndex) => {
                            this.tiles[tileIndex + p].terrain = 'mountain'
                        })
                        break;
                    }
                }
                else if (i == 2){
                    if (p + 30 < this.tiles.length) {
                        mountainChoice.forEach((tileIndex) => {
                            this.tiles[tileIndex + p].terrain = 'mountain'
                        })
                        break;
                    }
                }
                else if (i == 3) {
                    if (p%15 > 2) {
                        mountainChoice.forEach((tileIndex) => {
                            this.tiles[tileIndex + p].terrain = 'mountain'
                        })
                        break;
                    }
                }
                else {
                    if (p%15 > 3 && p+15 < this.tiles.length) {
                        mountainChoice.forEach((tileIndex) => {
                            this.tiles[tileIndex + p].terrain = 'mountain'
                        })
                        break;
                    }
                }
            }
            m++;
        }

        //creating array to hold water tiles.  (need to make sure they don't overlap with mountain tiles...)
        const waterLayouts = [[0,15,1,2,16,17,31,32], 
                            [0,1,2,-15,-14,-13,-29,-28], [0,-1,-2,15,14,13,29,28], 
                            [0,-1,-2,-15,-16,-17,-31,-32], 
                            [0,-1,-2,14,13,28], 
                            [0,1,2,16,17,32], 
                            [0,1,2,-14,-13,-28], 
                            [0,-1,-2,-16,-17,-32], 
                            [-1,1,15,-15,-14,-16,14,16]];
        const waterCount = Math.floor(Math.random()*5 + 4);
        //filling some tiles with oceans.
        while (w < waterCount) {
            //pick a random ocean layout from the list
            let i = Math.floor(Math.random()*waterLayouts.length);
            let waterChoice = waterLayouts[i];
            //pick a functional starting point to place the water layout. If it doesn't fit, try the same water choice again with a new starting point p.
            while(true){
                let p = Math.floor(Math.random()*300);
                if(i == 0){
                    if(p%15<13 && p+32<this.tiles.length) {
                        waterChoice.forEach((tileIndex) => {
                            this.tiles[tileIndex + p].terrain = 'water';
                        })
                        break;
                    }
                }

                else if (i==1){
                    if(p%15<13 && p+2<this.tiles.length && p-29>=0) {
                        waterChoice.forEach((tileIndex) => {
                            this.tiles[tileIndex + p].terrain = 'water';
                        })
                        break;
                    }
                }

                else if (i==2){
                    if(p%15>1 && p-2>=0 && p+28<this.tiles.length) {
                        waterChoice.forEach((tileIndex) => {
                            this.tiles[tileIndex + p].terrain = 'water';
                        })
                        break;
                    }
                }

                else if (i==3){
                    if(p%15>1, p-32 >=0){
                        waterChoice.forEach((tileIndex) => {
                            this.tiles[tileIndex + p].terrain = 'water';
                        })
                        break;
                    }
                }

                else if (i==4){
                    if(p%15>1 && p-2>=0 && p+28<this.tiles.length){
                        waterChoice.forEach((tileIndex) => {
                            this.tiles[tileIndex + p].terrain = 'water';
                        })
                        break;
                    }
                }

                else if (i==5){
                    if(p%15<13 && p+32 <this.tiles.length){
                        waterChoice.forEach((tileIndex) => {
                            this.tiles[tileIndex + p].terrain = 'water';
                        })
                        break;
                    }
                }

                else if (i==6){
                    if(p%15<13 && p+2<this.tiles.length && p-28>=0){
                        waterChoice.forEach((tileIndex) => {
                            this.tiles[tileIndex + p].terrain = 'water';
                        })
                        break;
                    }
                }

                else if (i==7){
                    if(p%15>1 && p-32>=0){
                        waterChoice.forEach((tileIndex) => {
                            this.tiles[tileIndex + p].terrain = 'water';
                        })
                        break;
                    }
                }

                else {
                    if(p%15>0 && p%15<14 && p-16>=0 && p+16<this.tiles.length){
                        waterChoice.forEach((tileIndex) => {
                            this.tiles[tileIndex + p].terrain = 'water';
                        })
                        break;
                    }
                }
            }
            w++;
        }

        //creating array to hold tree tiles. (need to make sure they don't overlap with mountain or water tiles.)
        const treeLayouts = [
            [0,1,2,14,15,16,17,30,31,32,33,45,46,47],
            [0,1,2,3,15,16,17,18,30,31,32,33,45,46,47,48],
            [0,1,15,16],
            [0,1,2,3,15,16,17,18,32,33,47,48,60,61,62,63,75,76,77,78],
            [0,1,2,3,4,15,16,17,18,19,30,31,33,34,45,46,48,49],
            [0,1,4,5,15,16,19,20,30,31,32,33,34,35,45,46,47,48,49,50],
            [0,1,2,3,15,16,17,30,31,45,46,47,60,61,75,76,77,90,91,92,93]
        ]
        const treeCount = Math.floor(Math.random()*5 + 3);
        //filling some tiles with forests.
        while (t < treeCount){
            //pick a random tree layout from the list
            let i = Math.floor(Math.random()*treeLayouts.length);
            let treeChoice = treeLayouts[i];
            //pick a functional starting point to place the water layout. If it doesn't fit, try the same water choice again with a new starting point p.
            while(true){
                let p = Math.floor(Math.random()*300);
                if(i == 0){
                    if(p%15>0 && p+47<this.tiles.length &&p%15<12) {
                        treeChoice.forEach((tileIndex) => {
                            this.tiles[tileIndex + p].terrain = 'tree';
                        })
                        break;
                    }
                }

                else if (i==1){
                    if(p%15<12 && p+48<this.tiles.length) {
                        treeChoice.forEach((tileIndex) => {
                            this.tiles[tileIndex + p].terrain = 'tree';
                        })
                        break;
                    }
                }

                else if (i==2){
                    if(p%15<14 && p+16<this.tiles.length) {
                        treeChoice.forEach((tileIndex) => {
                            this.tiles[tileIndex + p].terrain = 'tree';
                        })
                        break;
                    }
                }

                else if (i==3){
                    if(p%15<12 && p+78<this.tiles.length){
                        treeChoice.forEach((tileIndex) => {
                            this.tiles[tileIndex + p].terrain = 'tree';
                        })
                        break;
                    }
                }

                else if (i==4){
                    if(p%15<11 && p+49<this.tiles.length){
                        treeChoice.forEach((tileIndex) => {
                            this.tiles[tileIndex + p].terrain = 'tree';
                        })
                        break;
                    }
                }

                else if (i==5){
                    if(p%15<10 && p+50<this.tiles.length){
                        treeChoice.forEach((tileIndex) => {
                            this.tiles[tileIndex + p].terrain = 'tree';
                        })
                        break;
                    }
                }

                else {
                    if(p%15<12 && p+93<this.tiles.length){
                        treeChoice.forEach((tileIndex) => {
                            this.tiles[tileIndex + p].terrain = 'tree';
                        })
                        break;
                    }
                }
            }
            t++;
        }

    }

    drawTiles(ctx) {
        this.tiles.forEach((tile) => {
            tile.drawTerrain(ctx);
        })
    }
    
} export default Board;