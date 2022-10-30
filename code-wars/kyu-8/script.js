/* const people = [
    {name: 'Alex' , age: 25, budget: 35000},
    {name: 'George' , age: 20, budget: 20000},
    {name: 'Vella' , age: 23, budget: 30000},
    {name: 'Chris' , age: 13, budget: 23000},
    {name: 'Velliant' , age: 16, budget: 1000}
] */

//ForEach
/* people.forEach((person)=> console.log(person)) */

//map
/* const newPeople = people.map(person =>person.age *3)
console.log(newPeople); */

//Filter
/* const adults = [] = people.filter(person => person.age >=18);

console.log(adults) */

//Find
/* const vella = people.find(person => person.name == 'Vella')
console.log(vella) */

//FindIndex
/* const vellaIndex = people.findIndex(person => person.name == 'Vella')
console.log(vellaIndex) */

//==========

/* const newPeople = people
    .filter(person => person.budget > 3000)
    .map(person => {
        return {
            info: `${person.name} (${person.age})`,
            budget: person.budget
        }
    })

console.log(newPeople); */

//1  https://www.codewars.com/kata/5715eaedb436cf5606000381

/* function positiveSum(arr) {
  const arr1 = arr.filter(number => Number(number) > 0)
                    .reduce((sum, elem)=>{return sum + elem}, 0);
  return arr1
}  */

//2 https://www.codewars.com/kata/54edbc7200b811e956000556/train/javascript

/* function countSheeps(arrayOfSheep) {
    count = 0
    arrayOfSheep.filter(sheep =>{
         if (sheep == true) count += 1
    })
    return count
  } */

//3 https://www.codewars.com/kata/56676e8fabd2d1ff3000000c/train/javascript

/*   function findNeedle(haystack) {
    const needleIndex = haystack.findIndex(word =>word == 'needle')
    return "found the needle at position " + String(needleIndex);
  } */

//4 https://www.codewars.com/kata/576bb71bbbcf0951d5000044

/* function countPositivesSumNegatives(input) {
  let arr = [];
  let positiveSum = 0;
  let negativeSum = 0;
  if (input == null || input.length == 0)
      return arr
  input.filter((number) => {
    if (number > 0 && number != 0) return (positiveSum += 1);
    else return (negativeSum += number);
  });
  arr.push(positiveSum, negativeSum);
  return arr; 
} */


//5 https://www.codewars.com/kata/53dc54212259ed3d4f00071c

/* function sum (numbers) {
    return numbers.reduce((sum,elem)=>{
        return sum + elem}, 0)
}; */


//6 https://www.codewars.com/kata/5899dc03bc95b1bf1b0000ad/train/javascript

/* function invert(array) {
    return array.map(item=>{return item * -1}); 
} */
 

//7 https://www.codewars.com/kata/57a2013acf1fa5bfc4000921

/* function findAverage(array) {
    return array.reduce((sum,elem)=>{
        return sum + elem /array.length
    },0); 
} */


//8 https://www.codewars.com/kata/57eae65a4321032ce000002d

/* function fakeBin(x){
   const arr = x.split('').map(number =>{
    if (number <5) return 0
    else return 1
   })
    return arr.join(''); 
}
fakeBin('366058562030849490134388085') */


//9 https://www.codewars.com/kata/57cc975ed542d3148f00015b/train/javascript

/* function check(a, x) {
    result = '';
    a.find(item =>{
        if (item == x) return result = true
        else return result = false
    }) 
    return result;  
}

function check(a,x){
  return a.includes(x);
};

check([1,4,5,2,3,452,3], 2) */


//10 https://www.codewars.com/kata/57f780909f7e8e3183000078

/* function grow(x){
    return x.reduce((prev,n)=>{return prev*n}); 
} */