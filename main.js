console.log("hello")
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