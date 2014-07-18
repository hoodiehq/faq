angular.module('faqApp').controller('MainCtrl', function ($scope, categoryData) {
  'use strict';
  $scope.categories = [];

  categoryData().then(function(data) {
    $scope.categories = data;
  });
});
