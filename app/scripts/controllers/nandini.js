'use strict';
angular.module('angularClassApp')
  .controller('NandiniCtrl',['$scope','$rootScope' ,function ($scope, $rootScope) {
   $rootScope.x = 'aaa';
   $scope.abc = 'xyz';
    console.log('Nandini was Called');
    $scope.oneAtATime = true;

  $scope.groups = $scope.groups = [
    {
      title: 'STAT NAN',
      content: 'STAT NAN'
    },
    {
      title: 'STAT NANDY',
      content: 'STAT NANDY'
    }
  ];

  $scope.items = ['Item 1', 'Item 2', 'Item 3'];

  $scope.addItem = function() {
    var newItemNo = $scope.items.length + 1;
    $scope.items.push('Item ' + newItemNo);
  };

  $scope.status = {
    isFirstOpen: true,
    isFirstDisabled: false
  };
  }]);
