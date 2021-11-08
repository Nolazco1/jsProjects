let b1 = document.getElementById("btn1");
b1.onclick = function() {
    alert("The " + window.event.type + " event started this!");
};