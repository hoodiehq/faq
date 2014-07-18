angular.module('faqApp', [
  'ngAnimate',
  'ngResource',
  'ngSanitize',
  'ngTouch',
  'ui.router',
  'angular-loading-bar'
]).config(function($urlRouterProvider, $stateProvider, cfpLoadingBarProvider) {
  'use strict';

  cfpLoadingBarProvider.includeSpinner = false;

  $urlRouterProvider.otherwise('/');

  $stateProvider
    .state('index', {
      url: '/',
      templateUrl: 'views/index.html',
      controller: 'MainCtrl'
    })
    .state('question', {
      url: '/question/:id',
      templateUrl: 'views/question.html',
      controller: 'QuestionCtrl'
    });
});
