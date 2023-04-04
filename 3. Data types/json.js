//Первое задание
function displayJson() {
    let user = {
        name: "Василий Иванович",
        age: 35,
    };

    let userInJson = JSON.stringify(user);

    alert(userInJson);
}

//Второе задание
function excluseLinks() {
    let room = {
        number: 24,
    };

    let meetup = {
        title: "Совещание",
        occupiedBy: [{ name: "Иванов" }, { name: "Петров" }],
        place: room,
    };

    room.occupiedBy = meetup;
    meetup.self = meetup;

    alert(JSON.stringify(meetup, function replacer(key, value) {
        return (key != "" && value == meetup) ? undefined: value;
    }));
}
