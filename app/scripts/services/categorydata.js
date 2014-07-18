angular.module('faqApp').service('categoryData', function (questionData) {
  'use strict';

  return function() {
    return questionData().then(function(questions) {
      return _.groupBy(questions, 'category');
    });
  };
});
