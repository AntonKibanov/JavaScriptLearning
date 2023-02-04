function checkAge() {
    let age = prompt("Введите свой возраст:",);

    if (age >= 14 && age <= 90) {
        alert("Возраст удовлетворяет условиям");
    } else {
        alert("Возраст не удовлетворяет условиям")
    }
}

function checkAgeOutOfRange() {
    let age = prompt("Введите свой возраст:",);

    if (!(age >= 14 && age <= 90)) {
        alert("Возраст не удовлетворяет условиям");
    } else {
        alert("Возраст удовлетворяет условиям");
    }
}

function checkLogin() {
    let login = prompt("Введите логин:",);

    if (login === "админ" || login === "Админ") {
        let password = prompt("Введите пароль:",);
        if (password === "Я Главный") {
            alert("Здравствуйте!");
        } else if (password === null || password === "") {
            alert("Отменено");
        } else {
            alert("Неверный пароль");
        }
    } else if (login === null || login === "") {
        alert("Отменено");
    } else {
        alert("Я вас не знаю");
    }
}