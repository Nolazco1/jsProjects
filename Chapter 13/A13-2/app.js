let getzip = document.getElementById("getzip");
getzip.addEventListener("submit", function(event) {
    let zipcode_add = document.getElementById("zipcode").value,
        tomatch = /^\d{5}(-\d{4})$/,
        valid_zip = tomatch.test(zipcode_add);
    if (valid_zip) {
        alert("The entry " + zipcode_add + " is a valid entry! Thank you!");
    } else {
        alert("The entry " + zipcode_add + " is not valid. Please try again.");
    }
}, false);