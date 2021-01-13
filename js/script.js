"use strict"; 

let numberOfFilms = +prompt('Skolko filmov yzhe posmotreli?', '');

let personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [], 
    privat: false
};

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



