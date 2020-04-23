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
        return new Error("Невалидное значение");
    }
}

// Задача 2

class Triangle {
    constructor({a, b, c}) {
        this.a = a;
        this.b = b;
        this.c = c;
    };
    getPerimeter() {
        if (((this.a + this.b) < this.c) || ((this.a + this.c) < this.b) || ((this.b + this.c) < this.a)) {
            throw new Error("Треугольник с такими сторонами не существует")
        }
        return this.a + this.b + this.c;
    };
    getArea() {
        let p = this.getPerimeter() / 2;
        if (((this.a + this.b) < this.c) || ((this.a + this.c) < this.b) || ((this.b + this.c) < this.a)) {
            throw new Error("Ошибка! Неправильный треугольник")
        };
        return Math.sqrt((p * (p - this.a) * (p - this.b) * (p - this.c)));
    };
};

function getTriangle(a, b, c) {
    try {
        return new Triangle({a, b, c});
    } catch(e) {
        return new Triangle({a, b, c});
    };
};

// либо я могу создать класс фейкового треугольника и вызывать его из блока catch
/*
class TriangleFake {
    constructor({a, b, c}) {
        this.a = a;
        this.b = b;
        this.c = c;
        if (((a + b) < c) || ((a + c) < b) || ((b + c) < a)) {
            throw new Error("Треугольник с такими сторонами не существует")};
    };
    getPerimeter() {
        throw new Error("Ошибка! Неправильный треугольник")
    };
    getArea() {
        throw new Error("Ошибка! Неправильный треугольник")
    };
};
*/