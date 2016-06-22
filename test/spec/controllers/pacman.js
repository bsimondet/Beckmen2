'use strict';

describe('Controller: PacmanCtrl', function () {

  // load the controller's module
  beforeEach(module('codeArcadeApp'));

  var PacmanCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    PacmanCtrl = $controller('PacmanCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(PacmanCtrl.awesomeThings.length).toBe(3);
  });
});
