const fetch = require("node-fetch");
const API_KEY = "3cfc468f439e1b2dd2e75bb0dfe05e18";
const searchPersonURL = 'https://api.themoviedb.org/3/search/person?api_key='

//getActor
const getActor = async (actor) => {
    console.log(actor)
    const response = await fetch(`${searchPersonURL}${API_KEY}&language=en-US&query=${actor}&page=1&include_adult=false`);
    const data = await response.json();
    const knownForList = data.results[0].known_for
    const movieList = knownForList.map(movie => movie.title)
    console.log(movieList)
}; 

//getDirector
const getDirector = async (director) => {
    console.log(director)
    const response = await fetch(`${searchPersonURL}${API_KEY}&language=en-US&query=${director}&page=1&include_adult=false`);
    const data = await response.json();
    const knownForList = data.results[0].known_for
    const movieList = knownForList.map(movie => movie.title)
    console.log(movieList)
}; 

//getTitle

module.exports = {
    getActor,
    getDirector,
    // getTitle
  }