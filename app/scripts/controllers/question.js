angular.module('faqApp').controller('QuestionCtrl', function ($scope, $state, $sanitize, questionData) {
  'use strict';

  $scope.question = {};

  questionData().then(function(questions) {
    var question = _.find(questions, function(question) {
      return question.id+'' === $state.params.id+'';
    });

    question.answer = $sanitize(marked(question.answer));

    $scope.question = question;
  });
});
