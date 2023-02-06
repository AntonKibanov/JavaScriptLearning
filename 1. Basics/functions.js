function checkAge(age) {
    return (age > 18) ? true : confirm("Родители разрешили?");
}

function getAgree() {
    let age = prompt("Введите возраст:",);

    if (checkAge(age)) {
        alert("Можно");
    } else {
        alert("Нельзя");
    }
}

function minValue(a, b) {
    if (a < b) {
        return a;
    } else {
        return b;
    }
}

function getMinValue() {
    let a = prompt("Введите a:",);
    let b = prompt("Введите b:",);

    alert(minValue(a, b));

}

function pow(x, n) {
    let result = x;

    for (let i = 1; i < n; i++) {
        result *= x;
    }

    return result;
}

function getNumberInDegree() {
    let x = prompt("Введите основание:",);
    let n = prompt("Введите степень:",);

    if (n < 1) {
        alert("Степень ${n} не поддерживается, используйте натуральное число");
    } else {
        alert(pow(x, n));
    }
}