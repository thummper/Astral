import Phaser from 'phaser';
class Ship extends Phaser.GameObjects.Container {
    constructor(scene, x, y){
        super(scene, x, y);
        this.shipExhaust; 
        this.health = 100;
        this.shield = 100;
        this.shieldRegen = 0.3;
        this.crew = 10;
        this.repairFactor = 0.3;
        this.turnRate = 100; 
    }
}

export default Ship;



