'use strict';

app.controller('ProspectCtrl', function ($scope, Prospect) {
  // $scope.prospects = [];
  $scope.prospects = Prospect.all;
  $scope.stages = ['enter','screen','contact','follow-up','review','reject','success'];
  $scope.prospect = {first: '', last: '', stage: 'enter'};

  $scope.addProspect = function() {
    // $scope.prospects.push($scope.prospect);
    Prospect.create($scope.prospect).then(function () {
      $scope.prospect = {first: '', last: '', stage: 'enter'};
    });
  };
  $scope.deleteProspect = function (id) {
    Prospect.delete(id);
  };
});