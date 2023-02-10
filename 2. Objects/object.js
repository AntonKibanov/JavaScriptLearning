//первое задание
let user = {};
user.name = "John";
user.surname = "Smith";
user.name = "Pete";
delete user.name;

//второе задание
let schedule = {};
console.log("Второе задание");

console.log("До присваивания свойства: " + isEmpty(schedule)); // true

schedule["8:30"] = "get up";

console.log("До присваивания свойства: " + isEmpty(schedule)); // false

function isEmpty(object) {
    for (let key in object) {
        return false;
    }
    return true;
}

//Четвертое задание
console.log("Четвертое задание");

let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130,
};

function getSumSalaries(object) {
    let sum = 0;
    for (let key in object) {
        sum = sum + object[key];
    }
    return sum;
}
console.log("Сумма зарплат: " + getSumSalaries(salaries));

//Пятое задание
console.log("Четвертое задание");

let menu = {
    width: 200,
    height: 300,
    title: "My menu",
};

function multiplyNumeric(object) {
    for (let key in object) {
        if (typeof object[key] === "number") {
            object[key] *= 2;
        }
    }
}

multiplyNumeric(menu);

console.log(menu);
