function Car(seats, engine, radio) {
    this.seats = seats;
    this.engine = engine;
    this.radio = radio;
}
let work_car = new Car("cloth", "V-6", "Tape Deck");
let fun_car = new Car("leather", "V-8", "CD Player");
let original_work_car_engine = work_car.engine;
work_car.engine = "V-4";
let new_work_car_engine = work_car.engine;
document.write("I wanted a " + original_work_car_engine + " initially.<br>");
document.write("I got a " + new_work_car_engine + " instead to lower gas costs.");