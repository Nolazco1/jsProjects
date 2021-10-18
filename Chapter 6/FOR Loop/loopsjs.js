document.write("Get ready for some repeated text.<br>");
for (let count = 1; count < 11; count++) {
    if (count === 5) {
        document.write("The loop is halfway done!<br>");
    }
    document.write("I am part of the loop!<br>");
}
document.write("Now we are back to the plain text.");