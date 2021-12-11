let thename = prompt("Enter your name", ""),
    tomatch = /John/i,
    is_a_match = tomatch.test(thename);
if (is_a_match) {
    alert("Wow, we have the same name!");
} else {
    alert("Not my name, but it will work!");
}