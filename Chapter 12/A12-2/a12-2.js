let get_form = document.getElementById("getnum");
get_form.addEventListener("submit", function(event) {
    let num1 = document.getElementById("num1").value,
        num2 = document.getElementById("num2").value,
        largenum = 0,
        smallnum = 0;
    num1 = (+num1 === 0) ? 0 : +num1 || false;
    num2 = (+num2 === 0) ? 0 : +num2 || false;
    event.preventDefault();
    if ((num1 !== false) && (num2 !== false)) {
        largenum = Math.max(num1, num2);
        smallnum = Math.min(num1, num2);
        if (largenum === smallnum) {
            result.innerHTML = "The two numbers input are equal.";
            random_num();
        } else {
            result.innerHTML = largenum + " is larger than " + smallnum;
            random_num();
        }
    } else {
        result.innerHTML = "Please enter only numeric values.";
        random_num();
    }
}, false);

function random_num() {
    let nums = [3, 10, 30, 23, 21, 12, 13, 40, 50],
        rdiv = document.getElementById("random_nums"),
        rand1 = Math.floor(Math.random() * 9),
        rand2 = Math.floor(Math.random() * 9),
        rand3 = Math.floor(Math.random() * 9);
    rdiv.innerHTML = "The random numbers are:" + "<br>" + nums[rand1] + "<br>" + nums[rand2] + "<br>" + nums[rand3];

    sumdiv = document.getElementById("thesum"),
        the_sum = nums[rand1] + nums[rand2] + nums[rand3];
    sumdiv.innerHTML = "The total of the numbers is <strong>" + the_sum + "</strong>.";

    avgdiv = document.getElementById("theavg"),
        the_avg = (nums[rand1] + nums[rand2] + nums[rand3]) / 3;
    avgdiv.innerHTML = "The average of the numbers is <strong>" + the_avg + "</strong>.";
}