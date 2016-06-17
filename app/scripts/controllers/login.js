'use strict';

/**
 * @ngdoc function
 * @name bookstoreApp.controller:LoginCtrl
 * @description
 * # LoginCtrl
 * Controller of the bookstoreApp
 */
angular.module('bookstoreApp')
  .controller('LoginCtrl', function ($scope,$http,$state) {
  	$scope.login = function(){
  		var user = {
   			username : $scope.account.username,
   			password : $scope.account.password
   	};
   	$http.post('http://localhost:8080/api/login', user).success(function(data){
   		$state.go('home');
   	});
   }    
  });
