module.exports = function(grunt) {
  grunt.loadNpmTasks('grunt-browserify');
  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-istanbul');
  grunt.loadNpmTasks('grunt-karma');

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    browserify: {
      dist: {
        files: {
          "build/bundle.js": "src/js/app.js"
        },
        options: {
          debug: true
        }
      },

      inst: {
        files: {
          "build/bundle.instrumented.js": "build/instrumented/src/js/app.js"
        }
      }
    },

    instrument: {
      files: 'src/js/**/*.js',
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

    less: {
      dev: {
        files: {
          'build/bundle.css': "src/css/main.less"
        },
        options: {
          dumpLineNumbers: 'all',
          report: true
        }
      },
      dist: {
        files: {
          'build/bundle.min.css': "src/css/main.less"
        },
        options: {
          report: true,
          yuicompress: true
        }
      }
    },

    uglify: {
      build: {
        src: 'build/bundle.js',
        dest: 'build/bundle.min.js'
      }
    }
  });

  grunt.registerTask('default', ['browserify:dist', 'uglify']);
  grunt.registerTask('inst', ['instrument', 'browserify:inst']);
  grunt.registerTask('all', ['default', 'inst', 'karma']);
}