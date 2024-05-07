// const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

// const personalMovieDB = {
//     count: numberOfFilms,
//     movies: {},
//     actors: {},
//     genres: [],
//     privat: false
// };

// const a = prompt('Одинь из последних просмотренных фильмов?', ''),
//       b = prompt('На сколько оцените yeqo?', '');
//       c = prompt('Одинь из последних просмотренных фильмов?', ''),
//       d = prompt('На сколько оцените yeqo?', '');

// personalMovieDB.movies[a] = b;
// personalMovieDB.movies[c] = d;

// console.log(personalMovieDB);

// const numberOfBooks = +prompt('kac kitap okudunuz ?', '');

// const personalBookDB = {
//     count:numberOfBooks,
//     genres: [],
//     books: {},
//     actors : {},
//     private: false
// };

// const a = prompt('Son okudugunuz kitaplardan biri?', ''),
//       b = prompt('10 uzerinden kac olarak degerlendirirsiniz?', ''),
//       c = prompt('Son okudugunuz kitaplardan biri?', '');
//       d = prompt('10 uzerinden kac olarak degerlendirirsiniz?', '');

//       personalBookDB.books[a] = b;
//       personalBookDB.books[c] = d;

//       console.log(personalBookDB);

const numberOfBooks = +prompt('How many books have you read ?' , '');

const personalBookDB = {
    count:numberOfBooks,
    genres:[],
    actors:{},
    private:false ,
    books: {}
};


const genre = prompt('What genre was it?', '');

const a = prompt('One of the last books you read?', ''),
      b = prompt('How would you rate it out of 10?', ''),
      c = prompt('One of the last books you read?' ,''),
      d = prompt('How would you rate it out of 10?', '');

      personalBookDB.books[a] = b;
      personalBookDB.books[c] = d;
      personalBookDB.genres = genre;




      console.log(personalBookDB);

      