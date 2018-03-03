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