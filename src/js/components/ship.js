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


        this.emitter = this.scene.add.particles('particleCricle');
     
        this.emitter.createEmitter({
 
            x: -50,
            
            lifespan: 130,
            speed: { min: 400, max: 600 },
            angle: 180,
            scale: { start: 0.05, end: 0 },
            quantity: 2,
            blendMode: 'ADD'
        });
        this.shipBody = this.scene.add.sprite(0, 0, shipTexture);
        this.shipBody.setScale(config.scale);
        this.shipExhaust = this.scene.add.sprite(config.xOff, config.yOff, exhaustTexture);
        this.shipExhaust.visible = this.exhaustVisible;
        this.emitter.visible = this.exhaustVisible;
        this.add(this.shipExhaust);
        this.add(this.shipBody);
        this.add(this.emitter);

        this.boundShip();
    }

    toggleExhaust(value){
        this.exhaustVisible = value;
        this.shipExhaust.visible = this.exhaustVisible;
        this.emitter.visible = this.exhaustVisible;
    }

    boundShip(){
        let bounds = this.getBounds();
        this.width = (bounds.width);
        this.height = (bounds.height);
    }
}

export default Ship;



