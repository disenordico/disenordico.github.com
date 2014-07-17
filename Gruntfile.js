'use strict';

module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    cssmin: {
      combine: {
        files: {
          'css/style.css': ['css/main.css', 'css/syntax.css']
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-cssmin');

  grunt.registerTask('default', ['cssmin']);
};