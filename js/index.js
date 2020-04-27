const canvas = document.getElementById("drawing");

const ctx = canvas.getContext("2d");

// square
ctx.beginPath();
ctx.strokeStyle = "pink";
ctx.lineWidth = 10;
ctx.fillStyle = "yellow";
ctx.moveTo(60, 60);
ctx.lineTo(120, 60);
ctx.lineTo(120, 120);
ctx.lineTo(60, 120);
ctx.lineTo(60, 60);
ctx.stroke();
ctx.fill();
ctx.closePath();

// half circle
ctx.beginPath();
ctx.fillStyle = "gray";
ctx.arc(500, 100, 50, 0, Math.PI);
ctx.fill();

// circle
ctx.beginPath();
ctx.strokeStyle = "purple";
ctx.lineWidth = 10;
ctx.fillStyle = "green";
ctx.arc(350, 250, 40, 0, 2 * Math.PI);
ctx.stroke();
ctx.fill();

// triangle 1
ctx.beginPath();
ctx.moveTo(500, 250);
ctx.lineTo(250, 500);
ctx.lineTo(400, 400);
ctx.lineTo(500, 250);
ctx.strokeStyle = "orange";
ctx.fillStyle = "pink";
ctx.stroke();
ctx.fill();
ctx.closePath();

// triangle 2
ctx.beginPath();
ctx.strokeStyle = "pink";
ctx.fillStyle = "blue";
ctx.moveTo(100, 300);
ctx.lineTo(100, 400);
ctx.lineTo(200, 400);
ctx.lineTo(100, 300);
ctx.stroke();
ctx.fill();
ctx.closePath();

// rectangle
ctx.rect(450, 450, 300, 200);
ctx.strokeStyle = "purple";
ctx.fillStyle = "yellow";
ctx.stroke();
ctx.fill();
ctx.closePath();
