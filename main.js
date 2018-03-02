// Challenge #3: Find the unique number
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