angular.module('adminApp')

  .config(function ($httpProvider) {
    $httpProvider.interceptors.push('AuthInterceptor')
  })
  .config(function ($routeProvider) {
    $routeProvider
      .when('/home', {
        templateUrl: '/admin/templates/home.html',
        controller: 'HomeCtrl',
        secure: true
      })
      .when('/login', {
        templateUrl: '/admin/templates/login.html',
        controller: 'LoginCtrl'
      })
      .when('/products', {
        templateUrl: '/admin/templates/products.html',
        controller: 'ProductCtrl',
        secure: true
      })
      .when('/addProducts', {
        templateUrl: '/admin/templates/addProduct.html',
        controller: 'AddProductCtrl',
        secure: true
      })
      .when('/orders', {
        templateUrl: '/admin/templates/orders.html',
        controller: 'OrderCtrl',
        secure: true
      })
      .when('/orders/completed', {
        templateUrl: '/admin/templates/compOrders.html',
        controller: 'OrderCtrl',
        secure: true
      })
      .otherwise('/login')
  })
