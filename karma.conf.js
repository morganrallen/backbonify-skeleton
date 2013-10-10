module.exports = function(config) {
  config.set({
    basePath: '',
    singleRun: true,
    frameworks: ['jasmine', 'browserify'],
    files: [
      'build/bundle.instrumented.js',
      'test/test.js'
    ],
    browsers: ['PhantomJS'],

    preprocessors: {
      '**/test/test.js': ['browserify' ],
    },

    browserify: {},
    htmlReporter: {
      outputFile: "./coverage/unit.html"
    },

    coverageReporter: {
      type: 'html',
      dir: 'coverage/'
    },

    reporters: ['progress', 'coverage', 'html'],
  });
};
