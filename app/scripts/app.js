angular.module('faqApp', [
  'ngAnimate',
  'ngResource',
  'ngSanitize',
  'ngTouch',
  'ui.router'
]).config(function($urlRouterProvider, $stateProvider) {
  'use strict';

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
