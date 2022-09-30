import Icon from "./Icon";

class Avatar extends Icon {
    constructor(image, tile, size, tileArr){
        super(image, tile, size);
        document.addEventListener("keydown", this.handleKeyDown.bind(this));
        this.tileArr = tileArr;
    }

    handleKeyDown(event) {
        const tileIndex = this.tileArr.indexOf(this.tile);
        if (event.key === "Right" || event.key === "ArrowRight") {
            if(tileIndex < this.tileArr.length - 15){
                if(this.tileArr[tileIndex + 15].terrain == 'grass') this.tile = this.tileArr[tileIndex + 15];
            }
        }
        else if (event.key === "Left" || event.key === "ArrowLeft"){
            if(tileIndex >=  15){
                if(this.tileArr[tileIndex - 15].terrain == 'grass') this.tile = this.tileArr[tileIndex - 15];
            }
        }
        else if (event.key === "Up" || event.key === "ArrowUp") {
            if(tileIndex % 15 != 0) {
                if(this.tileArr[tileIndex - 1].terrain == 'grass') this.tile = this.tileArr[tileIndex - 1];
            }
        }

        else if (event.key === "Down" || event.key === "ArrowDown"){
            if(tileIndex % 15 != 14) {
                if(this.tileArr[tileIndex + 1].terrain == 'grass') this.tile = this.tileArr[tileIndex + 1]
            }
        }
    }
    
} export default Avatar;