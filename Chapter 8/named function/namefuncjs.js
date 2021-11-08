let car = new Object();
car.seats = "cloth";
car.engine = "V-6";

function my_alert() {
    window.alert("Car: " + car.seats + " seats, " + car.engine + " engine");
}
car.show_features = my_alert;
car.show_features();