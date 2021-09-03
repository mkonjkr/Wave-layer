import { Sun } from "./sun.js";
import { WaveGroup } from "./wavegroup.js";

class App {
    constructor() {
        this.canvas = document.createElement('canvas');
        this.ctx = this.canvas.getContext('2d');
        document.body.appendChild(this.canvas);

        
        this.wavegroup = new WaveGroup();
        this.sun = new Sun();

        window.addEventListener('resize', this.resize.bind(this), false);
        this.resize();

        window.requestAnimationFrame(this.animate.bind(this));
    }

    resize() {
        this.stageWidth = document.body.clientWidth;
        this.stageHeight = document.body.clientHeight;

        this.pixelRatio = window.devicePixelRatio > 1 ? 2 : 1;

        this.canvas.width = this.stageWidth * 2;
        this.canvas.height = this.stageHeight * 2;

        this.ctx.scale(this.pixelRatio, this.pixelRatio);

        this.wavegroup.resize(this.stageWidth, this.stageHeight);
        this.sun.resize(this.stageWidth, this.stageHeight);
    }

    animate(t) {
        window.requestAnimationFrame(this.animate.bind(this));
        this.ctx.clearRect(0, 0, this.stageWidth, this.stageHeight);
        
        this.wavegroup.draw(this.ctx);
        this.sun.draw(this.ctx, t);
    }

}

window.onload = () => {
    new App();
}

/* import { WaveGroup } from "./wavegroup.js";

class App {
    constructor() {
        this.canvas = document.createElement('canvas');
        this.ctx = this.canvas.getContext('2d');
        document.body.appendChild(this.canvas);

        this.waveGroup = new WaveGroup();

        window.addEventListener('resize', this.resize.bind(this), false);
        this.resize();

        window.requestAnimationFrame(this.animate.bind(this));
    }

    resize() {
        this.stageWidth = document.body.clientWidth;
        this.stageHeight = document.body.clientHeight;
        this.pixelRatio = window.devicePixelRatio > 1 ? 2 : 1;

        this.canvas.width = this.stageWidth * this.pixelRatio;
        this.canvas.height = this.stageHeight * this.pixelRatio;

        this.ctx.scale(this.pixelRatio, this.pixelRatio);

        this.waveGroup.resize(this.stageWidth, this.stageHeight);
    }

    animate() {
        this.ctx.clearRect(0, 0, this.stageWidth, this.stageHeight);

        this.waveGroup.draw(this.ctx);
        window.requestAnimationFrame(this.animate.bind(this));
        
    }
}

window.onload = () => {
    new App();
} */