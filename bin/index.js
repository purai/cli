#! /usr/bin/env node
var https = require('https')
var arguments = process.argv.splice(2, process.argv.length -1).join(' ')
console.log(arguments);