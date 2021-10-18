function printedtext() {
    var text1 = "I love Paris in the springtime, ",
        text2 = "I love Paris in the fall.";
    document.write(text1 + text2);
}

function addedtext() {
    printedtext();
    window.alert("But I love Arizona most of all.")
}

addedtext();