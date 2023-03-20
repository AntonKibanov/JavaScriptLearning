//Первое задание
function toCamelCase() {
    let str = prompt("Введите слова через тире:", "my-camel-notation");

    let str2 = camelize(str);

    function camelize(string) {
        arr = string.split("-");

        arr = arr.map((word, index) =>
            index == 0 ? word : word[0].toUpperCase() + word.slice(1)
        );

        str = arr.join("");

        return str;
    }

    alert(str2);
}

//Второе задание

function filterArray() {
    let myArr = [5, 3, 8, 1];

    let filteredArray = filterRange(myArr, 1, 4);

    function filterRange(arr, a, b) {
        return arr.filter(item => (item >= a && item <= b));
    }

    alert(filteredArray);
}
