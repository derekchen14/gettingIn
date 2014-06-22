'use strict';

app.controller('ProspectCtrl', function ($scope, $location, Prospect) {
  $scope.prospects = Prospect.all;

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
  $scope.currentDate = new Date();

  $scope.addNote = function () {
    console.log($scope.note.text);
    Prospect.addNote($routeParams.prospectId, $scope.note.text);
    $scope.note.text = '';
  };
  $scope.removeNote = function (noteId) {
    console.log('noteID from Detail Controller: '+ noteId);
    console.log('pID from Detail Controller: '+ $routeParams.prospectId);
    Prospect.removeNote(noteId, $routeParams.prospectId);
  };
});