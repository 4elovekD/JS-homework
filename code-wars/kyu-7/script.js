
//1
/* function squareSum(numbers){
    let sum = 0;
    
      for(let i = 0; i < numbers.length; i++) {
        sum += numbers[i] * numbers[i]; 
      }
    
    return sum;} */

//2

/* function digitize(n) {
    n = String(n).split('').reverse().map(Number);
    return n;
  } */

//3

/* function maps(x){
    let result = x.map(number=> number+number)
    return result
   } */

//4
//Given a list of integers, determine whether the sum of its elements is odd or even.
//Give your answer as a string matching "odd" or "even".
//If the input array is empty consider it as: [0] (array with a zero).

/* function oddOrEven(array) {
    array.reduce((sum, elem)=>{
        return sum + elem
    }, 0)
    if (array%2 == 0 ){return 'odd'} else {return 'even'}
}
 */
/*  function oddOrEven(array) {
    return array.reduce(function(sum, item) {
      return sum + item}, 0) % 2 == 0 ? 'even' : 'odd';
  }
 */

//5
//https://www.codewars.com/kata/559590633066759614000063/train/javascript

/* function minMax(arr){
    let arr1 = arr.sort((a,b) => {return a-b})
    let arr2 = []
    arr2.push(arr1[0], arr1[arr1.length-1])
    return arr2
  }
 */

//6
//https://www.codewars.com/kata/558fc85d8fd1938afb000014

/* function sumTwoSmallestNumbers(numbers) {
  let arr2 = [];
  let arr3 = [];
  let arr1 = numbers.sort((a, b) => {
    return a - b;
  });
  arr1.filter((number) => {
    if (number > 0) arr2.push(number);
  });
  arr3.push(arr2[0], arr2[1]);
  return arr3.reduce(function(sum, item) {
    return sum + item}, 0)
} */

//7
//https://www.codewars.com/kata/57ea5b0b75ae11d1e800006c/train/javascript

/* function sortByLength(array){
   return array.sort((a,b) => {return a.length -b.length})
  } */

//8
//https://www.codewars.com/kata/539ee3b6757843632d00026b

/* let capitals = function (word) {
	let indexArr = []
    let strSplit = word.split('')
    for (i = 0; i < strSplit.length; i++){
        if (strSplit[i] === strSplit[i].toUpperCase()) indexArr.push(i)}
    return indexArr
} */

//9
//https://www.codewars.com/kata/51fd6bc82bc150b28e0000ce/train/javascript

/* function noOdds( values ){
    let arr2 = []
    values.filter((number)=> {
        if (number%2 == 0 ){arr2.push(number)}
    })
    return arr2
  } */

  //10
  //https://www.codewars.com/kata/5813d19765d81c592200001a/train/javascript

/* function dontGiveMeFive(start, end) {
  let arr1 = [];
  for (i = start; i <= end; i++) {
    if (String(i).indexOf(5) != -1) continue
    else arr1.push(i);
  }  return arr1.length} */
