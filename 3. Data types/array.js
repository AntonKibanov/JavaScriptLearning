//Второе задание
let styles = ["Джаз", "Блюз"];
console.log(`1 шаг:\n${styles}`);

styles.push("Рок-н-ролл");
console.log(`2 шаг:\n${styles}`);

styles[Math.floor((styles.length - 1) / 2)] = "Классика";
console.log(`3 шаг:\n${styles}`);

styles.shift();
console.log(`4 шаг:\n${styles}`);

styles.unshift("Рэп", "Рэгги");
console.log(`5 шаг:\n${styles}`);

//Четвертое задание
function sumInput() {
    let numbers = [];

    while (true) {
        let value = prompt("Введите число", 0);

        if (value === "" || value === null || !isFinite(value)) break;

        numbers.push(+value);
    }

    let sum = 0;
    for (let number of numbers) {
        sum += number;
    }
    return alert(sum);
}