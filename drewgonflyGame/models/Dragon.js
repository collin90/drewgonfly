import Icon from "./Icon";
class Dragon extends Icon {
    constructor(image, tile, size, dx, dy, tileArr){
        super(image,tile,size);
        this.dx = dx;
        this.dy = dy;
        this.tileArr = tileArr;
        this.x = tile.x;
        this.y = tile.y;
    }

    draw(ctx){
        ctx.beginPath();
        ctx.drawImage(this.image, this.x, this.y, this.size, this.size);
        ctx.closePath();  
    }

    move(canvasWidth, canvasHeight){

        this.x += this.dx;
        this.y += this.dy;
        let speedUp = Math.floor(Math.random()*5);
        if(speedUp == 1){
            this.dx += .2;
            this.dy += .2;
        }
        else if(speedUp == 4){
            this.dx -= .2;
            this.dy -= .2;
        }
        let changeX = Math.floor(Math.random()*100);
        if(changeX == 1) this.dx *= -1;
        let changeY = Math.floor(Math.random()*100);
        if(changeY == 1) this.dy *= -1;

        if (this.x < 0){
            this.x = 0;
            this.dx *= -1;
        }
        else if (this.x + this.size > canvasWidth) {
            this.x = canvasWidth - this.size;
            this.dx *= -1;
        }

        if (this.y < 0){
            this.y = 0;
            this.dy *= -1;
        }
        else if (this.y + this.size > canvasHeight) {
            this.y = canvasHeight - this.size;
            this.dy *= -1;
        }
    }

    
} export default Dragon;