let getphone = document.getElementById("getphone");
getphone.addEventListener("submit", function(event) {
    let phone = document.getElementById("phone").value,
        tomatch = /^\d{3}-\d{3}-\d{4}$/;
    event.preventDefault();
    if (tomatch.test(phone)) {
        alert("Phone number validated.");
    } else {
        alert("Invalid phone number entered. Valid Format XXX-XXX-XXXX.");
    }
}, false);