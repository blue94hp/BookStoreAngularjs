'use strict';

/**
 * @ngdoc overview
 * @name bookstoreApp
 * @description
 * # bookstoreApp
 *
 * Main module of the application.
 */
// angular
//   .module('bookstoreApp', [
//     'ngAnimate',
//     'ngCookies',
//     'ngResource',
//     'ngRoute',
//     'ngSanitize',
//     'ngTouch'
//   ])
//   .config(function ($routeProvider) {
//     $routeProvider
//       .when('/main', {
//         templateUrl: 'views/main.html',
//         controller: 'MainCtrl',
//         controllerAs: 'main'
//       })
//       .when('/about', {
//         templateUrl: 'views/about.html',
//         controller: 'AboutCtrl',
//         controllerAs: 'about'
//       })
//       .when('/', {
//         templateUrl: 'views/home.html',
//         controller: 'MainCtrl',
//         controllerAs: 'main'
//       })
//       .when('/:bookId', {
//         templateUrl: 'views/product.html',
//         controller: 'BookCtrl',
//         controllerAs: 'book'
//       })
//       .when('/account', {
//         templateUrl: 'views/creat_new_acc.html',
//         controller: 'AccountCtrl',
//         controllerAs: 'account'
//       })
//       .when('/login', {
//         templateUrl: 'views/login.html',
//         controller: 'LoginCtrl',
//         controllerAs: 'login'
//       })
//       .otherwise({
//         redirectTo: '/'
//       });
//   });

var app = angular.module('bookstoreApp', ['ui.router','ngAnimate','ngCookies','ngResource','ngSanitize','ngTouch']);
 
app.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/');
 
    $stateProvider
        .state('home',{
            url: '/',
            views: {
                'header': {
                    templateUrl: 'views/header.html',
                    // controller: 'HeaderController'
                },
                'content': {
                    templateUrl: 'views/home.html',
                    controller: 'MainCtrl' 
                },
                'footer': {
                    templateUrl: 'views/footer.html',
                    // controller: 'FooterController'
                }
            }
        })
        .state('book', {
            url:'/:bookId',
            views: {
                'header': {
                    templateUrl: 'views/header.html',
                    // controller: 'HeaderController'
                },
                'content': {
                    templateUrl: 'views/product.html',
                    controller: 'BookCtrl' 
                },
                'footer': {
                    templateUrl: 'views/footer.html',
                    // controller: 'FooterController'
                }
            }
        })
        .state('login', {
            url:'/login',
            views: {
                'content': {
                    templateUrl: 'views/login.html',
                    controller: 'LoginCtrl' 
                },
            }
        })
        .state('signin', {
            url:'/signin',
            views: {
                'content': {
                    templateUrl: 'views/creat_new_acc.html',
                    controller: 'AccountCtrl' 
                },
            }
        })
        .state('cart', {
            url:'/cart',
            views: {
                'header': {
                    templateUrl: 'views/header.html',
                    // controller: 'HeaderController'
                },
                'content': {
                    templateUrl: 'views/cart.html',
                    controller: 'CartCtrl' 
                },
                'footer': {
                    templateUrl: 'views/footer.html',
                    // controller: 'FooterController'
                }
            }
        })
        .state('bookManager', {
            url:'/admin/bookManager',
            views: {
                'header': {
                    //templateUrl: 'views/header.html',
                    // controller: 'HeaderController'
                },
                'content': {
                    templateUrl: 'views/bookManager.html',
                    controller: 'BookmanagerCtrl' 
                },
                'footer': {
                    //templateUrl: 'views/footer.html',
                    // controller: 'FooterController'
                }
            }
        })
        .state('accountManager', {
            url:'/admin/accountManager',
            views: {
                'header': {
                    //templateUrl: 'views/header.html',
                    // controller: 'HeaderController'
                },
                'content': {
                    templateUrl: 'views/accountManager.html',
                    controller: 'AccountmanagerCtrl' 
                },
                'footer': {
                    //templateUrl: 'views/footer.html',
                    // controller: 'FooterController'
                }
            }
        })
        .state('cartManager', {
            url:'/admin/cartManager',
            views: {
                'header': {
                    //templateUrl: 'views/header.html',
                    // controller: 'HeaderController'
                },
                'content': {
                    templateUrl: 'views/cartManager.html',
                    controller: 'CartmanagerCtrl' 
                },
                'footer': {
                    //templateUrl: 'views/footer.html',
                    // controller: 'FooterController'
                }
            }
        })
}]);