'use strict';

/**
 * @ngdoc function
 * @name bookstoreApp.controller:CartmanagerCtrl
 * @description
 * # CartmanagerCtrl
 * Controller of the bookstoreApp
 */
angular.module('bookstoreApp')
  .controller('CartmanagerCtrl', function ($scope,$http) {
    $http.get('http://localhost:8080/api/purchase').success(function(data){
   			$scope.purchase = data;
   		});
    $scope.deleteUser = function(purchaseId){
   		$http.delete('http://localhost:8080/api/purchase/'+ purchaseId).success(function(data){
   			$scope.purchase = data;
   		});
   	};
  });
