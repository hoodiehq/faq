angular.module('faqApp').service('questionData', function ($http) {
  'use strict';

  return function() {
    return $http.get('https://api.github.com/repos/hoodiehq/faq/issues?state=all&labels=answered', {
      cache: true
    }).then(function(response) {
      var questions =  _.map(response.data, function(question) {
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
