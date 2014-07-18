'use strict';

describe('Service: categoryData', function () {

  // load the service's module
  beforeEach(module('faqApp'));

  // instantiate service
  var categoryData;
  beforeEach(inject(function (_categoryData_) {
    categoryData = _categoryData_;
  }));

  it('should do something', function () {
    expect(!!categoryData).toBe(true);
  });

});
