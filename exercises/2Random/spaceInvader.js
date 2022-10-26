"use strict";

let canvas = document.querySelector("canvas");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
let context = canvas.getContext("2d");

let width = context.canvas.width;
let height = context.canvas.height;

drawLines(50, 50, 400);

function drawLines(x, y, size) {

   let randomX = Math.floor(Math.random() * width);
   let randomY = Math.floor(Math.random() * height);

   let size = 200;

   let r = Math.floor(Math.random() * 255);
   let g = Math.floor(Math.random() * 255);
   let b = Math.floor(Math.random() * 255);

   let color = "rgb( " + r + "," + g + "," + b + ")";

   context.fillStyle = color;
   context.fillRect(x, y, size, size);

   console.log(color);

}

