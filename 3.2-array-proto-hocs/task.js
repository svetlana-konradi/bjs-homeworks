"use strict";
function sleep(milliseconds) 
{
  let e = new Date().getTime() + milliseconds;
  while (new Date().getTime() <= e) {}
};

function sum(...args) {
    sleep(500); 
    return args.reduce((sum, arg) => {
      return sum += +arg;
    }, 0);
  };

function compareArrays(arr1, arr2){
    if (arr1.length !== arr2.length) {
        return false
    };
    let check = arr1.every((element, index) => element === arr2[index]);
        return check;
};

function memorize(fn, limit){
    let memory = [];

    return (...args) => {
        const findArgs = memory.find(element => compareArrays(element.args, args));
        if (findArgs !== undefined){
            return findArgs;
        } else {
            const sum = fn(...args);
            memory.push({
                args,
                result
            });
            if (memory.length > limit) {
                memory.shift();
            };
            return sum;
        };
    };
};

const testArray = [[1,2,3], [1,2], [1,2,3], [1,2], [9,5,2,4]];
function testCase(testFunction, timer) {
    console.time(timer);
    testArray.forEach(function(arr){
      for (let i = 0; i < 10; i++) {
          testFunction(...arr);
      };
    });
    console.timeEnd(timer);
};

// const mSum = memorize(sum, 5);
// sum(3, 4)

// testCase(sum)


// default: 25049мс - таймер закончился - sum с замедлением
// default: 3020мс - таймер закончился - модифицированная sum с замедлением

// default: 3мс - таймер закончился - модифицированная sum без замедления
// default: 1мс - таймер закончился - sum без замедления

/*Вывод: модифицированная функция с замедлением выполняется находит результат идентичных 
операций в памяти и не выполняет других вычислений, а без замеджения выполняется медленнее 
из-за постоянных обращений к памяти.*/
