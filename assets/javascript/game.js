var computerChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var wins=0, losses=0, guesses=10, winner=false;
document.onkeyup = function(event) {
  guesses--;
  var userGuess = event.key;
  document.getElementById("userGuess").innerHTML = userGuess;
  var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
  document.getElementById("computerGuess").innerHTML = computerGuess;
  function clear(id){
    document.getElementById(id).innerHTML = "";
  }
  if(userGuess==computerGuess) {
    winner=true;
    wins++;
    guesses=10;
    clear("entries");
  } else {
    var entrySpan = document.getElementById("entries");
    var badEntry = document.createElement("span");
    badEntry.textContent = userGuess;
    entrySpan.appendChild(badEntry);
    var space = document.createElement("span");
    space.textContent = " ";
    entrySpan.appendChild(space);
    // document.getElementById("entries").appendChild = userGuess;
    if(guesses==0) {
      losses++;
      guesses=10;
      clear("entries");
    }
  }

  document.getElementById("wins").innerHTML = wins;
  document.getElementById("losses").innerHTML = losses;
  document.getElementById("guesses").innerHTML = guesses;
};
