'use strict';

/**
 * @ngdoc function
 * @name gettingInApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the gettingInApp
 */
angular.module('gettingInApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
