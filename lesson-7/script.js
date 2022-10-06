//1

/* let Calculator = function () {
  this.get = function () {
    this.a = +prompt("Введите число a");
    this.b = +prompt("Введите число b");
    this.oper = prompt("Введите операцию: +, -, *, /");

    this.operation();
  };

  this.operation = function () {
    switch (this.oper) {
      case "+":
        this.result = this.a + this.b;
        break;
      case "-":
        this.result = this.a - this.b;
        break;
      case "*":
        this.result = this.a * this.b;
        break;
      case "/":
        this.result = this.a / this.b;
        break;
        default: this.result = 0;

        
    }
    this.showResault();
  };

  this.showResault = function () {
    alert(this.a + ' ' + this.oper + ' ' + this.b + ' = ' + this.result);
  };
};

let calc = new Calculator();
calc.get(); */

//2

/* let Auto = function () {
  this.info = function () {
    this.name = prompt("Введите название автомобиля");
    this.model = prompt("Модель автомобиля");
    this.age = +prompt("Год выпуска автомобиля");

    this.parametrs();
  };

  this.parametrs = function () {
    this.speed = +prompt("Введите скорость (км/ч)");
    this.fuelTank = +prompt("Объём бака (л)");
    this.time = +prompt("Время в пути (ч)");

    this.results();
  };

  this.results = function () {
    this.distance = this.speed * this.time;
    this.consumption = this.distance / 10;
    this.restFuel = this.fuelTank - this.consumption;
    if (this.restFuel < 0) {
      this.restFuel = "Одним баком не обойдётся!";
    }

    this.showRes()
  };

  this.showRes = function(){
    alert(
        "Итак: Ваш автомобиль: " + this.name + " " + this.model + ". Проедет " + this.distance + "км. " + "Расход топлива на 100км составит: " + this.consumption + 'л.' + " Остаток топлива в баке - " + this.restFuel);
  }

};

let sumResult = new Auto();
sumResult.info(); */

//3

/* let Game = function () {
  this.playerInfo = function () {
    this.name = prompt("Придумайте имя Вашему герою");
    this.gender = confirm("Мужчина - Ок  Женщина - cancel");
    this.age = prompt("Сколько Вам лет??");
    this.health = 100;
    this.begin();
  };

  this.begin = function () {
    if (this.gender == true){
        alert(
            "Вот и начинается наше путешествие по темному лабиринту, уважаемый " + this.name + "\n");
    }

    if (this.gender == false){
        alert(
            "Вот и начинается наше путешествие по темному лабиринту, уважаемая " + this.name + "\n");
    }


    this.levelFirst();
  };

  this.levelFirst = function () {
    alert(
      "Уровень 1" +
        "\n" +
        "Суть игры заключается в выборе направления движения (это всё-таки лабиринт). В общем, ваша жизнь в ваших руках" +
        "\n" +
        "Для поворота используйте кнопки <п> и <л> (право и лево соответственно). А, чуть не забыл. У Вас 100хп"
    );
    this.firstRoute = prompt("Ваш первый поворот");

    if (this.firstRoute == "п") {
      alert(
        "Жестить по-началу не будем, Вам очень повезло - Вы живы, продолжаем"
      );
    } else if (this.firstRoute == "л") {
      alert(
        "Жестить по-началу не будем, Вам очень повезло - Вы живы, продолжаем"
      );
    } else if (this.firstRoute !== "п" || this.firstRoute == "л") {
      this.levelFirst();
    }

    this.secondRoute = prompt("Итак, поворот номер 2. Выбирайте с умом!");
    if (this.secondRoute == "п") {
      alert("Вот и первая неудача. Вы наступили на ежа! (-10хп)");
      alert((this.health = this.health - 10));
    } else if (this.secondRoute == "л") {
      alert(
        "Не отчаивайтесь жить можно и без одной ноги. Вы наступили на злую капибару  (-35хп)"
      );
      alert((this.health = this.health - 35));
    } else if (this.secondRoute !== "п" || this.secondRoute == "л") {
      this.secondRoute;
    }
    this.levelSecond();
  };

  this.levelSecond = function () {
    alert("Уровень 2");
    this.firstRoute = prompt(
      "Вы подходите к Т-образному перекрестку. Ваш выбор?"
    );
    if (this.firstRoute == "п") {
      alert(
        "Вы нашли гриб, похожий на мухомор. Отчаитесь ли Вы его попробовать?"
      );
      this.choiceMushroom = confirm("Кушаем?");
      if (this.choiceMushroom == true) {
        alert(
          "Фортуна Вам улыбается. Оказалось что это редкий вид гриб-регена  (+10хп)"
        );
        alert((this.health = this.health + 10));
      } else if (this.choiceMushroom == false) {
        alert("Ну, тогда идём дальше");
      }
    }
    if (this.firstRoute == "л") {
      alert("Ничего необычного, идём дальше");
      this.levelThird();
    } 
    if (this.firstRoute !== "п" || this.firstRoute == "л") {
      this.levelSecond();
    }

    this.levelThird();
  };

  this.levelThird = function () {
    alert("Уровень 3");
    this.firstRoute = prompt("Поворот, решающий судьбу");
    if (this.firstRoute == "п") {
      alert("Вы угодили в клуб любителей бэкенда.");
      alert("Вы проиграли, состарившись.");
      EndGame();
    }
    if (this.firstRoute == "л"){
        alert('Поздравляю! ' + this.name + '. Вы победили! Сегодня определенно ваш день, купите лотерейку');
        EndGame();
    }
  };
};



let gameBegin = new Game();
gameBegin.playerInfo();
let EndGame = function(){alert('Вот и всё. Спасибо за внимание!')} */