function coordinate(event) {
    var x=event.clientX;
    var y=event.clientY;
    document.getElementById("x").value=x;
    document.getElementById("y").value=y;
}



const naughty = ["Fir trees can grow in human lungs", "If the sun exploded, you wouldn't know for 8 minutes", "Most people hear voices in their childhood", "The FBI estimates there are 25 - 50 active serial killers in the US", "Horned toads squirt blood out of their eyes", "'A Nightmare on Elm Street' is based on a real story", "You will shed roughly 40lbs of skin during your life", "Some fish have human-like teeth", "Vampire moths exist", "Pigs will eat anything, including you"];

const nice = ["You're beautiful", "Be proud of yourself", "You're smarter than you think", "You've earned yourself a yummy meal", "You're sunshine on a rainy day", "The world is lucky you're in it", "I bet you sweat sparkles", "You'd be great in a zombie apocalypse", "You seem like a put together adult", "You radiate more than the sun"];


function myfunc(event) {
    if (event.button == 0) {
        const random = Math.floor(Math.random() * naughty.length);
    
        alert(naughty[random]);
    }

    else if (event.button == 2) {
        const random = Math.floor(Math.random() * nice.length);

        alert(nice[random]);
    }
}

