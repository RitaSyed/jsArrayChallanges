// Challenge 1 ________________________________________________________

// Given a string of 2 words, find the highest scoring word. Each letter of a word scores points according to it's position in the alphabet: a = 1, b = 2, c = 3 etc. All letters will be lowercase there will be no punctuation. Display (id='challenge-1') the word that is the highest scoring. If two words score the same, display the word that appears earliest in the original string.

// var challengeOneInput = "jumbo shrimp";  //jumbo=61, shrimp=83 should display shrimp

var challengeOneInput = "jumbo shrimp";  //jumbo=61, shrimp=83 should display shrimp
var test = challengeOneInput.split(" ");
var firstWord = test[0].split('');
var secondWord = test[1].split('');
var alphabet = "abcdefghijklmnopqrstuvwxyz";
var firstWordCount = 0;
var secondWordCount = 0;
var challenge1Answer = document.getElementById("challenge-1");

for(var i=0; i<firstWord.length; i++){
  firstWordCount +=alphabet.indexOf(firstWord[i])+1;
}
for(var i=0; i<secondWord.length; i++){
  secondWordCount +=alphabet.indexOf(secondWord[i])+1;
}

if(firstWordCount===secondWordCount){
  challenge1Answer.innerHTML += "<h5>" + firstWord.join("") + "</h5>";
} else if(firstWordCount > secondWordCount){
  challenge1Answer.innerHTML += "<h5>" + firstWord.join("") + "</h5>";
  } else {
  challenge1Answer.innerHTML += "<h5>" + secondWord.join("") + "</h5>";
    }
