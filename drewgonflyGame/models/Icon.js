import Tile from "./../Tile";

class Icon {
    constructor(image, tile, size) {
        this.image = image;
        this.tile = tile;
        this.size = size;
    }

    draw(ctx) {
        ctx.beginPath();
        ctx.drawImage(this.image, this.tile.x, this.tile.y, this.size, this.size);
        ctx.closePath();
    }

} export default Icon;