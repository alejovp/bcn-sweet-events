angular.module('adminApp', [])

  .controller('ProductCtrl', function ($scope, DataFactory) {
    // $scope.test = 'Hello'

    $scope.addProduct = function (e) {
      e.preventDefault()
      DataFactory.addProduct()
        .then(DataFactory.getProducts)
    }
  })

  .factory('DataFactory', function ($http) {
    function getTasks () {

    }
    function getProducts () {
      return $http.get('/products')
      .then(({ data }) => data)
      .then(tasks => $rootScope.tasks = tasks)
    }

    function addProduct () {
      return $http.post('/admin')
    }

    return { addProduct }
  })
