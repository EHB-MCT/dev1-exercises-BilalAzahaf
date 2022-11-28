"use strict";
import context from "../../scripts/context.js";
import * as Utils from "../../scripts/utils.js";

let width = context.canvas.width;
let height = context.canvas.height;

setup();

function setup() {
    let numbers = [];

    for (let i = 0; i < 1000; i++) {
        numbers[i] = Utils.randomNumber(0, 100)
    }

    console.log(calculateAverage(numbers));

}

function calculateAverage(listofNumbers) {
    let sum = 0;

    for (let i = 0; i < listofNumbers.length; i++) {
        sum += listofNumbers[i];
    }

    return sum / listofNumbers.length;


}