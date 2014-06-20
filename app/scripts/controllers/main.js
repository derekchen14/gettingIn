'use strict';

/**
 * @ngdoc function
 * @name gettingInApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the gettingInApp
 */
angular.module('gettingInApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
