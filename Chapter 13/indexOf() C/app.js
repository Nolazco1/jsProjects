let the_text = "Cool";
let position = the_text.indexOf("o", 2);
if (position === -1) {
    alert("Your character is not in the string!");
} else {
    alert("Your character is at position " + position);
}