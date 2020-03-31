"use strict";
function getResult(a,b,c){
    let d = Math.pow(b, 2) - 4 * a * c;
    let x;
    if (d > 0) {
        x = [((- b + Math.sqrt(d)) / (2 * a)), ((- b - Math.sqrt(d)) / (2 * a))];
    } else if (d == 0) {
        x = [(-b + 2 * a)];
    } else {
        x = [];
    }
    return x;
}

function getAverageMark(marks){
    if (marks.lenght > 5) {
        console.log("Больше 5 оценок");
        marks.splice(4);
    }
    let marksSum = 0;
    let i = 0;
    do {
        marksSum += marks[i];
    } while (i <= 4);
    let averageMark = marksSum / marks.lenght;

    return averageMark;
}

function askDrink(name,dateOfBirthday){
    let today = new Date();
    let result = 0;
    if ((today.getFullYear() - dateOfBirthday.getFullYear()) >= 18) {
        result = (`Не желаете ли олд-фэшн, ${name}?`);
    } else {
        result = (`Сожалею, ${name}, но я не могу вам продать алкоголь. Зато могу предложить вам замечательный клюквенный компот!`);
    }

    return result;
}