let Planet = new Object();
Planet.name = "Mercury";
Planet.location = "Closest to the Sun";
Planet.temp = "Extremely Hot!";
Planet.show_information = function() {
    document.write("Planet Name: " + Planet.name + "<br>");
    document.write("Planet Location: " + Planet.location + "<br>");
    document.write("Planet Temperature: " + Planet.temp + "<br>");
};

function Animal(type, body, height) {
    this.type = type;
    this.body = body;
    this.height = height;
}

Animal.prototype.describe = function() {
    document.write("Animal: " + this.type + "<br>");
    document.write("Body: " + this.body + "<br>");
    document.write("Height: " + this.height + "<br>");
}

let new_animal = new Animal("Bear", "Big Hairy Body", "Very tall if standing");
let user_animal = new Animal(prompt("What Animal is it?"), prompt("What is the animal's body size?"), prompt("What is the animal's height?"));

Planet.show_information();
document.write("<br>");
new_animal.describe();
document.write("<br><h2>Here is the user input.</h2><br>");
user_animal.describe();