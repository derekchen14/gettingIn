'use strict';
/* global app:true */
/**
 * @ngdoc overview
 * @name gettingInApp
 * @description
 * # gettingInApp
 *
 * Main module of the application.
 */
var app = angular.module('gettingInApp', [
  'ngAnimate',
  'ngCookies',
  'ngResource',
  'ngRoute',
  'ngSanitize',
  'ngTouch',
  'firebase'
]);

app.constant('FIREBASE_URL',
  'https://shining-fire-8350.firebaseio.com/');

app.config(function ($routeProvider) {
  $routeProvider
    .when('/', {
      templateUrl: 'templates/prospect.html',
      controller: 'ProspectCtrl'
    })
    .when('/prospects/:prospectId', {
      templateUrl: 'templates/detail.html',
      controller: 'ProspectDetailCtrl'
    })
    .when('/about', {
      templateUrl: 'templates/about.html',
      controller: 'AboutCtrl'
    })
    .otherwise({
      redirectTo: '/'
    });
});


