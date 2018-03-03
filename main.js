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

// Challenge #3: Find the unique number_____________________________________________
// Given an array of more than 3 numbers where all numbers are equal except for one. Display the one unique number!

var challengeThreeInputA = [ 1, 1, 1, 2, 1, 1 ];  // 2
var challengeThreeInputB = [ 0, 0, 0, 0, 0, 0, 0, 0.55, 0, 0 ];  // 0.55
var emprtyArrayAnswer = [];
var challenge3Answer = document.getElementById("challenge-3");

for(var q=0; q<challengeThreeInputB.length; q++){
  if(challengeThreeInputB[q] !== challengeThreeInputB[q-1] && challengeThreeInputB[q] !== challengeThreeInputB[q+1]){
    emprtyArrayAnswer.push(challengeThreeInputB[q]);
  }
}
challenge3Answer.innerHTML = "<h5>" + emprtyArrayAnswer + "<h5>";

// Challenge #4: Lost Without a Map________________________________________________
// Given an array of any number of integers display the array with each value doubled.

var challengeFourInputA = [ 1, 2, 3 ];  // [2, 4, 6]
var challengeFourInputB = [ 3, 8, 1, 2, 4, 12 ];  // [ 6, 16, 2, 4, 8, 24 ]
var challenge4AnswerA = [];
var challenge4AnswerB = [];
var answer = document.getElementById("challenge-4");

for(var k=0; k<challengeFourInputA.length; k++){
  challenge4AnswerA.push((challengeFourInputA[k]*2));
}
answer.innerHTML += "<h5>" + challenge4AnswerA + "</h5>";

// Challenge #5: Array.diff_____________________________________________
// Given two arrays remove all values from array1 that are present in array2.

// Example 1:
var array1 = [1,2];
var array2 = [1];
//display = [2]

// Example 2:
var array1 = [1,2, 4, 7, 5, 9];
var array2 = [5, 9, 2];
//display = [1, 4, 7]
var resultArray = [];
var challenge5Answer = document.getElementById("challenge-5");

for(var b=0; b<array1.length; b++){
    if(array2.indexOf(array1[b]) ===-1){
      resultArray.push(array1[b]);
    }
}
challenge5Answer.innerHTML += "<h5>" + resultArray + "</h5>";

// Challenge 6______________________________________________________
// You're working in a number zoo, and it seems that one of the numbers has gone missing! Given an array of numbers. The numbers will be unsorted values between 1 and one more than the length of the array. No values will be repeated within the array. displaythe number that is missing.

// Examples:
var test1 = [1,3]; // 2
var test2 = [2,3,4]; // 1
var test3 = [13,11,10,3,2,1,4,5,6,9,7,8]; // 12
var answer = document.getElementById("challenge-6");
var maxvalue = test3.length+1;
var challenge6Answer;

for(var i=1; i<maxvalue; i++){
  if(test3.indexOf(i) == -1){
    challenge6Answer= [i];
  }
}
answer.innerHTML = "<h5>" + challenge6Answer + "</h5>";
