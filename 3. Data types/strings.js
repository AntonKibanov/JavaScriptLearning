//Первое задание
function ucFirst() {
    let str = prompt("Введите строку: ");

    function getStringWithFirstSymbolInUpperCase(str) {
        let strUcFirst = str[0].toUpperCase() + str.substring(1, str.length);

        return strUcFirst;
    }

    alert(getStringWithFirstSymbolInUpperCase(str));
}

//Второе задание
function checkStr() {
    let str = prompt("Введите строку: ");

    function checkSpam(str) {
        let strLc = str.toLowerCase();

        return strLc.includes("viagra") || strLc.includes("xxx");
    }

    alert(checkSpam(str));
}

//Третье задание
function trimStr() {
    let str = prompt("Введите строку: ");
    let maxLength = prompt("Введите допустимую длину строки: ");

    function truncate(str, maxlength) {
        if (str.length > maxlength) {
            str = str.slice(0, maxlength);
            str = str.replace(str[str.length - 1], "…");
            return str;
        } else {
            return str;
        }
    }

    alert(truncate(str, maxLength));
}

//Четвертое задание
function getPriceValue() {
    let price = prompt("Введите цену: ");

    function extractCurrencyValue(str) {
        return +str.slice(1);
    }

    alert(extractCurrencyValue(price));
}
