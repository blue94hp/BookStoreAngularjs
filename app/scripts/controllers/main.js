'use strict';

/**
 * @ngdoc function
 * @name bookstoreApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the bookstoreApp
 */
var bookstoreApp = angular.module('bookstoreApp');
// angular.module('bookstoreApp',[])
bookstoreApp.controller('MainCtrl', function ($scope,$http,$sce) {

  	// $http({
  	// 	method:'GET',
  	// 	url:'http://localhost:8080/api/image',
  	// 	responseType: 'arraybuffer'
  	// }).success(function(data){
  	// 	var file = new Blob([data], {type: 'image/jpg'});
   //    	var fileURL = URL.createObjectURL(file);
   //    	$scope.imagePath = $sce.trustAsResourceUrl(fileURL);
  	// });

  	$scope.uploadImage = function(){
  		var formData=new FormData();
		formData.append("file",$scope.file);
 		$http({
      	  	method: 'POST',
       	 	url: 'http://localhost:8080/api/image',
        	headers: {'Content-Type': undefined},
        	data: formData,
        	transformRequest: function(data, headersGetterFunction) {
                        return data;
         }
     })
    .success(function(data, status) {   
                    alert("success");
     })
  	};

  	// $scope.imagePath = "http://localhost:8080/api/image";

   	$http.get('http://localhost:8080/api/books?page=0&size=4').success(function(data){
   			$scope.books = data;
   		});
   	
    $scope.paging = function(page){
      $http.get('http://localhost:8080/api/books?page='+page+'&size=4').success(function(data){
        $scope.books = data;
      });
    }

   	$scope.addBook = function(){
   		var book = {
   			title : $scope.newBook.title,
   			type : $scope.newBook.type,
   			author : $scope.newBook.author,
   			publisher : $scope.newBook.publisher,
   			coverType : $scope.newBook.coverType,
   			format : $scope.newBook.format,
   			numberOfPage : $scope.newBook.numberOfPage,
   			price : $scope.newBook.price,
   			description : $scope.newBook.description,
   		};
   		$http.post('http://localhost:8080/api/book', book).success(function(data){
   			$scope.books = data;
   		});
   		$scope.newBook.title = '';
   		$scope.newBook.type = '';
   		$scope.newBook.author = '';
   		$scope.newBook.publisher = '';
   		$scope.newBook.coverType = '';
   		$scope.newBook.format = '';
   		$scope.newBook.numberOfPage = '';
   		$scope.newBook.price = '';
   		$scope.newBook.description = '';
   	};

   	$scope.deleteBook = function(bookId){
   		$http.delete('http://localhost:8080/api/book/'+ bookId).success(function(data){
   			$scope.books = data;
   		});
   	};
   	$scope.editBook = function(book){
   		$scope.newBook = book;
  
   	};
   	$scope.saveBook = function(){
   		var book = {
   			title : $scope.newBook.title,
   			type : $scope.newBook.type,
   			author : $scope.newBook.author,
   			publisher : $scope.newBook.publisher,
   			coverType : $scope.newBook.coverType,
   			format : $scope.newBook.format,
   			numberOfPage : $scope.newBook.numberOfPage,
   			price : $scope.newBook.price,
   			description : $scope.newBook.description
   		};
   		$http.put('http://localhost:8080/api/book/'+ $scope.newBook.id, book).success(function(data){
   			$scope.books = data;
   		})
   		$scope.newBook.title = '';
   		$scope.newBook.type = '';
   		$scope.newBook.author = '';
   		$scope.newBook.publisher = '';
   		$scope.newBook.coverType = '';
   		$scope.newBook.format = '';
   		$scope.newBook.numberOfPage = '';
   		$scope.newBook.price = '';
   		$scope.newBook.description = '';
   	};

  });

bookstoreApp.directive('fileModel', ['$parse', function ($parse) {
        return {
           restrict: 'A',
           link: function(scope, element, attrs) {
              element.bind('change', function(){
              $parse(attrs.fileModel).assign(scope,element[0].files[0])
                 scope.$apply();
              });
           }
        };
     }]);

