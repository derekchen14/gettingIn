'use strict';

app.controller('AuthCtrl', function ($scope, $location, Auth) {
  if (Auth.isSignedIn()) {
    $location.path('/');
  }

  $scope.$on('$firebaseSimpleLogin:login', function () {
    $location.path('/');
  });

  $scope.login = function () {
    Auth.login($scope.user).then(function () {
      $location.path('/');
    }, function(error) {
      $scope.error = error.toString();
    });
  };
  $scope.signup = function () {
    Auth.signup($scope.user).then(function (authUser) {
      Auth.login(authUser.user);
      $location.path('/');
    }, function(error) {
      $scope.error = error.toString();
    });
  };
});