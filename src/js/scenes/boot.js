import Phaser from 'phaser';
export default class Boot extends Phaser.Scene{
    preload(){
        console.log("Boot preload");
        // Load loading bar or something.
    }
    create(){
        console.log("Phaser Boot");
        this.scene.start("Preload");
    }
}

// Parallax
/* 
paralax1 = game.add.tileSprite(0, 400, 3300,  816, 'marioback-lightgreen');   paralax2 = game.add.tileSprite(0, 400, 3300, 816, 'mariomiddle-lightgreen');
update: 

paralax2.x= game.camera.x*0.1; //paralax2.y= game.camera.y*0.1+340;paralax1.x= game.camera.x*0.2;// paralax1.y= game.camera.y*0.2+300; //move it down a few pixels to account for the missing pixels when moving with cam



Essentially have layers of stars and scroll one of them when the ship moves. 

*/




 
