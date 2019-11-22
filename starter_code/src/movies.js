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


// Iteration 4: All rates average - Get the average of all rates with 2 decimals

// Iteration 5: Drama movies - Get the average of Drama Movies

// Iteration 6: Time Format - Turn duration of the movies from hours to minutes

// BONUS Iteration: Best yearly rate average - Best yearly rate average
