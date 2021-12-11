let phonebutton = document.getElementById("phonebutton");
phonebutton.addEventListener("click", function(event) {
    let phone1 = document.getElementById("phone1").value,
        tomatch = /^\d{3}[\s]\d{3}[\s]\d{4}$/;
    event.preventDefault();
    if (!tomatch.test(phone1)) {
        alert("The phone number must be formatted as follows: XXX XXX XXXX");
    } else {
        alert("Your phone number was formatted correctly.")
    }
}, false);


let getphone2 = document.getElementById("getphone2");
getphone2.addEventListener("submit", function(event) {
    let phone2 = document.getElementById("phone2").value,
        tomatch = /^[(]\d{3}[)]\d{3}-\d{4}$/;
    event.preventDefault();
    if (!tomatch.test(phone2)) {
        alert("The phone number must be formatted as follows: (XXX)XXX-XXXX");
    } else {
        alert("Your phone number was formatted correctly.")
    }
}, false);