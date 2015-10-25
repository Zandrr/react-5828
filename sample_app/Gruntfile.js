module.exports = function(grunt) {
  grunt.initConfig({
    connect: {
      web: {
        options: {
          port: '8082',
          base: ['www']
        }
      }
    },

    watch: {
      js: {
        files: ['js/**/*'],
        tasks: ['browserify']
      },
    },

    browserify: {
      javascripts: {
        src: 'js/index.js',
        dest: 'www/index.js'
      },
      options: {
        transform: ['reactify']
      }
    }
  });

  require('load-grunt-tasks')(grunt);
  grunt.registerTask('develop', ['browserify', 'connect:web', 'watch']);
};