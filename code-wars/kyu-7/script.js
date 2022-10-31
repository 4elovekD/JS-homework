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

//11 https://www.codewars.com/kata/563cf89eb4747c5fb100001b/train/javascript

/*   function removeSmallest(numbers) {
    const copy = numbers.slice(0)
    let smallestValue = numbers.indexOf(Math.min(...numbers))
    copy.splice(smallestValue, 1);
    return copy
   }

console.log(removeSmallest([2,1,1,4,5]));  */

//12 https://www.codewars.com/kata/54bf85e3d5b56c7a05000cf9/train/javascript

/* function number (array){
  return array.map((item,index) =>{
    return Number(index+1) + ': ' + item
  })
}

console.log(number (["a", "b", "c",'d']));  */

//13 https://www.codewars.com/kata/57cc981a58da9e302a000214/train/javascript

/* function smallEnough(a, limit){
  let b = ''
  let arr = a.filter(n =>{if (n <= limit) return true
  })
  if(a.length > arr.length) return b =  false
  else return b = true
} 

console.log(smallEnough([2,4,5,32,5], 10));  */

//14 https://www.codewars.com/kata/545a4c5a61aa4c6916000755/train/javascript

/* function gimme (triplet) {
  let arr =[];
  triplet.forEach(item =>{arr.push(item)})
  arr.sort((a,b)=> a-b)
  const n = triplet.findIndex(index =>index == arr[1])
  return n
}

gimme ([4,2,3]) */

//15  https://www.codewars.com/kata/5a3dd29055519e23ec000074/train/javascript

/* function checkExam(array1, array2) {
  let score = 0;
  array1.forEach((item, index) => {
    if (array2[index] == "") return
    if (array1[index] == array2[index]) {
      return (score += 4);
    } else return (score += -1);
  });
  if (score < 0) return score = 0
  else return score;
}

checkExam(["b", "c", "b", "a"], ["",  "a", "a", "c"]) */

//16 https://www.codewars.com/kata/5b16490986b6d336c900007d

/* function myLanguages(results) {
  const arr = [];
  const abjArr = Object.entries(results);
  abjArr.sort((a, b) => b[1] - a[1]);
  abjArr.forEach(([key, value]) => {
    if (value < 60) return;
    else arr.push(key);
  });
  return arr;
}

myLanguages({ Java: 10, Ruby: 80, Python: 65 }); */



//17 https://www.codewars.com/kata/51f41b98e8f176e70d0002a8/train/javascript

/* sortme = function( names ){
  return names.sort()
} */


//18 https://www.codewars.com/kata/582746fa14b3892727000c4f/train/javascript

/* function countDevelopers(list) {
  let a = 0;
 list.filter(item =>{
    if (item.continent == "Europe" && item.language == 'JavaScript') return a = a +1
    else return 
  })
  return a
} */

//19 https://www.codewars.com/kata/55fd2d567d94ac3bc9000064/train/javascript

/* function rowSumOddNumbers(n) {
	return n**3
} */


//20 https://www.codewars.com/kata/511f11d355fe575d2c000001/train/javascript

/* function twoOldestAges(ages){
  return ar = ages.sort((a,b)=> a-b)
                  .slice(-2)
}
twoOldestAges([1, 2, 10, 8]) */