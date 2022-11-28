"use strict";
import context from "../../scripts/context.js";
import * as Utils from "../../scripts/utils.js";

let width = context.canvas.width;
let height = context.canvas.height;

drawMaze();

function drawMaze() {

    context.lineWidth = 5;

    for (let i = 0; i < 5; i++) {
        let rando = Math.round(Math.random());
        if (rando == 0) {
            Utils.drawLine(i * 100, 0, 100, 100);
        } else {
            Utils.drawLine(0, 100, 100, 0);
        }
    }

}