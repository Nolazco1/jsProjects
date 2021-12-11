let show_disp = document.getElementById("showdisp");
show_disp.addEventListener("click", function(event) {
    let winw = document.getElementById("width"),
        winh = document.getElementById("height");
    winw.innerHTML = "This window is " + innerWidth + " pixels wide!";
    winh.innerHTML = "This window is " + innerHeight + " pixels high!";
}, false);