var fs = require('fs');
var md5File = require('md5-file')

module.exports = function findDuplicates(files) {
  var promises = files.map(function(file) {
    return new Promise(function(resolve, reject) {
      md5File(file, function(err, hash) {
        if (err) reject(err);

        resolve({
          file: file,
          hash: hash
        });
      });
    });
  });

  var hashes = {};
  var dupes = {};
  return Promise.all(promises).then(function(arr) {
    for (var i = 0; i < arr.length; i++) {
      var obj = arr[i];
      var file = obj.file;
      var hash = obj.hash;
      if (typeof(hashes[hash]) !== 'undefined') {
        if (typeof(dupes[hash]) !== 'undefined') {
          dupes[hash].push(file);
        }
        else {
          dupes[hash] = [ hashes[hash], file ];
        }
      }

      hashes[hash] = file;
    } 

    var keys = Object.keys(dupes);
    if (keys.length === 0) { return [] };

    return keys.map(function(key) {
      return dupes[key];
    });
  }).catch(function(e) {
    console.log(e);
  });
};