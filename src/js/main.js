import Phaser from 'phaser';
import Boot from "./scenes/boot";
import Pre from "./scenes/preload";
import Title from "./scenes/title";
import GameScene from "./scenes/game.js";





class Game extends Phaser.Game {
    constructor() {
        const width = window.innerWidth;
        const height = window.innerHeight;
        super({
            type: Phaser.AUTO,
            width,
            height,
            scale: {
                mode: Phaser.Scale.RESIZE,
                autoCenter: Phaser.Scale.CENTER_BOTH
            }
        });

        this.scene.add("Boot", Boot);
        this.scene.add("Preload", Pre);
        this.scene.start("Boot");

    }
}
const Astral = new Game();