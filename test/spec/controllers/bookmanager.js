'use strict';

describe('Controller: BookmanagerCtrl', function () {

  // load the controller's module
  beforeEach(module('bookstoreApp'));

  var BookmanagerCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    BookmanagerCtrl = $controller('BookmanagerCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(BookmanagerCtrl.awesomeThings.length).toBe(3);
  });
});
