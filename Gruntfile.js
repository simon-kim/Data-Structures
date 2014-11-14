module.exports = function(grunt) {
  grunt.loadNpmTasks("grunt-contrib-jshint");
  grunt.loadNpmTasks("grunt-simple-mocha");

  grunt.initConfig({
    jshint: {
      options: {
        node: true
      },
      src: ["Chapter4/*.js", "Chapter5/*.js", "Chapter6/*.js", "Chapter10/*.js"]
    },

    simplemocha: {
      src: ["test/*.js"]
    }
  });

  grunt.registerTask("test", ["jshint", "simplemocha"]);
  grunt.registerTask("default", ["test"]);
  };
