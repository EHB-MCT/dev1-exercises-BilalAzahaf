"user strict"
import context from "../../scripts/context.js";
import * as Utils from "../../scripts/utils.js";

let horizontallines = 60;
let verticallines = 30;

let width = 600;
let height = 300;

context.lineWidth = 2;
context.strokeStyle = "orange";

draw();

function draw() {
    context.lineWidth = 1;
    context.strokeStyle = "white";
    context.fillStyle = "orange";
    context.fillRect(0, 0, 600, 300);
    drawLines();
}

function drawLines() {
    for (let i = 0; i < horizontallines; i++) {
        Utils.drawLine(0 + (10 * i), 0, width - (10 * i), height);
    }

    for (let i = 0; i < verticallines; i++) {
        Utils.drawLine(0, 0 + (10 * i), width, height - (10 * i));
    }
}