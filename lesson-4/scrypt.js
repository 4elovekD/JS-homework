//1

/* let arr = [1, 2, 3, 4, 5];

for (i= 0; i<arr.length; i++){
     document.write(arr[i]);
} */

//2

/* let arr = [-2, -1, -3, 15, 0, -4, 2, -5, 9, -15, 0, 4, 5, -6, 10, 7];

for (i = 0; i <= arr.length; i++) {
  if (arr[i] > -10 && arr[i] < -3) {
    console.log(arr[i]);
  } else {
    continue;
  }
} */

//3

/*  let arr = [],
     sum =0,
     arr1 = [];

for (i= 23; i<= 57; i++){
    arr.push(i);
}console.log(arr);

let a =23;

while (a<=57){
    arr1.push(a);
    a++;
}console.log(arr1);

//Сумма
for(j=0; j< arr.length; j++){
    sum = sum+arr[j];
} console.log('Сумма: ' + sum); */

//4

/* let arr = ["10", "20", "30", "50", "235", "3000"];

for (i = 0; i < arr.length; i++) {
  if (arr[i][0] != 1 && arr[i][0] != 2 && arr[i][0] != 5) {
    continue;
  }else{
    console.log(arr[i]);
  }
} */

/* //5
let arr= [' Пн ', ' Вт ', ' Ср ', ' Чт ', ' Пт ', ' Сб'.bold(), ' Вс '.bold()];

for(i = 0; i<arr.length; i++){
    document.write(arr[i]);
} */

//6

/* let arr = [123, 'yes', 4, 7, 9];
arr.push('Добавлено');

arr.splice(arr.length-1);
console.log(arr); */

//7

/* let x;
let arr = [];
let err = "Invalid numbers";

do {
  x = prompt("Enter value");

  arr.push(x);
} while (!(x === ""));
arr.splice(arr.length-1);
arr.sort(function(a, b){
    return a-b;
});
console.log(arr); */

//8

/* let arr =  [12, false, 'Текст', 4, 2, -5, 0];
arr.reverse();

let i = -1 ; //Почему?
while(i<arr.length-1){
    i++;
    console.log(arr[i]);
} */

//9

/* let arr = [5, 9, 21, , , 9, 78, , , , 6],
    arr1 = [],
    sbpr;

for(i = 0; i<arr.length; i++){
    if(arr[i] != undefined){
        arr1.push(i);
    } else{
        continue;
    }

}
sbpr= arr.length - arr1.length;
console.log('Колличество пустых элементов: ', sbpr); */

//10

/* let arr = [48, 9, 0, 4, 21, 2, 1, 0, 8, 84, 76, 8, 4, 13, 2],
    arr1 = [1, 8, 0, 13, 76, 8, 7, 0, 22, 0, 2, 3, 2],
    sum = 0,
    sum1 = 0;

  if(arr.indexOf(0)>= 0 && arr.lastIndexOf(0)>= 0){
    for(i = arr.indexOf(0)+1; i< arr.lastIndexOf(0); i++){
        sum = sum + arr[i];
    }
  } else{
    console.log(0);
  }

  if(arr1.indexOf(0)>= 0 && arr1.lastIndexOf(0)>= 0){
    for(i = arr1.indexOf(0)+1; i< arr1.lastIndexOf(0); i++){
        sum1 = sum1 + arr1[i];
    }
  } else{
    console.log(0);
  }

  console.log('Сумма первого массива: ', sum);
  console.log('Сумма второго массива: ',sum1); */

//11

/* let x = prompt("Введите высоту треугольника");
if (x != Number(x)) {
  console.log("Введите число!!!");
}
for (i = 0; i < x; i++) {
  space = "";
  triangle = "";
  for (j = 0; j < x - i; j++) space += " ";
  for (j = 0; j < 2 * i + 1; j++) triangle += "^";

  console.log(space + triangle);
} */
