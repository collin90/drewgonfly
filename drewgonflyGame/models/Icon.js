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

        //function to check if the current piece is intersecting a piece (passed as a parameter)
        intersects(other) {

            let txmin = this.x;
            let txmax = this.x + this.size;
            let tymin = this.y;
            let tymax = this.y + this.size;

            let oxmin = other.x;
            let oxmax = other.x + other.size;
            let oymin = other.y;
            let oymax = other.y + other.size;

            let tLeftOfO = txmax < oxmin;
            let tRightOfO = txmin > oxmax;
            let tAboveO = tymin > oymax;
            let tBelowO = tymax < oymin;
        
            return !( tLeftOfO || tRightOfO || tAboveO || tBelowO );
        }

} export default Icon;