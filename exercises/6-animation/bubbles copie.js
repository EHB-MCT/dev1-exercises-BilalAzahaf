"use strict";
import context from "../../scripts/context.js";
import * as Utils from "../../scripts/utils.js";

let width = context.canvas.width;
let height = context.canvas.height;

let bubblesamount = 50;

let xpos = [];
let ypos = [];
let sizes = [];

let yspeed = [];

setup();

function setup() {
    for (let i = 0; i < 50; i++) {
        xpos[i] = width / 2;
        ypos[i] = height;
        sizes[i] = Utils.randomNumber(25, 50);
        yspeed[i] = Utils.randomNumber(2, 10);
        xspeed[i] = Utils.randomNumber(-5, 5);
    }

    console.log(xpos);
    console.log(ypos);
    console.log(sizes);

    /* x = width / 2;
    y = height;
    size = 50;
    */

}

update();

function update() {
    context.fillStyle = "white";
    context.fillRect(0, 0, width, height);
    console.log("updating...")

    for (let i = 0; i < bubblesamount; i++)
        //y -= yspeed;
        xpos[i] -= yspeed[i];
    xpos[i] += Utils.randomNumber(-5, 5);
    drawBubble(xpos[i], ypos[i], sizes[i], 180);

    requestAnimationFrame(update);
}

function drawBubble(x, y, size, hue) {
    context.fillStyle = Utils.hsl(hue, 50, 50);
    Utils.fillCircle(x, y, size);
    context.fillStyle = Utils.hsl(hue, 50, 75);
    Utils.fillCircle(x + size / 3, y - size / 3, size / 4);

}

