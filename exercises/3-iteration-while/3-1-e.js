"use strict";
import context from "../../scripts/context.js";
import * as Utils from "../../scripts/utils.js";

draw();

function draw() {
    context.lineWidth = 2;
    context.strokeStyle = "white";
    context.fillStyle = "#3498DB";
    context.fillRect(50, 50, 300, 300);
    drawDiagonalGrid();
}

function drawDiagonalGrid() {
    let i = 0;
    let jumpX = 22;
    let jumpY = 25;
    while (i <= 7) {
        Utils.drawLine(50 + (jumpX * i), 175 + (jumpY * i), 200 + (jumpX * i), 50 + (jumpY * i));
        Utils.drawLine(200, 50, 300, 175);
        i++;

    }
}