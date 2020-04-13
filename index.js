const fetch = require("node-fetch");
const API_KEY = "3cfc468f439e1b2dd2e75bb0dfe05e18";
const searchPersonURL = 'https://api.themoviedb.org/3/search/person?api_key='
const searchMovieURL = 'https://api.themoviedb.org/3/search/movie?api_key='
const movieURL = 'https://api.themoviedb.org/3/movie/'

//getActor
const getActor = async (actor ) => {
    console.log(actor)
    const response = await fetch(`${searchPersonURL}${API_KEY}&language=en-US&query=${actor}&page=1&include_adult=false`);
    const data = await response.json();
    const knownForList = data.results[0].known_for
    const movieList = knownForList.map(movie => movie.title)
    console.log(movieList)
}; 

//getDirector
const getDirector = async (director ) => {
    console.log(director)
    const response = await fetch(`${searchPersonURL}${API_KEY}&language=en-US&query=${director}&page=1&include_adult=false`);
    const data = await response.json();
    const knownForList = data.results[0].known_for
    const movieList = knownForList.map(movie => movie.title)
    console.log(movieList)
}; 

//getTitle
const getTitle = async (title) => {
    const searchedMovieResponse = await fetch(`${searchMovieURL}${API_KEY}&language=en-US&query=${title}&page=1&include_adult=false&append_to_response=credits`);
    const searchedMovieData = await searchedMovieResponse.json();
    const movieId = searchedMovieData.results[0].id

    const response = await fetch(`${movieURL}${movieId}?api_key=${API_KEY}&language=en-US&query=${title}&page=1&include_adult=false&append_to_response=credits`);
    const data = await response.json();
    const castMembers = data.credits.cast.map(actor => actor.name)
    const director = data.credits.crew.find(crew =>{
        return crew.job == 'Director'
    })
    const directorName = director.name

    console.log("Cast: ", castMembers, 'Director: ', directorName)
    

  }; 

module.exports = {
    getActor,
    getDirector,
    getTitle
  }