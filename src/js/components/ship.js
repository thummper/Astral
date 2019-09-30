import Phaser from 'phaser';
class Ship extends Phaser.GameObjects.Container {
    constructor(scene, x, y, shipTexture, exhaustTexture, config){
        super(scene, x, y);
        this.config = config;
        this.health = 100;
        this.shield = 100;
        this.shieldRegen = 0.3;
        this.crew = 10;
        this.repairFactor = 0.3;
        this.turnRate = 100; 

        this.exhaustVisible = false;

        this.shipBody = this.scene.add.sprite(0, 0, shipTexture);
        this.shipExhaust = this.scene.add.sprite(config.xOff, config.yOff, exhaustTexture);
        this.shipExhaust.visible = this.exhaustVisible;
        this.add(this.shipExhaust);
        this.add(this.shipBody);

        this.boundShip();
    }

    toggleExhaust(){
        this.exhaustVisible = !this.exhaustVisible;
        this.shipExhaust.visible = this.exhaustVisible;
    }

    boundShip(){
        let bounds = this.getBounds();
        this.width = (bounds.width);
        this.height = (bounds.height);
    }
}

export default Ship;



