"use strict";

    // Задача 1

function parseCount (count) {
    let parse = Number.parseInt(count);
    if (Number.isNaN(parse)){
        throw new Error("Невалидное значение");
    };    
    return parse;
};

function validateCount(count) {
    try {
        parseCount(count);
    } catch(e) {
        throw new Error("Невалидное значение");
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
        let p = this.getPerimeter() / 2;
        return Math.sqrt((p * (p - a) * (p - b) * (p - c)));
    };
};
function getTriangle(a, b, c) {
    try {
        let delta = new Triangle({a, b, c});
        return delta;
    } catch(e) {
        throw new Error("Ошибка! Неправильный треугольник")
        return new Triangle();
    };
};