//1

/* function getResult(a,b,c){
    console.log((a-b)/c)
}

getResult(12,6,2); */

//2

/* function getDegree(a){
    return (a*a*a)*(a*a*a);
}

let result = getDegree(7);
console.log(result); */

//3

/* function min(a,b){
    if ((a-b)<(b-a)) console.log(a)
    else {
        console.log(b);
    }
}

function max(a,b){
    if ((a-b)>(b-a)) console.log(a)
    else {
        console.log(b);
    }
}

min(10,125);
max(110,130); */

//4

/* function getArray(x, y) {
  let arr = [];
  for (i = x; i <= y; i++) {
    arr.push(i);
  }
  console.log(arr);
}
let x = prompt("Ввведите диапазон"),
y = prompt("Ввведите диапазон");

function printArray(){
    let array = getArray(Number(x), Number(y));
}

printArray(); */

//5

/* function isEven(even) {
  if (even % 2 == 0) return true;
  else {
    return false;
  }
}

let result = isEven(9);
console.log(result); */

//6

/* let arr = [5, 16, 6, 9, 1, 8, 10, 3];
function Even(arr) {
  for (i = 0; i < arr.length; i++) {
    if (!isEven(arr[i])) {
      arr.splice(i, 1);
      i--;
    }
  }
  return arr;
}

console.log(Even(arr)); */

//7

/* function pyramid(n) {
  for (i = 1; i <= n; i++) {
    for (j = 1; j <= i; j++) {
      document.write(' ' + i + ' ');
    }
    document.write("<br>");
  }
}

pyramid(7); */

//8

/* let x = prompt("Введите высоту треугольника");
if (x != Number(x)) {
  console.log("Введите число!!!");
}

function triangle (){

for (i = 0; i < x; i++) {
  space = "";
  triangle = "";
  for (j = 0; j < x - i; j++) space += " ";
  for (j = 0; j < 2 * i + 1; j++) triangle += "*";
  console.log(space + triangle);

} 
}

triangle(x); */

//9

/* function arr(n){
    let array = [0,1];
    for (i = 2; i<=n; i++){
        for(j = 1; j<i; j = j+i){
            array[i]= array[i-1] + array[i-2];
        }
    }
    console.log(array);
}

arr(1000); */

//10

/* function number(a) {
  a = String(a);
  let sum = 0;
    for( i =0; i<a.length; i++){
      sum += Number(a[i]);
    }

    if(sum>9){
      return number(sum);
    }else {
      return sum;
    }
  }

  a = 143;
  console.log(number(a)); */

//11

/* function printArr (arr){
  console.log(arr[i]);
  i++;

  if (i<arr.length) printArr(arr);
}

let i = 0;

printArr([5,2,6,8,2,4,6,8,10]); */

//12

/* function info(name, groupNum) {
  let dz = 'Домашняя работа: "Функции"'
  name = prompt("Укажите ФИО", 'Нефёдов Вячеслав Владимирович'),
  groupNum = prompt("Введите номер группы", ' PW 1235');
  
  console.log(dz,'\nВыполнил: студент гр. ',groupNum ,'\n',name);
}

info(); */
