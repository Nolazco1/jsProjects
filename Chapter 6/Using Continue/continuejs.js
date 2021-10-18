let skipnumber = 5;
for (count = 1; count < 11; count++) {
    if (count === skipnumber) {
        continue; // do nothing
    }
    document.write(count + ". I am part of a loop!<br>");
}