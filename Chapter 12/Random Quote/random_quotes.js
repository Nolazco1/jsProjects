let quotes = ["Look in the mirror are you looking at me?",
    "It is time for a rhyme, I guess",
    "Where is my JavaScript book?",
    "If I had a buck for every dollar I spent--Opps, never mind.",
    "I suppose you were expecting a real quote here.",
    "Quotes are great, but don't quote me on that.",
    "What should I write here?",
    "Wut hapns iff eye miss spel ohn purpas?",
    "Mark my words, I will mark my words.",
    "This spot reserved for a better quote."
];
let q_div = document.getElementById("my_quote");
let rand_int = Math.floor(Math.random() * 10);
q_div.innerHTML = quotes[rand_int];