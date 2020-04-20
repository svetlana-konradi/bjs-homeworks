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
    let check = arr1.every(function (element, index) {
        return element === arr2[index];
        });
        return check;
};

function memorize(fn, limit){
    let memory = [];

    function fn(...args){
        if (memory.find(compareArrays(element.args, args) === true)){
            return memory.result
        } else {
            let result = fn(...args);
            memory.push({
                args: args,
                result: result
            });
            if (memory.length > limit) {
                memory.shift();
            };
            return result;
        };
    };
};

function testCase(testFunction, timer) {
    console.time(timer);
    testArray.forEach(function(arr){
      for (let i = 0; i < 10; i++) {
          testFunction(...arr);
      };
    });
    console.timeEnd(timer);
};

const mSum = memorize(sum, 5);
sum(3, 4)






  