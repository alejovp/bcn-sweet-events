angular.module('adminApp')

  .controller('OrderCtrl', function ($scope, DataFactory, $location) {
    // $scope.test = 'Hello'
    DataFactory.getOrders()
    $scope.orderDone = function (e, id) {
      e.preventDefault()

      DataFactory.orderComp(id)
        .then(DataFactory.getOrders)
    }
  })
