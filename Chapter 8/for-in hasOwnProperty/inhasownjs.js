function Car(seats, engine, radio) {
    this.seats = seats;
    this.engine = engine;
    this.radio = radio;
}
let work_car = new Car("cloth", "V-6", "Tape Deck");
for (let prop_name in work_car) {
    if (work_car.hasOwnProperty(prop_name)) {
        document.write(prop_name + ": " + work_car[prop_name] + "<br>");
    }
}