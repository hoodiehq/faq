angular.module('faqApp').service('questionData', function ($http) {
  'use strict';

  return function() {
    return $http.get('https://api.github.com/repos/hoodiehq/faq/issues?state=all&labels=answered');
      // .then(function() {

      // });
  };
});
