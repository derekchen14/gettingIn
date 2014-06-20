'use strict';

app.controller('ProspectCtrl', function ($scope, $location, Prospect) {
  $scope.prospects = Prospect.all;
  $scope.stages = ['enter','screen','contact','follow-up','review','reject','success'];
  $scope.prospect = {first: '', last: '', stage: 'enter'};

  $scope.addProspect = function() {
    Prospect.create($scope.prospect).then(function (obj) {
      // $scope.prospect = {first: '', last: '', stage: 'enter'};
      $location.path('/prospects' + obj.name());
    });
  };
  $scope.deleteProspect = function (id) {
    Prospect.delete(id);
  };
});

app.controller('ProspectDetailCtrl', function ($scope, $routeParams, Prospect) {
  $scope.prospect = Prospect.find($routeParams.prospectId);
});