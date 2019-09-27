export default class Ship extends Phaser.GameObjects.Sprite{
    constructor(scene, x, y, texture){
        super(scene, x, y);
        this.setTexture(texture);
        this.setPosition(x, y)
        this.health = 100;
        this.dx = 2;
        this.dy = 0;



    }

    preUpdate(time, delta){
        super.preUpdate(time, delta);
        this.rotation += 0.01;

        this.x -= this.dx;
        this.y += this.dy;
    }
}