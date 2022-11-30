"use strict";
import context from "../../scripts/context.js";
import * as Utils from "../../scripts/utils.js";

let width = context.canvas.width;
let height = context.canvas.height;

let bubbles = [];

setup();

update();


function setup() {
    for (let i = 0; i < 100; i++) {
        let bubble = {
            x: Utils.randomNumber(0, width),
            y: Utils.randomNumber(height + 80, height + 700),
            size: 20,
            hue: Utils.randomNumber(0, 360)
        };
        bubbles[i] = bubble;
    }
    console.log(bubbles);
}

function update() {
    context.fillStyle = "white";
    context.fillRect(0, 0, width, height);
    for (let i = 0; i < bubbles.length; i++) {
        let bubble = bubbles[i];
        bubble.x += Utils.randomNumber(-2, 2);
        bubble.y += Utils.randomNumber(-1, -3);
        /*bubble.size += 0.01;*/
        drawBubble(bubble);
    }

    requestAnimationFrame(update);
}

function drawBubble(bubble) {
    context.fillStyle = "black";
    context.fillRect(bubble.x - 5, bubble.y + 20, 10, 80);
    context.fillStyle = Utils.hsl(bubble.hue, 50, 50);
    Utils.fillEllipse(bubble.x, bubble.y, 25, 50);

}
