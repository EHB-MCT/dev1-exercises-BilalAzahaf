"use strict";

drawLines();

function drawLines(x, y) {

   let canvas = document.querySelector("canvas");
   canvas.width = window.innerWidth;
   canvas.height = window.innerHeight;
   let context = canvas.getContext("2d");

   let width = context.canvas.width;
   let height = context.canvas.height;

   let margin = 50;

   let spacing = 203;

   context.lineWidth = 5;
   context.strokeStyle = 'blue';
   context.beginPath();
   context.moveTo(margin, margin);
   context.lineTo(width - margin, margin);
   context.lineTo(margin, height - spacing *3);
   context.lineTo(width - margin, height - spacing * 3);
   context.lineTo(margin, height - spacing * 2);
   context.lineTo(width - margin, height - spacing * 2);
   context.lineTo(margin, height - spacing);
   context.lineTo(width - margin, height - spacing);
   context.lineTo(margin, height - margin);
   context.lineTo(width - margin, height - margin);
   context.lineTo(margin, margin);
   context.stroke();

   console.log(height);
}
