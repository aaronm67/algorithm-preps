var _ = require('lodash');
var should = require('chai').should()
var path = require('path');
var fileFinder = require('../file-duplicate-finder.js');

var normalizeFile = function(filename) {
  return path.join(__dirname, 'test-assets', filename);
};

describe('file-duplicate', function() {
  it('should find duplicate files', function(done) {
    var files = [ 'file1.txt', 'file2.txt', 'file3.txt' ];
    files = files.map(normalizeFile);

    fileFinder(files).then(function(dupes) {
      var expectedDupes =  [['file1.txt', 'file2.txt']];
      expectedDupes = expectedDupes.map(function(dupeList) {
        return dupeList.map(normalizeFile);
      });
      expectedDupes.should.deep.equal(dupes);
      done();
    }).catch(function(e) {
      done(e);
    });
  });

  it('should returne empty for non-dupes', function(done) {
    var files = [ 'file1.txt', 'file3.txt' ].map(normalizeFile);
    fileFinder(files).then(function(dupes) {
      dupes.should.deep.equal([]);
      done();
    }).catch(function(e) {
      done(e);
    });
  });
});