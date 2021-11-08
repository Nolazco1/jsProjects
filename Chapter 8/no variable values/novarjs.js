let car = {
    seats: "cloth",
    engine: "V-6"
};
let s = "seats";

function show_seat_type(sts) {
    window.alert(car[sts]);
}
show_seat_type(s);