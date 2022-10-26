"use strict";
import context from "../../scripts/context.js";
import * as Utils from "../../scripts/utils.js";

draw();

function draw() {
    context.lineWidth = 2;
    context.strokeStyle = "white";
    context.fillStyle = "#3498DB";
    context.fillRect(50, 50, 300, 300);
    drawCross();
}

function drawCross() {
    let i = 0;
    while (i < 5) {
        let step = 150;
        let mid = 25;
        Utils.drawLine(50, step + (mid * i), 350, step + (mid * i));
        Utils.drawLine(step + (mid * i), 50, step + (mid * i), 350);
        i++;
    }
}