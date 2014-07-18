angular.module('faqApp').service('questionData', function ($http, $q, $localStorage) {
  'use strict';

  var fresh = $http.get('https://api.github.com/repos/hoodiehq/faq/issues?state=all&labels=answered', {
    cache: true
  });

  var promise = $localStorage.rawResponse ? $q.when($localStorage.rawResponse) : fresh;

  fresh.then(function(response) {
    $localStorage.rawResponse = response;
  });

  return function() {
    return promise.then(function(response) {
      var questions = _.map(response.data, function(question) {
        /*jshint camelcase: false */
        var result = {
          id: question.id,
          url: question.html_url,
          title: question.title,
          answer: question.body,
          updated: new Date(question.updated_at || question.created_at)
        };

        var categoryPattern = /^cat\:/;
        _.each(question.labels, function(label) {

          if (categoryPattern.test(label.name)) {
            result.category = label.name.replace(categoryPattern, '').trim();
          }
        });

        return result;
      });

      return _.sortBy(questions, function (question) {
        return question.category + question.title;
      });
    });
  };
});
