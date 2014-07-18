module.exports = function(config) {
  'use strict';

  config.set({
    autoWatch: true,

    basePath: '../',

    frameworks: ['jasmine'],

    files: [
      'bower_components/angular/angular.js',
      'bower_components/angular-mocks/angular-mocks.js',
      'bower_components/angular-animate/angular-animate.js',
      'bower_components/angular-resource/angular-resource.js',
      'bower_components/angular-sanitize/angular-sanitize.js',
      'bower_components/angular-touch/angular-touch.js',
      'app/scripts/**/*.js',
      'test/mock/**/*.js',
      'test/spec/**/*.js'
    ],

    exclude: [],

    port: 8080,

    browsers: [
      'PhantomJS'
    ],

    plugins: [
      'karma-phantomjs-launcher',
      'karma-jasmine'
    ],

    singleRun: false,

    colors: true,

    logLevel: config.LOG_INFO,

  });
};
