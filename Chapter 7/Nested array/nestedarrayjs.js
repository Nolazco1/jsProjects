let students = [
    ["Thomas", 92, 90],
    ["Roger", 87, 78],
    ["Amber", 81, 85],
    ["Jennifer", 99, 100]
];
for (let i = 0; i < students.length; i++) {
    for (let j = 0; j < students[i].length; j++) {
        if (j === 0) {
            document.write(students[i][j] + ": ");
        } else if (j === students[i].length - 1) {
            document.write(students[i][j] + "<br>");
        } else {
            continue;
        }
    }
}