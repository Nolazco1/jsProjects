let graphic = document.getElementById("graphic"),
    ctx = graphic.getContext("2d");
ctx.strokeStyle = "#000000";
ctx.beginPath();
ctx.moveTo(10, 10);
ctx.lineTo(10, 50);
ctx.arcTo(80, 20, 10, 10, 20);
ctx.stroke();