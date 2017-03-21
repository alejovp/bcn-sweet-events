angular.module('adminApp', ['ngRoute'])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: '/admin/templates/home.html'
        // controller: 'HomeCtrl'
      })
      .when('/products', {
        templateUrl: '/admin/templates/products.html',
        controller: 'ProductCtrl'
      })
      .when('/addProducts', {
        templateUrl: '/admin/templates/addProduct.html',
        controller: 'ProductCtrl'
      })
      .when('/orders', {
        templateUrl: '/admin/templates/orders.html',
        controller: 'OrderCtrl'
      })
      // .otherwise('/tasks')
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

  .controller('OrderCtrl', function ($scope, DataFactory, $rootScope) {
    // $scope.test = 'Hello'
    DataFactory.getOrders()
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

    return { getProducts, getOrders, removeProd }
  })
