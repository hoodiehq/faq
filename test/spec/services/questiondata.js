'use strict';

describe('Service: questionData', function () {

  // load the service's module
  beforeEach(module('faqApp'));

  // instantiate service
  var questionData;
  beforeEach(inject(function (_questionData_) {
    questionData = _questionData_;
  }));

  it('should do something', function () {
    expect(!!questionData).toBe(true);
  });

});
