function set_it() {
    let user_input = prompt("Enter your name", ""),
        test1 = "name=" + encodeURIComponent(user_input),
        expdate = ";expires=Tue, 30 Nov 2021 13:00:00 UTC";
    test1 += expdate;
    document.cookie = test1;
}

function read_it() {
    let mycookie = document.cookie,
        cookiename = mycookie.split("=");
    document.write("Welcome, " + decodeURIComponent(cookiename[1]) + "!");
}

if (document.cookie) {
    read_it();
} else {
    set_it();
    read_it();
}