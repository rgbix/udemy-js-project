//exersize 1

let numberOfFilm = prompt('Сколько фильмов вы уже посмотрели?', "");

//exersize 2
let personalMovieDB = {
    count:numberOfFilm,
    movies:{},
    actors:{},
    genres:[],
    privat:false
};

//exersize 3

let lastWathedFilm = prompt('Один из последних просмотренных фильмов?',''),
    rating = prompt('На сколько оцените его?', '');

personalMovieDB.movies[lastWathedFilm] = rating;

lastWathedFilm = prompt('Один из последних просмотренных фильмов?','');
rating = prompt('На сколько оцените его?', '');

personalMovieDB.movies[lastWathedFilm] = rating;

console.log(personalMovieDB);10