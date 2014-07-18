angular.module('faqApp').controller('MainCtrl', function ($scope, questionData) {
  'use strict';
  $scope.categories = [];

  questionData().then(function(data) {
    $scope.categories = data;
  });
});
