//Первое задание
function getSum() {
    let a = +prompt("Введите первое слагаемое?", 0);
    let b = +prompt("Введите второе слагаемое?", 0);

    alert(a + b);
}

//Второе задание
function readNumber() {
    let number;

    do {
        number = prompt("Введите число: ", 0);
    } while (!isFinite(number));

    if (number === null || number == "") return alert(null);

    return alert(+number);
}

//Третье задание
function getIndex() {
    let i = 0;
    while (i < 11) {
        i += 0.2;
        if (i > 9.8 && i < 10.2) alert(i);
    }
}

//Четвертое задание
function getRandomNumber() {
    let min = +prompt("Введите начало диапазона:");
    let max = +prompt("Введите конец диапазона: ");

    function random(min, max) {
        return Math.random() * (max - min) + min;
    }

    alert(random(min, max));
}

//Пятое задание
function getRandomInt() {
    let min = +prompt("Введите начало диапазона:");
    let max = +prompt("Введите конец диапазона: ");

    function randomInt(min, max) {
        return Math.floor(min + Math.random() * (max + 1 - min));
    }

    alert(randomInt(min, max));
}
