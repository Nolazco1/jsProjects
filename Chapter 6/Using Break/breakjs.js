let stopnumber = 5
for (let count = 1; count < 11; count++) {
    if (count === stopnumber) {
        document.write("Sorry, the loop stops here!<br>");
        break;
    } else {
        document.write(count + ". I am part of a loop!<br>");
    }
}