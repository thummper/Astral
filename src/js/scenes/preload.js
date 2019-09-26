import Phaser from 'phaser';
export default class Pre extends Phaser.Scene{
    preload(){
        // Load assets
    }
    create(){
        console.log("Phaser Preload");
        //this.scene.start("Title");
    }
}