//1
let name, age, city, phone, email, company;

name = prompt("Ваше имя", "Слава");
age = prompt("Ваш возраст", 24);
city = prompt("Ваш город", "Минск");
phone = prompt("телефон", "+375336286661");
email = prompt("Почта", "example@mail.ru");
company = prompt("Компания", "MaHaNa");

//2
document.write(
  "Меня зовут ",
  name,
  " Мне ",
  age,
  " года. ",
  " Я проживаю в городе ",
  city,
  " и работаю в компании ",
  company,
  ". ",
  " Мои контактные данные: ",
  phone,
  " ",
  email
);

//3
let year = 2022 - age;
document.write("<br />", name, " родился в ", year, " году");

let stroka = "258258";
if (stroka[0] + stroka[1] + stroka[2] == stroka[3] + stroka[4] + stroka[5]) {
  console.log("Да");
} else {
  console.log("Нет");
}

//4
let a = 1;

if (a > 0) {
  console.log("Верно");
} else {
  console.log("Неверно");
}

//5
let a1 = 10,
  b = 2;

(sum = a1 + b), (subtraction = a1 - b), (multi = a1 * b), (division = a1 / b);

if (sum > 1) {
  sum = sum * sum;
}

console.log(sum, subtraction, multi, division);

//6
if ((a1 > 2, a1 < 11 && b >= 6, b < 14)) {
  console.log("Верно");
} else {
  console.log("Неверно");
}

//7
let n = 42;

if (n >= 0 && n <= 15) {
  console.log("Первая четверть часа");
} else if (n > 15 && n <= 30) {
  console.log("Вторая четверть часа");
} else if (n > 30 && n <= 45) {
  console.log("Третья четверть часа");
} else if (n > 45 && n <= 59) {
  console.log("Четвёртая четверть часа");
}

//8
let day = 23;

if (day >= 1 && day <= 9) {
  console.log("Первая декада");
} else if (day >= 10 && day <= 20) {
  console.log("Вторая декада");
} else if (day >= 21 && day <= 31) {
  console.log("Третья декада");
} else {
  console.log("Видимо больше месяца");
}

//9
let dayinyear,
  dayinmonth,
  dayinweek,
  dayinhour,
  dayinsec,
  d = 385;

dayinyear = d / 365;
dayinmonth = d / 31;
dayinweek = d / 7;
dayinhour = d * 24;
dayinmin = d * 1440;
dayinsec = d * 86400;

if (dayinyear < 1) {
  console.log("Меньше года");
} else {
  console.log(dayinyear.toFixed(2) + " года");
}

if (dayinmonth < 1) {
  console.log("Меньше месяца");
} else {
  console.log(dayinmonth.toFixed(2) + " месяца");
}
if (dayinweek < 1) {
  console.log("Меньше недели");
} else {
  console.log(dayinweek.toFixed(2) + " недели");
}

console.log(
  dayinhour.toFixed(2),
  " часа ",
  dayinmin.toFixed(2),
  " минуты ",
  dayinsec.toFixed(2),
  " секунды"
);

//10
day = 325;
switch (true) {
  case (day >= 1 && day <= 59) || (day >= 334 && day <= 365):
    console.log("Зима");
    if (day <= 31) {
      console.log("Январь");
    } else if (day > 31 && day <= 59) {
      console.log("Февраль");
    } else {
      console.log("Декабрь");
    }
    break;

  case (day>=60 && day<=151):
    console.log('Весна')
    if (day>=60 && day<=91){
      console.log('Март');
    } else if(day>91 && day<=121){
      console.log('Апрель');
    } else {
      console.log('Май');
    }
    break;
  
  case (day>=152 && day<=244):
    console.log('Лето');
    if (day>=152 && day<=182){
      console.log ('Июнь');
    } else if (day>=183 && day<=214){
      console.log('Июль');
    } else {
      console.log('Август');
    }
    break;

  case (day>=245 && day<=333):
    console.log('Осень');
    if (day>=245 && day<=275){
      console.log('Сентябрь');
    } else if (day>=276 && day<=306){
      console.log('Октябрь');
    } else {
      console.log ('Ноябрь');
    }
    break;
}
