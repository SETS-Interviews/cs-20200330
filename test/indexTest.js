// let assert = require('chai').assert
// const getActor = require('../index').getActor;
// const getDirector = require('../index').getDirector;
// const getTitle = require('../index').getTitle;

const nodeFetchMatchers = require('node-fetch-response-matchers');
const fetch = require('node-fetch');
const chai = require('chai');
const expect = chai.expect;
let should = chai.should();


chai.use(nodeFetchMatchers);

describe('getActor', function(){
    it('should get movies of searched actor', function(){
        fetch('https://api.themoviedb.org/3/search/person?api_key=3cfc468f439e1b2dd2e75bb0dfe05e18&language=en-US&query=tom+hanks&page=1&include_adult=false')
        .then(response => {
            response.json()
            expect(response.status).to.equal(200)
            expect("Content-Type", "application/json");
            response.body.should.be.an('object')
        })
    });
});

describe('getDirector', function(){
    it('should get movies of searched director', function(){
        fetch('https://api.themoviedb.org/3/search/person?api_key=3cfc468f439e1b2dd2e75bb0dfe05e18&language=en-US&query=steven+spielberg&page=1&include_adult=false')
        .then(response => {
            expect(response.status).to.equal(200)
            expect("Content-Type", "application/json");
            response.body.should.be.an('object')
        })
    });
});

describe('getDirector', function(){
    it('should get movies return movie id', function(){
        fetch('https://api.themoviedb.org/3/search/movie?api_key=3cfc468f439e1b2dd2e75bb0dfe05e18&language=en-US&query=shawshank+redemption&page=1&include_adult=false')
        .then(response => {
            expect(response.status).to.equal(200)
            expect("Content-Type", "application/json");
            response.body.should.be.an('object')
        })
    });
    it('should get movies return cast and director', function(){
        fetch('https://api.themoviedb.org/3/movie/247?api_key=3cfc468f439e1b2dd2e75bb0dfe05e18&language=en-US&query=${title}&page=1&include_adult=false&append_to_response=credits')
        .then(response => {
            expect(response.status).to.equal(200)
            expect("Content-Type", "application/json");
            response.body.should.be.an('object')
        })
    });
});