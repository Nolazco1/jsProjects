class Car {
    constructor(seats, engine, radio) {
        this.seats = seats;
        this.engine = engine;
        this.radio = radio;
    }
    describe() {
        document.write("This amazing car has these features: ");
        document.write(this.seats + " seats, " + this.engine + " engine, ");
        document.write(this.radio);
    }
}
let work_car = new Car("cloth", "V-6", "Tape Deck");
work_car.describe();