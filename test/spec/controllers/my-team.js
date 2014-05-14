'use strict';

describe('Controller: MyTeamCtrl', function () {

  // load the controller's module
  beforeEach(module('ialDashboardApp'));

  var MyTeamCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    MyTeamCtrl = $controller('MyTeamCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
