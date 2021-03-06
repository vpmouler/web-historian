var fs = require('fs');
var path = require('path');
var _ = require('underscore');
var request = require('request');

/*
 * You will need to reuse the same paths many times over in the course of this sprint.
 * Consider using the `paths` object below to store frequently used file paths. This way,
 * if you move any files, you'll only need to change your code in one place! Feel free to
 * customize it in any way you wish.
 */

exports.paths = {
  siteAssets: path.join(__dirname, '../web/public'),
  archivedSites: path.join(__dirname, '../archives/sites'),
  list: path.join(__dirname, '../archives/sites.txt')
};

// Used for stubbing paths for tests, do not modify
exports.initialize = function(pathsObj) {
  _.each(pathsObj, function(path, type) {
    exports.paths[type] = path;
  });
};

// The following function names are provided to you to suggest how you might
// modularize your code. Keep it clean!

  // find file that has urls
  // look through that url file
  // if file exists, pass that in callback

exports.readListOfUrls = function(callback) {
};

exports.isUrlInList = function(url, callback) {
};

exports.addUrlToList = function(url, callback) {
  fs.open('/Users/student/code/hrsf82-web-historian/archives/sites/' + url, 'w', function() {
  });
};

exports.isUrlArchived = function(url, callback) {
  fs.access('/Users/student/code/hrsf82-web-historian/archives/sites/' + url, function(err) {
    if (err) {
      console.log('ERROR:', err);
      exports.addUrlToList(url);
    } else {
      console.log('ACCESSED');
    }
  });
};

exports.addUrlToArchive = function(url) {

};

exports.downloadUrls = function(urls) {
  for (var i = 0; i < urls.length - 1; i++) {
    var url = urls[i];
    console.log(jq);
    jq.ajax(url, function() {
      console.log('Fetching');
    }).done(function() {
      console.log('Success!');
    }).fail(function() {
      console.log('Could not fetch');
    });
  }
};




