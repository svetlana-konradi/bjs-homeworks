"use strict";

    // Задача 1

function parseCount (count) {
    let parse = Number.parseInt(count);
    if (Number.isNaN(parse) === true){
        throw new Error("Невалидное значение");
    };    
    return parse;
};

function validateCount(count) {
    try {
        parseCount(count);
    } catch(e) {
        console.log(e.message);
    }
}

// Задача 2

class Triangle {
    constructor({a, b, c}) {
        this.a = a;
        this.b = b;
        this.c = c;
        if (((a + b) < c) || ((a + c) < b) || ((b + c) < a)) {
        throw new Error("Треугольник с такими сторонами не существует")};
    };
    
    getPerimeter() {
        return this.a + this.b + this.c;
    };
        
    getArea() {
        return Math.sqrt(((getPerimeter() / 2) * ((getPerimeter() / 2) - a) * ((getPerimeter() / 2) - b) * ((getPerimeter() / 2) - c)));
    };
};
function getTriangle(a, b, c) {
    let delta = new Triangle({a, b, c});
    try {
        return delta;
    } catch(e) {
        console.log("Ошибка! Неправильный треугольник");
    };
};



