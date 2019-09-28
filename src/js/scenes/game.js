import Ship from "../components/ship";
import Phaser from 'phaser';

export default class GameScene extends Phaser.Scene{
    create(){
        
        console.log(" CREATE GAMESTATE");  
        this.worldWidth = this.physics.config.width;
        this.worldHeight = this.physics.config.height;
        this.cameras.main.setBounds(0, 0, this.worldWidth, this.worldHeight);
       

        let starsBaseLayer = this.add.tileSprite(0, 0, this.worldWidth, this.worldHeight, "stars01");
        starsBaseLayer.setOrigin(0, 0);
        
       
        

        this.player = this.physics.add.existing(new Ship(this, this.cameras.main.width / 2, this.cameras.main.height / 2, "ship01"));
        console.log("Player: ", this.player);
        this.player.body.setCollideWorldBounds(true);
        this.add.existing(this.player);

     
        this.cameras.main.startFollow(this.player);


        
        
        this.cursors = this.createWASD();
        console.log("Cursors: ", this.cursors);

    }

    createWASD(){
        // Returns object containing hotkeys needed for this game. 
        return this.input.keyboard.addKeys({
            w: Phaser.Input.Keyboard.KeyCodes.W,
            a: Phaser.Input.Keyboard.KeyCodes.A,
            s: Phaser.Input.Keyboard.KeyCodes.S,
            d: Phaser.Input.Keyboard.KeyCodes.D,
        });
    }

    handlePlayerKeys(){

        if(this.cursors.w.isDown){
            this.physics.velocityFromRotation(this.player.rotation, 200, this.player.body.acceleration);
        } else if(this.cursors.s.isDown) {
            this.physics.velocityFromRotation(this.player.rotation, -200, this.player.body.acceleration);
        } else {
            this.player.body.setAcceleration(0);
        }


        if(this.cursors.a.isDown){
            console.log("AAA");
            this.player.body.setAngularVelocity(-100);
        } else if(this.cursors.d.isDown){
            this.player.body.setAngularVelocity(100);
        } else {
            this.player.body.setAngularVelocity(0);
        }


 
    }

    update(){
        //Presumably this is loop
        this.handlePlayerKeys();





    }
}