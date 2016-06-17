'use strict';

describe('Controller: CartmanagerCtrl', function () {

  // load the controller's module
  beforeEach(module('bookstoreApp'));

  var CartmanagerCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    CartmanagerCtrl = $controller('CartmanagerCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(CartmanagerCtrl.awesomeThings.length).toBe(3);
  });
});
