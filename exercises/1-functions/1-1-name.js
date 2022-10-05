"use strict";



"use strict";

drawLine();

function drawLine() {

   let canvas = document.querySelector("canvas");
   canvas.width = window.innerWidth;
   canvas.height = window.innerHeight;
   let context = canvas.getContext("2d");

   context.lineWidth = 5;
   context.strokeStyle = 'red';
   context.beginPath();
   context.moveTo(175, 50);
   context.lineTo(300, 50);
   context.lineTo(300,150);
   context.lineTo(250, 150);
   context.lineTo(350, 150);
   context.lineTo(350, 250);
   context.lineTo(175, 250);
   context.lineTo(175, 50);
   context.stroke();

   context.beginPath();
   context.lineWidth = 5;
   context.strokeStyle = 'green';
   context.moveTo(400, 50);
   context.lineTo(400, 250);
   context.stroke();

   context.beginPath();
   context.lineWidth = 5;
   context.strokeStyle = 'yellow';
   context.moveTo(450, 50);
   context.lineTo(450, 250);
   context.lineTo(550, 250);
   context.stroke();

   context.beginPath();
   context.lineWidth = 5;
   context.strokeStyle = 'blue';
   context.moveTo(600, 250);
   context.lineTo(700, 50);
   context.lineTo(800, 250);
   context.stroke();

   context.beginPath();
   context.lineWidth = 5;
   context.strokeStyle = 'orange';
   context.moveTo(850, 50);
   context.lineTo(850, 250);
   context.lineTo(950, 250);
   context.stroke();
   
}