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
    constructor(a, b, c) {
        this.a = a;
        this.b = b;
        this.c = c;
        try {
            if (((this.a + this.b) < this.c) || ((this.a + this.c) < this.b) || ((this.b + this.c) < this.a)) {
            };
        } catch(e) {
            console.log("Треугольник с такими сторонами не существует");
        }
    };
    
    getPerimeter() {
        let perimeter = this.a + this.b + this.c;
        return perimeter;
    };
        
    getArea() {
        let p = this.getPerimeter() / 2;
        let area = Math.sqrt((this.p * (this.p - this.a) * (this.p - this.b) * (this.p - this.c)));
        return area;
    };
};

const getTriangle = (a, b, c) => {
    let delta = new Triangle(a, b, c);
};

try {
    getTriangle()
} catch(e) {
    delete getTriangle();
    console.log("Ошибка! Неправильный треугольник");
}
