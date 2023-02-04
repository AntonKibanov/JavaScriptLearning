function getInfoAboutBrowser() {
    let browser = prompt("Введите название браузера:",);

    if (browser === "Edge") {
        alert("You've got the Edge!");
    } else if (browser === "Chrome" || browser === "Firefox" || browser === "Safari" || browser === "Opera") {
        alert("Okay we support these browser too");
    } else {
        alert("We hope that this page look ok!");
    }
}

function guessNumber() {
    const number = +prompt("Введи число от 0 до 3",);

    switch (number) {
        case 0:
            alert("Вы ввели число 0");
            break;
        case 1:
            alert("Вы ввели число 1");
            break;
        case 2:
        case 3:
            alert("Вы ввели число 2, а может и 3");
            break;
        default:
            alert("Я не знаю, что вы ввели");
    }
}