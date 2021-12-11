let dropdiv = document.getElementById("dropdiv");
dropdiv.addEventListener("dragover", function(event) {
    event.preventDefault();
}, false);
dropdiv.addEventListener("dragenter", function(event) {
    event.preventDefault();
}, false);
dropdiv.addEventListener("drop", function(event) {
    let divtext = event.dataTransfer.getData("URL");
    event.preventDefault();
    dropdiv.innerHTML = divtext;
}, false);