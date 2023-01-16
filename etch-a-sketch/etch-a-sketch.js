const canvas = document.querySelector("#etch-a-sketch");
const ctx = canvas.getContext("2d");

const shakeBtn = document.querySelector(".shake");

// const width = canvas.width;
// const height = canvas.height; or
const { width, height } = canvas;

const x = Math.floor(Math.random() * width);
const y = Math.floor(Math.random() * height);

ctx.lineJoin = "round";
ctx.linCap = "round";
ctx.lineWidth = 10;

ctx.beginPath();
ctx.moveTo(x, y);
ctx.lineTo(x, y);
ctx.stroke();
