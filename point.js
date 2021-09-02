export class Point {
    constructor(index, x, y) {
        this.x = x;
        this.y = y;
        this.fixedY = y;
        this.speed = 0.05;

        // to give different speed to each points
        this.cur = index;
        
        this.max = Math.random() * 100 + 50;
    }

    update() {
        this.cur += this.speed;
        // sin => return -1 ~ 1
        this.y = this.fixedY + (Math.sin(this.cur) * this.max);
    }
}