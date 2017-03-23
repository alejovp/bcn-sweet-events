angular.module('adminApp')

  .controller('LoginCtrl', function ($scope, $location, AuthFactory, $rootScope) {
    $scope.login = function () {
      const username = $scope.username
      const password = $scope.password
      $rootScope.username = username
      AuthFactory.login({ username, password })
        .then(AuthFactory.setCredentials)
        .then(() => $location.path('/home'))
    }
  })

