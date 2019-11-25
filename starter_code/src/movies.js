/* eslint no-restricted-globals: 'off' */

// Iteration 1: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(newArray) {
    let copy = [...newArray]

    copy.sort((a, b) => {
        if (a.year > b.year) {
            return 1;
        }
        else if (b.year > a.year) {
            return -1;
        }
        else {
            if (a.title > b.title) {
                return 1;
            }
            else if (b.title > a.title) {
                return -1;
            }
        }
    })
    return copy;
}
console.log(orderByYear(movies));

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct
function howManyMovies(movieList) {
    let newList = movieList.filter(movies => movies.director === 'Steven Spielberg');
    return newList.filter(movies => movies.genre.includes('Drama')).length;
}

// Iteration 3: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(newArray){
    let copy = [...newArray]
    
    let newList = copy.map((each)=>{
      return each.title;
    })

    newList.sort((a, b) => {
        if (a > b) {
            return 1
        }
        else if (b > a) {
            return -1;
        }
    })
    return newList.slice(0,20);
    

}
// Iteration 4: All rates average - Get the average of all rates with 2 decimals

function ratesAverage(movieList) {
    if (movieList.length === 0) {
        return 0;
    }

    let movieRates = movieList.map(movie => movie.rate);
    let checkedMovieRates = movieRates.filter(movie => movie !== undefined);
    const totalReviews = checkedMovieRates.reduce((sum, elem) => {
        return sum += elem;
    }, 0);

    return Math.round((totalReviews / checkedMovieRates.length) * 100) / 100;

    //Returns average when some movies do not have rate but still not checked

}

// Iteration 5: Drama movies - Get the average of Drama Movies

function dramaMoviesRate(movieList) {
    if (movieList.length === 0) return 0;

    let dramaMovies = movieList.filter(movie => movie.genre.includes('Drama'));
    if (dramaMovies.length === 0) return 0;

    let movieRates = dramaMovies.map(movie => movie.rate);
    let checkedMovieRates = movieRates.filter(movie => movie !== undefined);
    const totalReviews = checkedMovieRates.reduce((sum, elem) => {
        return sum += elem;
    }, 0);

    return Math.round((totalReviews / checkedMovieRates.length) * 100) / 100;
}

// Iteration 6: Time Format - Turn duration of the movies from hours to minutes

function turnHoursToMinutes(movieList) {

    let newList = movieList.map(movie => movie);

    let changedDuration = newList.map((movie) => {
        let time = movie.duration;
        let min;
        let hour;
        let final;
        let temp;
        if (time.includes('h') && time.includes('min')) {
            temp = time.replace('h', ' ').replace('min', ' ').trim();
            let hour = Number(temp.substring(0, temp.indexOf(" ")));
            let min = Number(temp.substring(temp.indexOf(" ") + 1));
            final = (hour * 60 + min);
        }
        else if (time.includes('h')) {
            hour = Number(time.substring(0, time.indexOf("h")));
            final = hour * 60;
        }
        else if (time.includes('min')) {
            min = Number(time.substring(0, time.indexOf("min")));
            final = min;
        }
        return {
            title: movie.title,
            year: movie.year,
            director: movie.director,
            duration: final,
            genre: movie.genre,
            rate: movie.rate
        }
    })
    return changedDuration;
}