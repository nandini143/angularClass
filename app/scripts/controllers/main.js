'use strict';

/**
 * @ngdoc function
 * @name angularClassApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the angularClassApp
 */
angular.module('angularClassApp')
  .controller('MainCtrl', ['$scope','$rootScope',function ($scope, $rootScope) {
  $scope.user = {};
  $scope.submitForm = function(someUser){


    $scope.user.total =(parseFloat(someUser.fullName) + parseFloat(someUser.email));

  //  console.log('total of first two fields:'+
    //  (parseFloat(user.fullName) + parseFloat(user.email)));
  };



  }]);
