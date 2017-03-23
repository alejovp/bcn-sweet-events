angular.module('adminApp')
  .controller('NavCtrl', function ($scope, $location, AuthFactory) {
    $scope.logout = function () {
      AuthFactory.logout()
      $location.path('/private')
    }
  })
