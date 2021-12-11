let s_form = document.getElementById("signup_form");
s_form.addEventListener("submit", function(event) {
    let agree = document.getElementById("agree");
    if (!agree.checked) {
        event.preventDefault();
        alert('Error: The "Agree to Terms" checkbox must be checked');
    }
}, false);