let userinput = window.prompt("How many temperatures would you like to average?", "");
let num_temps = userinput;
let temps = [];
if ((userinput <= 0) || (userinput == "")) {
    document.write("<h1>Please input a correct number of temperatures to average. Try Again.</h1>");
} else {
    for (let count = 1; count <= userinput; count++) {
        temps.push(prompt("Please enter Temperature: " + count))
    };
}

function addSum(a, b) {
    return parseInt(a) + parseInt(b);
}

function avgtemp() {
    const tempavg = temps.reduce(addSum) / temps.length;
    document.write("There are " + temps.length + " temperatures to average.<br>");
    for (let i = 0; i < temps.length; i++) {
        document.write(temps[i] + "<br>");
    }
    document.write("The average of your temperatures is: " + tempavg);
}

avgtemp();