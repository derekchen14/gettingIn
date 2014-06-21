'use strict';

app.controller('NavbarCtrl', function ($scope, $location, Prospect) {
  $scope.stages = ['enter','screen','contact','follow-up','review','reject','success'];
  $scope.prospect = {first: '', last: '', stage: 'enter'};

  $scope.addProspect = function () {
    Prospect.create($scope.prospect).then(function (ref) {
      $location.path('/prospects/' + ref.name());
      $scope.prospect = {first: '', last: '', stage: 'enter'};
    });
  };

});