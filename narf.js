var quotes = require('./quotes.json').sort(function (a, b) {
    // Sort them by the date they were aired
    return +(new Date(a.date)) > +(new Date(b.date));
});

module.exports = {
    single: single
};

function single() {
    var index = Math.floor(Math.random() * quotes.length);
    return quotes[index];
}
