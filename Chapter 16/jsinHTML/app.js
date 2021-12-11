function send_alert() {
    window.alert("Hi, there is a sale today! 20% Off everything!");
    return false;
}
let s_alert = document.getElementById("sale");
s_alert.addEventListener("click", send_alert, false);