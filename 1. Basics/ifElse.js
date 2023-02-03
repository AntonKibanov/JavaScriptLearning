function getAnswer() {
    let answer = prompt("Какое «официальное» название JavaScript?",);

    if (answer == "ECMAScript") {
        alert("Верно!");
    } else {
        alert("Не знаете? ECMAScript!");
    }
}

function getSignNumber() {
    let number = prompt("Введите число:",);

    if (number > 0) {
        alert("Число положительное");
    } else if (number == 0) {
        alert("Ноль");
    } else if (number < 0) {
        alert("Число отрицательное ");
    } else {
        alert("Введите число!");
    }
}

function checkSum() {
    let a = prompt("Введите первое слагаемое:",);
    let b = prompt("Введите второе слагаемое:",);
    let border = prompt("Введите граничное значение:",);

    let result = (a + b);
    result >= border ? alert("Много") : alert("Мало");
}

function welcome(){
    let login = prompt("Введите должность:",);

    let message = (login == "Сотрудник")? ("Привет"):
        (login == "Директор")? ("Здравствуйте"):
            (login == "")? ("Нет логина"): ('');

    alert(message);
}
