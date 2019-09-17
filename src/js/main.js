import Processing from 'p5';
import Planck from 'planck-js';

const sketch = (p5) => {
    // Variables scoped within p5
    const canvasWidth  = p5.windowWidth;
    const canvasHeight = p5.windowHeight;

    // Make librabry globally availiable
    window.p5 = p5;
    p5.setup = () => {
        let canvas = p5.createCanvas(canvasWidth, canvasHeight);
     
        console.log("Setup");
    }
    p5.draw  = () => {
        console.log("Looping");
        p5.arc(50, 55, 50, 50, 0, p5.HALF_PI);

    }
}
const p5 = new Processing(sketch);

