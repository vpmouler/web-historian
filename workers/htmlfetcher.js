// Use the code in `archive-helpers.js` to actually download the urls
// that are waiting.

var fs = require('fs');
var archive = require('../helpers/archive-helpers');
var request = require('request');
var rp = require('request-promise');
var cheerio = require('cheerio');

fs.readFile('/Users/student/code/hrsf82-web-historian/archives/sites.txt', function(err, data) {
  var data = data.toString().split('+');
  console.log(data);
  for (var i = 0; i < data.length - 1; i++) {
    var url = data[i];
    console.log(url);
    
    rp('https://' + url).then(function( htmlString ) {
      // process html
      console.log('success inside request-promise', htmlString)
      fs.writeFile('/Users/student/code/hrsf82-web-historian/archives/sites/' + url, htmlString)

    }).catch(function(err) {
      console.log('error inside request-promise', err)
    });

    // request('https://' + url, function(error, response, body) {
    //   if (body) {
    //     fs.writeFile('/Users/student/code/hrsf82-web-historian/archives/sites/' + url, body, function(err) { //check appendFile vs writeFile
    //       console.log('url in request', url);
    //       if (err) {
    //         console.log('ERROR Writing File', err);
    //       } else {
    //         console.log('SUCCESSFULLY WHATEVER THE FUCKYOUU WANT');
    //       }
    //     });
    //   }
    // });
  }
});


