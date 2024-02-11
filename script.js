function generateFact() {
    const facts = [
        "Football is the world's most popular sport.",
        "The FIFA World Cup is held every four years.",
        "Brazil has won the most World Cup titles with 5 championships.",
        "Lionel Messi and Cristiano Ronaldo are considered two of the greatest football players of all time.",
        "A standard football field is about 100 yards long and 50 yards wide.",
        "The fastest goal in football history was scored in 2.8 seconds.",
        "The first international football match took place in 1872 between England and Scotland.",
        "The football pitch at Maracanã Stadium in Brazil is the largest in the world.",
    ];

    const randomIndex = Math.floor(Math.random() * facts.length);
    const factText = facts[randomIndex];

    document.getElementById("fact-text").innerHTML = factText;

    // Update the fact link value
    const factLink = window.location.href.split('?')[0] + '?fact=' + encodeURIComponent(factText);
    document.getElementById("fact-link").value = factLink;
}

function copyToClipboard() {
    const factLink = document.getElementById("fact-link");
    factLink.select();
    document.execCommand("copy");
    alert("Copied to clipboard!");
}
