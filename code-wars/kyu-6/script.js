//1  https://www.codewars.com/kata/525f50e3b73515a6db000b83

/* function createPhoneNumber(numbers){
  numbers.splice(6,0, '-')
  numbers.splice(3,0, ') ')
  numbers.unshift('(')
  return numbers.join('')
}

console.log(createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]));  */

//2 https://www.codewars.com/kata/523f5d21c841566fde000009

/* function arrayDiff(a, b) {
    return a.filter(item=>!b.includes(item))
 }

console.log( arrayDiff([1,2,3,5,6],[2,3,5])); */

//3 https://www.codewars.com/kata/54da539698b8a2ad76000228

/* function isValidWalk(walk) {
    let routeLength = '',
        n = 0, s = 0, w = 0, e = 0,
        result = '';

    walk.length == 10 ? routeLength = true : routeLength = false;
    walk.forEach(item =>{
        if (item == 's' ) return s +=1
        if (item == 'w' ) return w +=1
        if (item == 'n' ) return n +=1
        if (item == 'e' ) return e +=1
    })

    w == e && n == s && routeLength == true ? result = true : result = false
    return result
}

console.log(isValidWalk(['w']));  */

//4 https://www.codewars.com/kata/585d7d5adb20cf33cb000235

/* function findUniq(arr) {
    return arr.find(item => arr.indexOf(item) == arr.lastIndexOf(item))
  }

console.log(findUniq([ 1, 1, 1, 2, 1, 1 ]));  */

//5 https://www.codewars.com/kata/578aa45ee9fd15ff4600090d

/* function sortArray(array) {
  const arr1 = array.filter((item) => item % 2).sort((a, b) => a - b);
  return array.map((item) =>item % 2 ? arr1.shift() : item)
}

console.log(sortArray([9, 8, 7, 6, 5, 4, 3, 2, 1, 0]));  */

//6 https://www.codewars.com/kata/54b42f9314d9229fd6000d9c

/* function duplicateEncode(word){
  return word
  .toLowerCase()
  .split('')
  .map((item, index, arr) => arr.indexOf(item) == arr.lastIndexOf(item) ? '(' : ')')
  .join('');
}

console.log(duplicateEncode("recede")); */

//7 https://www.codewars.com/kata/534d2f5b5371ecf8d2000a08

/* multiplicationTable = function(size) {
  let arr = []
  for(let i = 1; i<=size; i++){
    let arr1 = []
    for(let j = 1; j<=size; j++) arr1.push(i*j)
    arr.push(arr1)
  }
  return arr
} */

//8 https://www.codewars.com/kata/525d50d2037b7acd6e000534

/* Array.prototype.square  = function () { return this.map(function(n) { return n*n; }); }
Array.prototype.cube    = function () { return this.map(function(n) { return n*n*n; }); }
Array.prototype.average = function () { return this.sum() / this.length; }
Array.prototype.sum     = function () { return this.reduce(function(a, b) { return a + b; }, 0); }
Array.prototype.even    = function () { return this.filter(function(item) { return 0 == item % 2; }); }
Array.prototype.odd     = function () { return this.filter(function(item) { return 0 != item % 2; }); } */


//9 https://www.codewars.com/kata/569d488d61b812a0f7000015

function dataReverse(data) {
  let arr1 = data.reverse()
  return arr1
}

console.log(dataReverse([1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,0,1,0,1,0,1,0]));






