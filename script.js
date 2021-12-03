// lesson06
//игровой бот.
//"Загадывание случайного числа от 1 до 100"

function gameBot() {
  const randomNum = Math.floor(Math.random() * 100) + 1;

  const isNumber = function (num) {
    return !isNaN(parseFloat(num)) && isFinite(num);
  };

  function inputNumber() {
    let userNum = prompt("Угадай число от 1 до 100");

    if (userNum === null) {
      return alert("Игра закончена");
    } else if (isNumber(userNum)) {
      userNum = +userNum;
      if (userNum > randomNum) {
        alert("Загаданное число меньше, введите новый вариант числа");
      } else if (userNum < randomNum) {
        alert("Загаданное число больше, введите новый вариант числа");
      } else if (userNum === randomNum) {
        alert("Поздравляю, Вы угадали!!!");
        return userNum;
      }
    } else {
      alert("Введите число!");
    }
    return inputNumber();
  }
  console.log(inputNumber());
}
gameBot();

//const min = 1;
//const max = 100;
//let randomNum = function (1, 100) {
// min = Math.ceil(min);
//max = Math.floor(max);
//return Math.floor(Math.random() * (max - min + 1)) + min; //Максимум и минимум включаются
//};

/*
const randomNum = Math.floor(Math.random() * 100) + 1;
const randomNum1 = parseInt(Math.random() * 100) + 1;
console.log(randomNum1 === randomNum);
*/
