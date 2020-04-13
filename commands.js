#!/usr/bin/env node
const program = require('commander')
const { getActor, 
    getDirector, 
    getTitle 
} = require('./index');

program
.version('1.0.0')
.description('Movie DB Command Line Application')

//Get Movies for searched Actor
program
.command("getActor <actor>")
.description('See what movies an actor has acted in.')
.action(actor => getActor(actor));

//Get Movies for searched Director
program
.command("getDirector <director>")
.description('See what movies a director has directed.')
.action(director => getDirector((director)));

//Get Cast and Director for searched Movie Title
program
.command("getTitle <title>")
.description('See actors and director for searched movie.')
.action(title => getTitle(title));

program.parse(process.argv)