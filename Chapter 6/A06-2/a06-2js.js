let userinput = window.prompt("How many stars would you like to print?", "");
if ((userinput <= 0) || (userinput == "")) {
    document.write("<h1>Please enter how many stars you want to print. Try Again.</h1>");
} else {
    for (let count = 1; count <= userinput; count++) {
        document.write(" *");
    }
}