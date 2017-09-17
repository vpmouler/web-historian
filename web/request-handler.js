var path = require('path');
var archive = require('../helpers/archive-helpers');
// require more modules/folders here!
var helpers = require('./http-helpers');
var fs = require('fs');
var url = require('url');


var addUrlToList = function(url, callback) {
  fs.open('/Users/student/code/hrsf82-web-historian/archives/sites/' + url, 'w', function() {
  });
};

exports.handleRequest = function (req, res) {
  if ( req.method === 'POST' ) {
    var data = '';
    req.on('error', function(err) {
      console.log(err);
    }).on('data', function(chunk) {
      data += chunk;
    }).on('end', function() {
      data = data.split('=')[1];
      fs.access('/Users/student/code/hrsf82-web-historian/archives/sites/' + data, function(err) {
        if (err) {
          console.log('ERROR:', err);
          addUrlToList(data);
          fs.appendFile('/Users/student/code/hrsf82-web-historian/archives/sites.txt', data + '+', function(err) {
            if (err) {
              console.log('error inside appendFile');
            } else {
              console.log('File Appended');
            }
          });
          fs.createReadStream(__dirname + '/public/loading.html').pipe(res);
        } else {
          console.log('ACCESSED');
          // if file exists, pipe through the html to client
          console.log('data', data);
          fs.createReadStream('/Users/student/code/hrsf82-web-historian/archives/sites/' + data).pipe(res);
          
        }
      });


      
    });
    
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
