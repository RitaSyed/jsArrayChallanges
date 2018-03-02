console.log("hello")

// Given a string of 2 words, find the highest scoring word. Each letter of a word scores points according to it's position in the alphabet: a = 1, b = 2, c = 3 etc. All letters will be lowercase there will be no punctuation. Display (id='challenge-1') the word that is the highest scoring. If two words score the same, display the word that appears earliest in the original string.

// var challengeOneInput = "jumbo shrimp";  //jumbo=61, shrimp=83 should display shrimp

// var alphabet = ["a","b","c"];
// var found = challengeOneInput.match(alphabet);
// console.log("letters", found);

// var count = 1;

// for(var i=0; i<alphabet.length; i++){
//   if (letters == match(challengeOneInput)){

//   }
//   console.log("letters", letters[i]);
// }

// var challenge1 = document.getElementById('challenge1');

var challengeOneInput = "jumbo shrimp";  //jumbo=61, shrimp=83 should display shrimp

var test = challengeOneInput.split(" ");

var firstWord = test[0].split('');
var secondWord = test[1].split('');
var alphabet = "abcdefghijklmnopqrstuvwxyz";


// console.log("secondWord", secondWord.match(alphabet));
// console.log("indexOf j", alphabet.indexOf('j')+1);

var firstWordCount = 0;
var secondWordCount = 0;
for(var i=0; i<firstWord.length; i++){
  firstWordCount +=alphabet.indexOf(firstWord[i])+1;
}
var challenge1Answer = document.getElementById("challenge-1");
for(var i=0; i<secondWord.length; i++){
  secondWordCount +=alphabet.indexOf(secondWord[i])+1;
}

if (firstWordCount > secondWordCount){
  challenge1Answer.innerHTML += "<h5>" + firstWord.join("") + "</h5>";
} else {
  challenge1Answer.innerHTML += "<h5>" + secondWord.join("") + "</h5>";
}
