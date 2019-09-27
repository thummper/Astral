import Phaser from 'phaser';
import Pre from "./scenes/preload";
import Title from "./scenes/title";
import GameScene from "./scenes/game.js";

const worldWidth  = 3000;
const worldHeight = 3000;


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
            },
            physics: {
                default: 'arcade',
                arcade: {
                    gravity: {
                        y: 0,
                        x: 0
                    },
                    x: 0,
                    y: 0,
                    width: worldWidth,
                    height: worldHeight,
                    debug: true,
                }
            },
        });
      
       

        this.scene.add("Preload", Pre);
        this.scene.add("Title", Title);
        this.scene.add("GameScene", GameScene);
        this.scene.start("Preload");

    }
}
const Astral = new Game();