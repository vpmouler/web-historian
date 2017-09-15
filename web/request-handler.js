var path = require('path');
var archive = require('../helpers/archive-helpers');
// require more modules/folders here!
var helpers = require('./http-helpers');
var fs = require('fs');
// var indexhtml = fs.createReadStream(__dirname + '/public/index.html');

exports.handleRequest = function (req, res) {

  fs.createReadStream(__dirname + '/public/index.html').pipe(res);
  // var data = '';
  
  // indexhtml.on('data', function(chunk) {
  //   data += chunk;
  // });

  // indexhtml.on('end', function() {
  //   res.end(data);
  // });
  // res.end(
  //   fs.readFileSync(__dirname + '/public/index.html', 'utf8', function(err, data) {
  //     return data;
  //   })
  // );
};
