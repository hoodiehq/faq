angular.module('faqApp', [
  'ngAnimate',
  'ngAria',
  'ngResource',
  'ngSanitize',
  'ngTouch',
  'ui.router',
  'angular-loading-bar',
  'ngStorage'
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
}).run(function($q, $window) {
  'use strict';

  var defer = $q.defer();
  var cache = $window.applicationCache;
  cache.addEventListener('updateready', defer.resolve);

  defer.promise.then(function() {
    $window.location.reload();
  });

  if (cache.status === cache.UPDATEREADY) {
    defer.resolve();
  }
});
