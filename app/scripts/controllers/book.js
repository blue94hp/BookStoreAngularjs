'use strict';

/**
 * @ngdoc function
 * @name bookstoreApp.controller:BookCtrl
 * @description
 * # BookCtrl
 * Controller of the bookstoreApp
 */
angular.module('bookstoreApp')
  .controller('BookCtrl', function ($scope,$http,$stateParams) {
  	// $scope.title = "abc";
   	$http.get('http://localhost:8080/api/book/'+ $stateParams.bookId).success(function(data){
   		$scope.id=data.id;
   		$scope.title = data.title;
   		$scope.type = data.type;
   		$scope.author=data.author;
   		$scope.publisher=data.publisher;
   		$scope.coverType=data.coverType;
   		$scope.format=data.format;
   		$scope.numberOfPage=data.numberOfPage;
   		$scope.price=data.price;
   		$scope.description = data.description;
   		$scope.imageUrl=data.imageUrl;
   	});

    $scope.addToCart = function(bookId){
      $http.post('http://localhost:8080/api/cart/'+bookId).success(function(data){
        
      });
    }
  });
