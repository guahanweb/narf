#!/usr/bin/env node

/**
 * This is the CLI to enable the NARF output
 */

var colors = require('colors');
var program = require('commander');
var wrap = require('word-wrap');
var narf = require('./narf');

program
    .version('1.0.0')
    .description('Outputs the wisdom of Pinky')
    .option('-a, --about', 'About this program')
    .parse(process.argv);

if (program.about) {
    displayAbout();
    process.exit();
}

function displayAbout() {
    console.log('About Narf!!!'.green);
}

displayQuote(narf.single());

function displayQuote(quote) {
    var txt = wrap(('"' + quote.text + '"').green, { width: 60 });
    console.log(txt);
    console.log(wrap('--------', { width: 60 }));

    var aired = new Date(quote.date);

    console.log(wrap(quote.episode.cyan + ' (first aired ' + getDate(aired) + ')', { width: 60 }));
}

function getDate(date) {
    var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    return date.getDate() + ' ' + months[date.getMonth()] + ' ' + date.getFullYear();
}
