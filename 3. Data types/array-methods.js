//Первое задание
function toCamelCase() {
    let str = prompt("Введите слова через тире:", "my-camel-notation");

    let str2 = camelize(str);


    function camelize(string) {
        arr = string.split("-");

        arr = arr.map((word, index) => index == 0 ? word : word[0].toUpperCase() + word.slice(1));

        str = arr.join("");

        return str;
    }

    alert (str2);

}
