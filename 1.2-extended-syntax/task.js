"use strict";
function getResult(a,b,c){
    let d = Math.pow(b, 2) - 4 * a * c;
    let x = [];
    if (d > 0) {
        x = [((- b + Math.sqrt(d)) / (2 * a)), ((- b - Math.sqrt(d)) / (2 * a))];
    } else if (d == 0) {
        x = [(-b / (2 * a))];
    } 
    return x;
}

function getAverageMark(marks){
    if (marks.length == 0) {
        return 0;
    } else if (marks.length > 5) {
        console.log("Больше 5 оценок");
        marks.splice(5);
    }
    let marksSum = 0;
    for (let i = 0; i < marks.length; i++) {
        marksSum += marks[i];
    }
    let averageMark = marksSum / marks.length;

    return averageMark;
}

function askDrink(name,dateOfBirthday){
    if ((new Date().getFullYear() - dateOfBirthday.getFullYear()) >= 18) {
        return `Не желаете ли олд-фэшн, ${name}?`;
    } else {
        return `Сожалею, ${name}, но я не могу вам продать алкоголь. Зато могу предложить вам замечательный клюквенный компот!`;
    }
}