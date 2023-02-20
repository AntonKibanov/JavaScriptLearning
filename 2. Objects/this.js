//Первое задание
function makeUser() {
    return {
        name: "John",
        ref: this,
    };
}

let user = makeUser();

console.log(user.ref.name); // Каким будет результат? Ошибка

//Второе задание
function getSumAndMul() {
    let calculator = {
        read() {
            this.a = +prompt("a?", 0);
            this.b = +prompt("b?", 0);
        },

        sum() {
            return this.a + this.b;
        },

        mul() {
            return this.a * this.b;
        },
    };

    calculator.read();
    alert(calculator.sum());
    alert(calculator.mul());
}

//Третье задание
function getStep() {
    let ladder = {
        step: 0,
        up() {
            this.step++;
            return this;
        },
        down() {
            this.step--;
            return this;
        },
        showStep: function () {
            // показывает текущую ступеньку
            alert(this.step);
            return this;
        },
    };

    ladder.up().up().down().showStep().down().showStep();
}
