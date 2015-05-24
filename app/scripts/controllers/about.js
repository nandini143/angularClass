'use strict';

/**
 * @ngdoc function
 * @name angularClassApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the angularClassApp
 */
angular.module('angularClassApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
