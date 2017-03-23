angular.module('adminApp')

  .controller('ProductCtrl', function ($scope, DataFactory, $location) {
    DataFactory.getProducts()

    $scope.rmvProduct = (e, id) => {
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
