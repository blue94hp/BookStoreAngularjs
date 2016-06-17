'use strict';

describe('Controller: AccountmanagerCtrl', function () {

  // load the controller's module
  beforeEach(module('bookstoreApp'));

  var AccountmanagerCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    AccountmanagerCtrl = $controller('AccountmanagerCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(AccountmanagerCtrl.awesomeThings.length).toBe(3);
  });
});
