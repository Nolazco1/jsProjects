let b1 = document.getElementById("btn1");
b1.onclick = function(event) {
    let e = event || window.event;
    alert("The " + e.type + " event started this!");
};