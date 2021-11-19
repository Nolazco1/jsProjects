let urls = ["http://developer.mozilla.org",
        "http://github.com",
        "http://www.google.com",
        "http://www.twitter.com",
        "http://www.stackoverflow.com"
    ],
    rdiv = document.getElementById("random_link"),
    rand = Math.floor(Math.random() * 5);
rdiv.innerHTML = '<a href="' + urls[rand] + '">Random Site!</a>';