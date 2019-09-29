import Ship from "../components/ship";
import ShipSprite from "../components/shipsprite";
import Phaser from 'phaser';

export default class GameScene extends Phaser.Scene{
    create(){
        
         
        this.worldWidth = this.physics.config.width;
        this.worldHeight = this.physics.config.height;
        this.cameras.main.setBounds(0, 0, this.worldWidth, this.worldHeight);
       

        let starsBaseLayer = this.add.tileSprite(0, 0, this.worldWidth, this.worldHeight, "stars01");
        starsBaseLayer.setOrigin(0, 0);


        this.playerShip = new Ship(this, 100, 100);
        this.p1 = this.add.sprite(-100, 0, "plasma01");
        this.p1.visible = false;
        let s1 = this.add.sprite(0, 0, "ship01");
        this.playerShip.add(this.p1);
        this.playerShip.add(s1);
  

        this.add.existing(this.playerShip);
        console.log(this.playerShip.getBounds());
        let bounds = this.playerShip.getBounds();
        this.playerShip.width = (bounds.width);
        this.playerShip.height = (bounds.height);
        this.playerShip = this.physics.add.existing(this.playerShip);
        
        this.playerShip.body.setCollideWorldBounds(true);
        this.cameras.main.startFollow(this.playerShip);


  
     
        

        
        

        this.cursors = this.createWASD();
      

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
            this.p1.visible = true;
            this.physics.velocityFromRotation(this.playerShip.rotation, 200, this.playerShip.body.acceleration);
        } else if(this.cursors.s.isDown) {
            this.physics.velocityFromRotation(this.playerShip.rotation, -200, this.playerShip.body.acceleration);
        } else {
            this.p1.visible = false;
            this.playerShip.body.setAcceleration(0);
        }


        if(this.cursors.a.isDown){
            console.log("A");
            this.playerShip.body.angularVelocity = -100;
        } else if(this.cursors.d.isDown){
            console.log("D");
            this.playerShip.body.setAngularVelocity(100);
        } else {
            this.playerShip.body.setAngularVelocity(0);
        }


 
    }

    update(){
        //Presumably this is loop
        this.handlePlayerKeys();





    }
}