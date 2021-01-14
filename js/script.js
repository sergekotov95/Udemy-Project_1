"use strict"; 

let numberOfFilms;

function start() {
    numberOfFilms = +prompt('Skolko filmov yzhe posmotreli?', '');

    while(numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt('Skolko filmov yzhe posmotreli?', '');
    }
}

start(); 

let personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [], 
    privat: false
};

function rememberMyFilms() {
    for (let i = 0; i < 2; i++) {
        const a = prompt('Odin is poslednih filmov?', '');
        const b = prompt('Otsenka?', ''); 
    
        if (a != null && b != null && a != '' && b != '' && a.length < 50) {
            personalMovieDB.movies[a] = b;
            console.log('done'); 
        } else {
            console.log('Error');
            i--; 
        }
    }
}

// rememberMyFilms(); 

function detectMyPersonalLevel() {
    if (personalMovieDB.count < 10) {
        console.log('Prosmotreno dovolno malo filmov');
    } else if (personalMovieDB.count >= 10 &&
               personalMovieDB.count <=30) {
        console.log('Vy klassicheskij zritel'); 
    } else if (personalMovieDB.count > 30) {
        console.log('Vy kinoman');
    } else {
        console.log('Error'); 
    }
}

// detectMyPersonalLevel(); 

function showMyDB(property) {
    if(!property) {
        console.log(personalMovieDB); 
    }
}

showMyDB(personalMovieDB.privat); 

function writeYourGenres() {
    for (let i = 1; i < 4; i++) {
        let genre = prompt(`Ваш любимый жанр под номером ${i}`, ''); 
        personalMovieDB.genres.push(genre); 
    }
}

writeYourGenres(); 