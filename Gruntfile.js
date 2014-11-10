module.exports = function(grunt) {
  grunt.loadNpmTasks("grunt-contrib-jshint");
  grunt.loadNpmTasks("grunt-simple-mocha");
  grunt.loadNpmTasks("grunt-jscs");

  grunt.initConfig({
    jshint: {
      options: {
        node: true
      },
      src: ["Chapter4/*.js", "Chapter5/*.js", "Chapter6/*.js"]
    },

    jscs: {
      src: srcFiles,
      options: {
        preset: "Airbnb"
      }
    },

    simplemocha: {
      src: ["test/*.js"]
    }
  });

  grunt.registerTask("test", ["jshint", "jscs", "simplemocha"]);
  grunt.registerTask("default", ["test"]);
  };
