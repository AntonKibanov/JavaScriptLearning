function getEvenNumbers() {
    for (let i = 2; i <= 10; i++) {
        if (i % 2 === 0) {
            alert(i);
        }
    }
}

function getEvenNumbers2() {
    let j = 2;
    while (j >= 2 && j <= 10) {
        if (j % 2 === 0) {
            alert(j);
        }
        j++;
    }
}

function checkNumber() {
    let number;
    do {
        number = prompt("Введите число больше 100:", 0);
    } while (number <= 100 && number);
}

function showPrimeNumber() {
    let max = prompt("Введите конец диапазона:",);

    nextPrime:
        for (let i = 2; i <= max; i++) {
            for (let j = 2; j < i; j++) {
                if (i % j === 0) continue nextPrime;
            }
            alert(i);
        }
}