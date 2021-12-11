let mystring = "I like the way a new car smells, and cars are fun.",
    toreplace = /car/g,
    newstring = mystring.replace(toreplace, "skunk");
alert(newstring);