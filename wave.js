import { Point } from "./point.js";

export class Wave {
    constructor(totalPoints, index, color) {
        this.totalPoints = totalPoints;
        this.color = color;
        this.index = index;
        
        this.points = [];
    }

    resize(stageWidth, stageHeight) {
        this.stageWidth = stageWidth;
        this.stageHeight = stageHeight;

        this.centerX = this.stageWidth / 2;
        this.centerY = this.stageHeight / 2 + 100;

        this.pointGap = this.stageWidth / (this.totalPoints - 1);

        for ( let i = 0; i < this.totalPoints; i++ ) {
            this.points[i] = new Point(
                this.index + i,
                this.pointGap * i,
                this.centerY,
            );
        }
    }

    draw(ctx) {
        ctx.beginPath();
        ctx.fillStyle = this.color;

        this.prevX = this.points[0].x;
        this.prevY = this.points[0].y;

        ctx.moveTo(this.prevX, this.prevY);

        for (let i = 1; i < this.totalPoints; i++){
            if(i < this.totalPoints -1) {
                this.points[i].update();
            }
            //ctx.arc(this.pointGap * i, this.points[i].y, 30, 0, 2 * Math.PI);
            this.cx = (this.points[i].x + this.prevX) / 2;
            this.cy = (this.points[i].y + this.prevY) / 2;

            //ctx.lineTo(this.cx, this.cy);
            ctx.quadraticCurveTo(this.prevX, this.prevY, this.cx, this.cy);

            this.prevX = this.points[i].x;
            this.prevY = this.points[i].y;
        }
        ctx.lineTo(this.prevX, this.prevY);
        ctx.lineTo(this.stageWidth, this.stageHeight);
        ctx.lineTo(this.points[0].x, this.stageHeight);
        ctx.fill();
        ctx.closePath()
    }
}