function getAnimalSound(animal) {
    if (animal === undefined){
        return null;
    } else {
        let sound = animal.sound;
        return sound;
    }
}

function getAverageMark(marks) {
    let marksSum = 0;
    for (let i = 0; i < marks.length; i++){
        marksSum += marks[i];
    };    
    let average = marksSum / marks.length;
    let roundedAverage = Math.round(average);
    return roundedAverage;
}

function checkBirthday(birthday) {
    let now = +new Date();
    let diff = now - birthday;
    let age = diff / (365.25 * 24 * 60 * 60 * 1000);
    if (age > 18) {
        return `Вы уже совершеннолетний, что Вы выбрали из карты бара?`;
    } else {
        return `Вам еще нет 18, могу предложить Вам молочный коктейль.`
    }
}