function Car(seats, engine, radio) {
    this.seats = seats;
    this.engine = engine;
    this.radio = radio;
    this.describe = describe_car;
}

function describe_car() {
    document.write("This amazing car has these features: ");
    document.write(this.seats + " seats, " + this.engine + " engine, ");
    document.write(this.radio);
}
let work_car = new Car("cloth", "V-6", "Tape Deck");
work_car.describe();