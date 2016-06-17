'use strict';

/**
 * @ngdoc function
 * @name bookstoreApp.controller:AccountmanagerCtrl
 * @description
 * # AccountmanagerCtrl
 * Controller of the bookstoreApp
 */
angular.module('bookstoreApp')
  .controller('AccountmanagerCtrl', function ($scope,$http) {
    $http.get('http://localhost:8080/api/user').success(function(data){
   			$scope.users = data;
   		});
    $scope.deleteUser = function(userId){
   		$http.delete('http://localhost:8080/api/user/'+ userId).success(function(data){
   			$scope.users = data;
   		});
   	};
  });
