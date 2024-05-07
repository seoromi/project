// for (let i = 0; i < 4; i++) {
//     console.log(i);
//     for (let j = 0; j < 4; j++) {
//         console.log(j);
//     }

let result = '';
const length = 7;

for (let i = 1; i < length; i++) {

    for (let j = 0; j < i; j++) {
        result += "*";
    }

    result += '\n';
}

console.log(result);


 first: for (let i = 0; i < 4; i++) {
    console.log(`First level: ${i}`);
    for (let j = 0; j < 4; j++) {
        console.log(`Second level:${j}`);
        for (let k = 0; k < 4; k++) {
            if (k === 2) break first;
            console.log(`Third level: ${k}`);
        }

    }
}   

function fifthTask() {
    const arrayOfNumbers = [];

    for (let i = 5; i < 11; i++) {
        arrayOfNumbers[i - 5] = i;
    }

    console.log(arrayOfNumbers);
    return arrayOfNumbers;
}