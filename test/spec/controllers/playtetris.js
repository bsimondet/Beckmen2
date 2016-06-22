'use strict';

describe('Controller: PlaytetrisCtrl', function () {

  // load the controller's module
  beforeEach(module('codeArcadeApp'));

  var PlaytetrisCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    PlaytetrisCtrl = $controller('PlaytetrisCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(PlaytetrisCtrl.awesomeThings.length).toBe(3);
  });
});
