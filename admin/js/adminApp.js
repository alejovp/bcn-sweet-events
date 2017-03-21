angular.module('adminApp', ['ngRoute', 'angular-jwt'])
  .config(function ($httpProvider) {
    $httpProvider.interceptors.push('AuthInterceptor')
  })
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: '/admin/templates/home.html',
        // controller: 'HomeCtrl'
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
        controller: 'ProductCtrl',
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
      // .otherwise('/tasks')
  })

  .controller('HomeCtrl', function ($scope, DataFactory, $rootScope) {
    // $scope.test = 'Hello'
    // const orders, products
    // DataFactory.getOrders()
    // DataFactory.getProducts()
    //   .then(products = $rootScope.products)
    //   .then(
    //     $scope.proLength = products.length
    //     console.log(products.length)
    //   )

    // console.log(orders)
    // function leng
    // $scope.ordersQtty =
    // .filter((elem) => elem.product._id !== id)
  })

  .controller('ProductCtrl', function ($scope, DataFactory) {
    // $scope.test = 'Hello'
    DataFactory.getProducts()

    $scope.rmvProduct = function (e, id) {
      e.preventDefault()

      DataFactory.removeProd(id)
        .then(DataFactory.getProducts)
    }

    // $scope.addTask = function (e) {
    //   e.preventDefault()
    //   // const title = $scope.title
    //   DataFactory.addTask()
    //     .then(DataFactory.getTasks)
    // }
  })

  .controller('OrderCtrl', function ($scope, DataFactory) {
    // $scope.test = 'Hello'
    DataFactory.getOrders()

    $scope.orderDone = function (e, id) {
      e.preventDefault()

      DataFactory.orderComp(id)
        .then(DataFactory.getOrders)
    }
  })

  .factory('DataFactory', function ($http, $rootScope) {
    function getProducts () {
      return $http.get('/api/products')
      .then(({ data }) => data)
      .then(products => $rootScope.products = products)
    }

    function getOrders () {
      return $http.get('/api/orders')
      .then(({ data }) => data)
      .then(orders => $rootScope.orders = orders)
    }

    function removeProd (id) {
      const url = `/api/products/${id}`
      return $http.delete(url)
    }

    function orderComp (id) {
      const url = `/api/orders/${id}`
      return $http.put(url)
    }

    return { getProducts, getOrders, removeProd, orderComp }
  })
