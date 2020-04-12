#!/usr/bin/env node
const program = require('commander')
const { getActor, getDirector, getTitle } = require('./index');

program
.version('1.0.0')
.description('Movie DB Command Line Application')

// Add program.commands below

program.parse(process.argv)