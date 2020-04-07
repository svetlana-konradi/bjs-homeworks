"use strict";

// Задача 1

function getSolutions(a, b, c){
    let D = Math.pow(b, 2) - 4 * a * c;
    if (D < 0) {
        return {
            D: D,
            roots: []
        };
    } else if (D === 0){
        let x1 = -b / (2 * a);
        return {
            D: D,
            roots: [x1]
            };
    } else if (D > 0){
        let x1 = (- b + Math.sqrt(D)) / (2 * a);
        let x2 = (- b - Math.sqrt(D)) / (2 * a);
        return {
            D: D,
            roots: [x1, x2]
            };
    };
};

function showSolutionsMessage(a, b, c){
    let result = getSolutions(a, b, c);
    console.log(`Вычисляем корни квадратного уравнения ${a}x² + ${b}x + ${c}`);
    console.log(`Значение дискриминанта: D ${result.D}`);
    if (result.D < 0) {
        console.log("Уравнение не имеет вещественных корней");
    } else if (result.D === 0){
        console.log(`Уравнение имеет один корень X₁ = ${result.roots[0]}`);
    } else if (result.D > 0){
        console.log(`Уравнение имеет два корня. X₁ = ${result.roots[0]}, X₂ = ${result.roots[1]}`);
    };
}

// Задача 2

let data = {
    algebra: [2, 4, 5, 2, 3, 4],
    gemetry: [2, 3, 4],
    russian: [3, 3, 4, 5],
    physics: [5, 5],
    music: [2, 2, 6],
    english: [4, 4, 3],
    poetry: [5, 3, 4],
    chemistry: [2],
    french: [4, 4]
};

function getAverageScore(data){
    let marks = [];
    let averageSum = 0;
    let counter = 0;

    for (let prop in data){
      marks = data[prop]; 
      console.log(`${prop}: ${getAverageMark(marks)}`);
      for(let i = 0; i < marks.length; i++){
        averageSum += marks[i];
      };
      counter += marks.length;
    };

    console.log(`average: ${averageSum / counter}` );
};

  function getAverageMark(marks){
      let marksSum = 0;
      for (let i = 0; i < marks.length; i++){
          marksSum += marks[i];
      };    
      return marksSum / marks.length;
  };


// Задача 3 

let secretData = {
    aaa: [0, 1],
    bbb: [0, 1]
}
function getPersonData(secretData){
    
    // let aaa = "firstName";
    // let bbb = "lastName";
    // let secret;
    for (let prop in secretData) {
        let secretData = secretData[prop];
    }
    return ``

    function getDecodedValue(secret){
        
        if (secret == 0){
            secret = "Родриго";
        } else if (secret == 1){
            secret = "Эмильо";
        }
    }
    
}
