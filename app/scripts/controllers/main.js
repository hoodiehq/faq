angular.module('faqApp').controller('MainCtrl', function ($scope, questionData) {
  'use strict';
  $scope.questions = [];

  questionData().then(function(data) {
    console.log(data);
  });
});
