import Phaser from 'phaser';
export default class Pre extends Phaser.Scene{
    preload(){
        console.log("Preload PRELOAD CLASS");
        // Load assets
        const progress = this.add.graphics();
        // Load progress event to show load bar
        this.load.on('progress', (value) => {
            console.log("Loading Value: ", value);
            progress.clear();
            progress.fillStyle(0xffffff, 1);
            progress.fillRect(0, this.sys.game.config.height / 2, this.sys.game.config.width * value, 60);
        });
        this.load.on('complete', () => {
            console.log("Loading Complete");
            // Prepare animations? 
            progress.destroy();
            this.scene.start("Title");
        });
        this.load.image("ship01",  "assets/ships/ship1.png");
        this.load.image("stars01", "assets/backgrounds/starstile1.jpg");

      

        this.load.image('plasma01', 'assets/fire/plasma1.png');
        this.load.image('plasma02', 'assets/fire/plasma2.png');
        this.load.image("particleCricle", "assets/fire/circle05.png");
        
    }

}

// Parallax
/* 
paralax1 = game.add.tileSprite(0, 400, 3300,  816, 'marioback-lightgreen');   paralax2 = game.add.tileSprite(0, 400, 3300, 816, 'mariomiddle-lightgreen');
update: 

paralax2.x= game.camera.x*0.1; //paralax2.y= game.camera.y*0.1+340;paralax1.x= game.camera.x*0.2;// paralax1.y= game.camera.y*0.2+300; //move it down a few pixels to account for the missing pixels when moving with cam



Essentially have layers of stars and scroll one of them when the ship moves. \

*/