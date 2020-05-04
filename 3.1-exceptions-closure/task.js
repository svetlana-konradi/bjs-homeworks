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
        return parseCount(count);
    } catch(e) {
        return e;
    }
}

// Задача 2

class Triangle {
    constructor(a, b, c) {
        this.a = a;
        this.b = b;
        this.c = c;
        if (((this.a + this.b) < this.c) || ((this.a + this.c) < this.b) || ((this.b + this.c) < this.a)) {
            throw new Error("Треугольник с такими сторонами не существует")
        }
    };
    getPerimeter() {
        return this.a + this.b + this.c;
    };
    getArea() {
        let p = this.getPerimeter() / 2;
        let area = Math.sqrt((p * (p - this.a) * (p - this.b) * (p - this.c)));
        return Number(area.toFixed(3));
    };
};

function getTriangle(a, b, c) {
    try {
        return new Triangle(a, b, c);
    } catch(e) {
        const triangle = {};
        triangle.getArea = () => {return "Ошибка! Неправильный треугольник!"};
        triangle.getPerimeter = () => {return "Ошибка! Неправильный треугольник!"};
        return triangle;
    };
};
