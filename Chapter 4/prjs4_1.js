function car_cost(mycar, paycheck) {
    window.alert("You have a " + mycar + " and make $" + paycheck);
}

function get_added_text() {
    var toptext = "This project ";
    var bottomtext = "is almost fun!";
    var combinedtext = toptext + bottomtext;
    return combinedtext;
}

car_cost("Mustang", 1500);
var alerttext = get_added_text();
window.alert(alerttext)