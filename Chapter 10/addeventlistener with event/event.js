let b1 = document.getElementById("btn1");
b1.addEventListener("click", function(event) {
    alert("The " + event.type + " event started this!");
}, false);