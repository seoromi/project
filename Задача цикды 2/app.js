// Место для второй задачи
function secondTask() {
    // Значения массива менять нельзя, тут он проверяется автоматически именно на эти значения
    const data = [5, 10, 'Shopping', 20, 'Homework'];
    for (let i = 0; i < data.length; i++) {
        if (typeof (data[i]) === 'number') {
            data[i] = data[i] * 2;

        } else if (typeof (data[i]) === 'string') {
            data[i] = `${data[i]} - done`;
        }
    }
    // Пишем решение вот тут


    // Не трогаем
    console.log(data);
    return data;
}

const masinlar = ['bmw', 'porsche', 'mercedes', 10, 20, 30];

for (let j = 0; j < masinlar.length; j++) {
    if (typeof (masinlar[j]) === 'number') {
        masinlar[j] = masinlar[j] * 2;
    } else if (typeof (masinlar[j]) === 'string') {
        masinlar[j] = `${masinlar[j]} - done`;
    }
}

console.log(masinlar)

const movies = ['tvd', 30, 'mr smith and mrs smith', 10, 'suits', 10];

for (let k = 0; k < movies.length; k++) {
    if (typeof (movies[k]) === 'number') {
        movies[k] = movies[k] * 2;
    } else if (typeof (movies[k]) === 'string') {
        movies[k] = `${movies[k]} - done`;
    }
}

// console.log(movies);


// const data = [5, 10, 'Shopping', 20, 'Homework'];
// const result = [];

// for (let i = 1; i <= data.length; i++) {
//     result[i - 1] = data[data.length - i]
// }

// console.log(result);
// return result;

const cars = ['bmw', 'mercedes', 'porsche', 'aston martin'];
const result = [];

for (let i = 1; i <= cars.length; i++) {
    result[i - 1] = cars[cars - i];
}
console.log(result);