import { Wave } from "./wave.js";

export class WaveGroup {
    constructor() {
        this.totalWaves = 3;
        this.totalPoints = 6;

        this.waves = [];

        this.color = ['rgba(0,199,235,0.4)', 'rgba(0,146,199,0.4)', 'rgba(0,87,158,0.4)'];
        
        for (let i = 0; i < this.totalWaves; i++) {
            this.waves[i] = new Wave(this.totalPoints, i, this.color[i]);
        }
    }

    resize(stageWidth, stageHeight) {
        for (let i = 0; i < this.totalWaves; i++) {
            this.waves[i].resize(stageWidth, stageHeight);
        }
    }

    draw(ctx) {
        for (let i = 0; i < this.totalWaves; i++) {
            this.waves[i].draw(ctx);
        }
    }
}