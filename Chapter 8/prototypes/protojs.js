function Car(seats, engine, radio) {
    this.seats = seats;
    this.engine = engine;
    this.radio = radio;
}
Car.prototype.locks = "automatic";
let work_car = new Car("cloth", "V-6", "Tape Deck");
let family_car = new Car("cloth", "V-4", "CD Changer");
window.alert(work_car.locks);
window.alert(family_car.locks);