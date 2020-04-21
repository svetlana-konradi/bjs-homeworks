"use strict";
// Задача 1

class Weapon {
    constructor({name, attack, durability, range}){
        this.name = name,
        this.attack = attack,
        this.durability = durability,
        this.range = range,
        this.startDurability = durability
    }
    takeDamage(damage){
        this.damage = damage;
        this.durability -= damage;
        if (this.durability < 0) {
            this.durability = 0;
        };
    }
    getDamage(){
        if (this.durability >= 0.3 * this.startDurability) {
            return this.attack;
        } else if (this.durability == 0) {
            this.attack = 0;
        } else {
            return this.attack / 2;
        };
    }
    isBroken(){
        if (this.durability > 0){
            return false;
        } else {
            return true;
        };
    }
};

const arm = new Weapon({
    name: 'Рука',
    attack: 1,
    durability: Infinity,
    range: 1,
});

const bow = new Weapon({
  name: 'Лук',
  attack: 10,
  durability: 200,
  range: 3,
});

const sword = new Weapon({
  name: 'Меч',
  attack: 25,
  durability: 500,
  range: 1,
});

const knife = new Weapon({
  name: 'Нож',
  attack: 5,
  durability: 300,
  range: 1,
});

const staff = new Weapon({
  name: 'Посох',
  attack: 8,
  durability: 300,
  range: 2,
});

const longBow = new Weapon({
  name: 'Длинный лук',
  attack: 15,
  durability: 200,
  range: 4,
});

const ax = new Weapon({
  name: 'Секира',
  attack: 27,
  durability: 800, 
  range: 1,
});

const stormStaff = new Weapon({
  name: 'Посох Бури',
  attack: 10,
  durability: 300,
  range: 3,
});

// Задача 2

class Arm extends Weapon {
    constructor () {
      super();
      this.name = 'Рука';
      this.attack = 1;
      this.durability = Infinity;
      this.range = 1;
    }
  }

class Bow extends Weapon {
    constructor () {
      super();
      this.name = 'Лук';
      this.attack = 10;
      this.durability = 200;
      this.range = 3;
    }
  }

  class Sword extends Weapon {
    constructor () {
     super();
     this.name = 'Меч';
     this.attack = 20;
     this.durability = 10;
     this.range = 1;
   }
 }
  
  class Knife extends Weapon {
    constructor () {
      super();
      this.name = 'Нож';
      this.attack = 5;
      this.durability = 300;
      this.range = 1;
    }
  }
  
  class Staff extends Weapon {
    constructor () {
      super();
      this.name = 'Посох';
      this.attack = 8;
      this.durability = 300;
      this.range = 2;
    }
  }
  
  class LongBow extends Bow {
    constructor () {
      super();
      this.name = 'Длинный лук';
      this.attack = 15;
      this.range = 4;
    }
  };
  
  class Ax extends Sword {
    constructor () {
      super();
      this.name = 'Секира';
      this.attack = 27;
      this.durability = 800;
    }
  };
  
  class StormStaff extends Staff {
    constructor () {
      super();
      this.name = 'Посох бури';
      this.attack = 10;
      this.range = 3;
    }
  };
  
    //Задача 3
  
  class StudentLog {
    constructor(name) {
      this.name = name;
      this.grades = {};
    }
  
    getName() {
      return this.name;
    }
  
    addGrade(grade, subject) {
        if (typeof grade !== 'number' ||  grade === 0 || grade > 5) {
          console.log(`Вы пытались поставить оценку "${grade}" по предмету "${subject}". Допускаются только числа от 1 до 5.`);
        }
      if (!this.grades.hasOwnProperty([subject])) {
        this.grades[subject] = [];
      } 
      this.grades[subject].push(grade);
      return this.grades[subject].length;
      }
    
      getAverageBySubject(subject) {
        let averageBySubject = 0;
        if (!this.grades.hasOwnProperty([subject])) {
          return 0;
        }
        for (let i = 0; i < this.grades[subject].length; i++) {
          averageBySubject += this.grades[subject][i];
        }
        return averageBySubject / this.grades[subject].length;
      }
    
      getTotalAverage() {
        let totalAverage = 0;
        for (let subject in this.grades) {
          totalAverage += this.getAverageBySubject([subject]);
        }
        return totalAverage / Object.keys(this.grades).length;
      }
    }

    