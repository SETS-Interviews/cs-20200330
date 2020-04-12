#!/usr/bin/env node
const program = require('commander')
const { getActor, 
    // getDirector, 
    // getTitle 
} = require('./index');

program
.version('1.0.0')
.description('Movie DB Command Line Application')

// Add program.commands below

//Get Actor 
program
.command("getActor <actor>")
.description('See what movies an actor has acted in.')
.action(actor => getActor(actor));

//Get Director 
program
.command("getDirector <director>")
.description('See what movies a director has directed.')
.action(director => getActor(director));

program.parse(process.argv)