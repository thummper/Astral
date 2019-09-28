export default class Ship extends Phaser.GameObjects.Sprite{
    constructor(scene, x, y, texture){
        super(scene, x, y);
        this.setTexture(texture);
    
    }

    preUpdate(time, delta){
        super.preUpdate(time, delta);
       
    }
}