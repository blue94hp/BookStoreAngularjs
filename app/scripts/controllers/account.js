'use strict';

/**
 * @ngdoc function
 * @name bookstoreApp.controller:AccountCtrl
 * @description
 * # AccountCtrl
 * Controller of the bookstoreApp
 */
angular.module('bookstoreApp')
  .controller('AccountCtrl', function ($scope,$http,$state) {
  	$scope.signup = function(){
  		var user = {
   			username : $scope.newAccount.username,
   			email : $scope.newAccount.email,
   			password : $scope.newAccount.password,
   			confirmPassword : $scope.newAccount.confirmPassowrd,
   		};
   		$http.post('http://localhost:8080/api/user', user).success(function(data){
   			$state.go('home');
   		});
  	}
  });
