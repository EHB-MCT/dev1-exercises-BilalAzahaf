"user strict"
import context from "../../scripts/context.js";
import * as Utils from "../../scripts/utils.js";

let height = window.innerHeight;
let width = window.innerWidth;
let margin = 200;

drawBubbles();

function drawBubbles() {

    let bubbleLimited = 200;

    context.fillRect(0, 0, width, height);

    context.fillStyle = "white";

    for (let i = 0; i < bubbleLimited; i++) {
        let randomX = margin + Math.random() * width - margin * 2;
        let randomY = margin + Math.random() * height - margin * 2;
        let randomHue = Math.random() * 360;
        let randomSize = 10 + Math.random() * 40;
        context.fillStyle = Utils.hsla(randomHue, 50, 50,)
        Utils.drawCircle(randomX, randomY, randomSize)
    }

}