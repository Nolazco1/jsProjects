let rightnow = new Date(),
    weekday = rightnow.getDay(),
    themonth = rightnow.getMonth(),
    thedate = rightnow.getDate(),
    theyear = rightnow.getFullYear();
ds = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
    date_div = document.getElementById("write_date");
themonth += 1;
date_div.innerHTML = ds[weekday] + ", " + themonth + "/" + thedate + "/" + theyear;