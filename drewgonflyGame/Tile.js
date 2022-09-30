
class Tile {
    constructor(terrain, x, y, size) {
        this.terrain = terrain;
        this.x = x;
        this.y = y;
        this.size = size;
    }

    //function to draw a piece on the board.
    drawTerrain(ctx) {
        let img = new Image(this.size, this.size);

        if(this.terrain == 'mountain') img.src = './images/MountainTerrain.gif';
        else if (this.terrain == 'tree') img.src = './images/TreeTerrain.jpg';
        else if (this.terrain == 'water') img.src = './images/WaterTerrain.gif';
        else img.src = './images/GrassyTerrain.jpg';

        ctx.beginPath();
        ctx.drawImage(img, this.x, this.y, this.size, this.size);
        ctx.closePath();
    }
} export default Tile;