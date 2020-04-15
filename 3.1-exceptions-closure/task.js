"use strict";

    // Задача 1

function parseCount (count) {
    if (Number.parseInt(count) == NaN){
        const errorCount = new Error("Невалидное значение");
        throw errorCount;
    };    
    return Number.parseInt(count);
};

function validateCount(count) {
    try {
        let valid = parseCount(count);
        return valid;
    } catch(e) {
        console.log('Невалидное значение');
    }
}

// Задача 2

class Triangle {
    constructor({a, b, c}) {
        this.a = a;
        this.b = b;
        this.c = c;
        if (((this.a + this.b) < this.c) || ((this.a + this.c) < this.b) || ((this.b + this.c) < this.a)) {
        throw new Error("Треугольник с такими сторонами не существует")};
    };
    
    getPerimeter() {
        let perimeter = this.a + this.b + this.c;
        return perimeter;
    };
        
    getArea() {
        this.p = p
        let p = this.getPerimeter() / 2;
        let area = Math.sqrt((this.p * (this.p - this.a) * (this.p - this.b) * (this.p - this.c)));
        return area;
    };
};
function getTriangle(a, b, c) {
    const delta = new Triangle({a, b, c});
    return delta;
};
try {
    getTriangle(a, b, c);
} catch(e) {
    console.log("Ошибка! Неправильный треугольник");
};
