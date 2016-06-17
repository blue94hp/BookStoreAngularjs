'use strict';

/**
 * @ngdoc function
 * @name bookstoreApp.controller:CartCtrl
 * @description
 * # CartCtrl
 * Controller of the bookstoreApp
 */
angular.module('bookstoreApp')
  .controller('CartCtrl', function ($scope,$http,$state) {
    $http.get('http://localhost:8080/api/cart').success(function(data){
   			$scope.books = data;
   		});

    $scope.purchase = function(){
    	var purchaseHistory = [{
   			book : 'abc',
   			quantity : 1,
   			price : 20000
   		}];
   		$http.post('http://localhost:8080/api/history', purchaseHistory).success(function(data){
   			$state.go('home');
   		});
    }
  });
