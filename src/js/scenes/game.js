import Ship from "../components/ship";

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

    }
    update(){
        //Presumably this is loop
    }
}