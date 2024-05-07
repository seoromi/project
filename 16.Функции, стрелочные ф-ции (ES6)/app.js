"use strict";

// function showFirstMessage(){
//     console.log("Hello damn world");    
// }

// showFirstMessage();

let num = 20;

function showFirstMessage(text) {
    console.log(text);
    // num = 10;
    console.log(num);
}

showFirstMessage("Hello damn world");
console.log(num);

// function calc(a, b) {
//     return (a + b);
// }

// console.log(calc(4, 3));
// console.log(calc(5, 5));
// console.log(calc(10, 10));

function ret() {
    let num = 50;

    //

    return num;
}
// console.log(ret());
const anotherNum = ret();
console.log(anotherNum);

const logger = function () {
    console.log('Hola')
};

logger();

const calc = (a, b) => {
    console.log('1');
    return a + b;
}

