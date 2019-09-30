import Ship from "../components/ship";
import ShipSprite from "../components/shipsprite";
import Phaser from 'phaser';

export default class GameScene extends Phaser.Scene{
    create(){
        
         
        this.worldWidth = this.physics.config.width;
        this.worldHeight = this.physics.config.height;
        this.cameras.main.setBounds(0, 0, this.worldWidth, this.worldHeight);

        // this.minimap = this.cameras.add(0, this.cameras.main.height - 200, 200, 200);
        // this.minimap.zoom = 0.1;

       

        let starsBaseLayer = this.add.tileSprite(0, 0, this.worldWidth, this.worldHeight, "stars01");
        starsBaseLayer.setOrigin(0, 0);


        let shipConfigs = [
            {
                shipBody: "ship01",
                shipExhaust: "plasma01",
                xOff: -100,
                yOff: 0,
                scale: 0.6
            },
        ];




        this.playerShip = new Ship(this, 100, 100, "ship01", "plasma01", shipConfigs[0]);
        this.playerShip = this.physics.add.existing(this.playerShip);
        //this.p1 = this.add.sprite(-100, 0, "plasma01");
        //this.p1.visible = false;
        //let s1 = this.add.sprite(0, 0, "ship01");
 
  

        this.add.existing(this.playerShip);
        console.log(this.playerShip.getBounds());

        // this.playerShip = this.physics.add.existing(this.playerShip);
        
        this.playerShip.body.setCollideWorldBounds(true);
        this.cameras.main.startFollow(this.playerShip);
        // this.minimap.startFollow(this.playerShip);


  

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
            this.physics.velocityFromRotation(this.playerShip.rotation, 200, this.playerShip.body.acceleration);
            this.playerShip.toggleExhaust(true);
        } else if(this.cursors.s.isDown) {
            this.physics.velocityFromRotation(this.playerShip.rotation, -200, this.playerShip.body.acceleration);
        } else {
            this.playerShip.body.setAcceleration(0);
            this.playerShip.toggleExhaust(false);
        }


        if(this.cursors.a.isDown){
            this.playerShip.body.angularVelocity = -100;
        } else if(this.cursors.d.isDown){
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