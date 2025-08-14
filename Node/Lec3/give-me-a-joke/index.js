const joke = require('give-me-a-joke');
// always use const so that no one can make changes throughout the code
//console.log(joke);
joke.getRandomDadJoke(function(joke){
    console.log(joke);
})