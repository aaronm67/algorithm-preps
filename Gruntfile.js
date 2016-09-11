module.exports = function (grunt) {

  grunt.initConfig({
    mochaTest: {
      all: {
        options: {
          timeout: 36000,
          reporter: 'spec',
          clearRequireCache: true
        },
        src: ['./test/**/*.js']
      }
    }
  });
  
  grunt.loadNpmTasks('grunt-mocha-test');

  grunt.registerTask('test', function (testFile) {
    grunt.config('mochaTest.all.options.grep', testFile);
    grunt.task.run(['mochaTest:all']);
  });
};
