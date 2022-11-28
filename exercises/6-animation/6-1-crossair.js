"use strict";
import context from "../../scripts/context.js";
import * as Utils from "../../scripts/utils.js";

let width = context.canvas.width;
let height = context.canvas.height;

window.onmousemove = drawCross;

drawCross();

/**
 * 
 * @param {MouseEvent} eventData 
 */
function changeCoordination(eventData) {
    let mouseX = eventData.pageX;
    let mouseY = eventData.pageY;

}

function drawCross(eventData) {



    Utils.drawLine(0, eventData.y, width, eventData.y, "red", 4);

    Utils.drawLine(eventData.x, 0, eventData.x, height, "red", 4);



}
