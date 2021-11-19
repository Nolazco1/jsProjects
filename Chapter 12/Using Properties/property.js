let area_form = document.getElementById("getarea");
area_form.addEventListener("submit", function(event) {
    let rad = document.getElementById("radius").value,
        the_area = 0;
    if (rad.length < 1) {
        event.preventDefault();
        alert("Please enter a radius!");
        return;
    } else {
        event.preventDefault();
        rad = !isNaN(rad) ? 0 : +rad || false;
        if (rad === false) {
            alert("Radius must be numeric!");
            return;
        }
        the_area = Math.PI * (rad * rad);
        alert("The area is " + the_area + " square units. ");
    }
}, false);