const numberOfBooks = +prompt('How many books have you read ?', '');

const personalBookDB = {
    count: numberOfBooks,
    genres: [],
    actors: {},
    private: false,
    books: {}
};




// for (let i = 0; i < 2; i++) {
//     const a = prompt('One of the last books you read?', ''),
//         b = prompt('How would you rate it out of 10?', '');


//     if (a != null && b != null && a != '' && b != '' && a.length < 50) {
//         personalBookDB.books[a] = b;
//         console.log('done');
//     } else {
//         console.log('error');
//         i--;
//     }
// }

// if (personalBookDB.count < 10) {
//     console.log("Читано довольно мало книгов");
// } else if (personalBookDB.count >= 10 && personalBookDB.count < 30) {
//     console.log("Вы классический зритель");
// } else if (personalBookDB.count >= 30) {
//     console.log("Вы киноман");
// } else {    
//     console.log("Произошла ошибка");
// }

// console.log(personalBookDB);

for (let i = 0; i < 2; i++) {
    const a = prompt('One of the last books you read?', ''),
        b = prompt('How would you rate it out of 10?', '');

    if (a != 'null' && b != 'null' && a != '' && b != '' && a.length < 50) {
        personalBookDB.books[a] = b;
        console.log('done');
    } else {
        console.log('error');
        i--;
    }
}

if (personalBookDB.count < 10) {
    console.log('Az kitab oxunub');
} else if (personalBookDB.count >= 10 && personalBookDB.count < 30){
    console.log("Klasik oxuyucu");
} else if(personalBookDB.count >= 30) {
    console.log('Kinoman');
} else {
    console.log('Xeta bas verdi');
}
 
console.log(personalBookDB)

