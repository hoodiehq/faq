angular.module('faqApp').controller('QuestionCtrl', function ($scope, $state, $sanitize, questionData) {
  'use strict';

  $scope.question = {};

  $scope.isOutDated = function(question) {
    if (!question.updated) {
      return false;
    }
    if (Date.now() - question.updated > 30 * 24 * 60 * 60 * 1e3 * 3) {
      return true;
    }
    return false;
  };

  questionData().then(function(questions) {
    var question = _.find(questions, function(question) {
      return question.id+'' === $state.params.id+'';
    });

    question.answer = $sanitize(question.answer);

    $scope.question = question;
  });
});
