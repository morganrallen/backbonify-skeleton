module.exports = function(grunt) {
  grunt.loadNpmTasks('grunt-browserify');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-istanbul');
  grunt.loadNpmTasks('grunt-karma');

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    browserify: {
      dist: {
        files: {
          "build/bundle.js": "src/app.js"
        },
        options: {
          debug: true
        }
      },

      inst: {
        files: {
          "build/bundle.instrumented.js" : "build/instrumented/src/app.js"
        }
      }
    },

    instrument: {
      files: 'src/**/*.js',
      options: {
        lazy: true,
        basePath: 'build/instrumented/'
      }
    },

    karma: {
      unit: {
        configFile: "karma.conf.js"
      }
    },

    uglify: {
      build: {
        src: 'build/bundle.js',
        dest: 'build/bundle.min.js'
      }
    }
  });

  grunt.registerTask('default', [ 'browserify:dist', 'uglify' ]);
  grunt.registerTask('inst', [ 'instrument', 'browserify:inst' ]);
}
