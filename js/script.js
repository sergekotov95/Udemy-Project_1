"use strict"; 

let personalMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [], 
    privat: false,
    start: function() {
        personalMovieDB.count = +prompt('Skolko filmov yzhe posmotreli?', '');

        while(personalMovieDB.count == '' || personalMovieDB.count == null || isNaN(personalMovieDB.count)) {
            personalMovieDB.count = +prompt('Skolko filmov yzhe posmotreli?', '');
        }
    },
    rememberMyFilms: function() {
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
    }, 
    detectMyPersonalLevel: function() {
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
    }, 
    showMyDB: function(property) {
        if(!property) {
            console.log(personalMovieDB); 
        }
    },
    toggleVisibleMyDB: function() {
        if (personalMovieDB.privat) {
            personalMovieDB.privat = false; 
        } else {
            personalMovieDB.privat = true; 
        }
    },
    writeYourGenres: function() {
        for (let i = 1; i < 4; i++) {
            let genre = prompt(`Ваш любимый жанр под номером ${i}`, '');

            while (genre == null || genre == '')  {
                genre = prompt(`Ваш любимый жанр под номером ${i}`, '');
            } 

            personalMovieDB.genres.push(genre);

        }
        personalMovieDB.genres.forEach(function(item, i) {
            console.log(`Любимый жанр ${i + 1} - ${item}`);
        }); 
    }
};

