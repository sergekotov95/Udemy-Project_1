"use strict"; 

let numberOfFilms = +prompt('Skolko filmov yzhe posmotreli?', '');

let personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [], 
    privat: false
};

let lastViewedFIlm = prompt('Odin iz poslednih prosmotrennih filmov?', '');
let lastFilmRate = prompt('Na skolko otsenite ego?', '10'); 

personalMovieDB.movies[lastViewedFIlm] = lastFilmRate; 

