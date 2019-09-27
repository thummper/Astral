export default class Title extends Phaser.Scene{
    preload(){
        console.log("TITLE CLASS");
        // Load assets
      
    }
    create(){
        //Start game state on button press or something.
        this.scene.bringToTop();
        this.menuWrapper = document.getElementsByClassName("menuWrapper")[0];
        this.startButton = document.getElementById("start");
        this.startButton.addEventListener("click", function(){
            console.log("start clicked");
            this.menuWrapper.style.display = "none";
            this.scene.start("GameScene");
        }.bind(this));
    }
}