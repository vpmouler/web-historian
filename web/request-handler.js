var path = require('path');
var archive = require('../helpers/archive-helpers');
// require more modules/folders here!
var helpers = require('./http-helpers');
var fs = require('fs');
var url = require('url');


function fsRequest(url) {
  return fs.readFile('/Users/student/code/hrsf82-web-historian/archives/sites/' + url, function(err, data) {
    if (err) {
      return false;
    } else {
      return true;
    }
  });
}

exports.handleRequest = function (req, res) {
  if ( req.method === 'POST' ) {
    var data = '';
    req.on('error', function(err) {
      console.log(err);
    }).on('data', function(chunk) {
      data += chunk;
    }).on('end', function() {
      data = data.split('=')[1];
      if (fsRequest(data)) {
        console.log('We win!');
      } else {
        console.log('ERROR!');
      }
    });
    // later refactor to conditional
    fs.createReadStream(__dirname + '/public/loading.html').pipe(res);
  } else {

    // if file path doesnt exist, then send to loading
        // figure out a way to get that error
        // concat the url parse to the file path
    // if it does exist, console.log(true)

    // first check whether or not we have the 'url'/file
        // check inside archives/sites (see helper function)
    
    // if we dont have the site currently avail,
        // we createReadstream on loading.html and pipe client
        // ALSO, we need to submit a get/post worker request to fetch that file

    // if url.pathname is inside our local file, then get that local file, and return that to the request;
    fs.createReadStream(__dirname + '/public/index.html').pipe(res);
  } 
};
