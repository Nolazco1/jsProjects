let graphic = document.getElementById("graphic"),
    ctx = graphic.getContext("2d");
ctx.fillStyle = "#000000";
ctx.font = "bold 1em Verdana";
ctx.textAlign = "start";
ctx.fillText("I am some text on a canvas", 10, 10, 200);