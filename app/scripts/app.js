'use strict';

/**
 * @ngdoc overview
 * @name angularClassApp
 * @description
 * # angularClassApp
 *
 * Main module of the application.
 */
angular.module('angularClassApp',
    [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'ui.bootstrap'])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/home', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .when('/contact',{
        templateUrl: 'views/contact.html',
        controller: 'ContactCtrl'
      })
      .when('/nandini',{
        templateUrl: 'views/nandini.html',
        controller: 'NandiniCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
