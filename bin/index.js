#! /usr/bin/env node

var http = require('http')
var querystring = require('querystring')

var arguments = process.argv.splice(2, process.argv.length - 1).join(' ')
var search = querystring.stringify({
    search: arguments
})

http
    .get('http://localhost:3000/events?' + search, function (res) {
        var data = ''

        res.on('data', function (newData) {
            data += newData
        });

        res.on('end', function () {
            var event = JSON.parse(data)
            //var event = JSON.parse(data).events[0].title
            console.log(event)
        })
    })