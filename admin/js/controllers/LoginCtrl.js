angular.module('adminApp')
  .controller('LoginCtrl', function ($scope, $location, AuthFactory) {
    $scope.login = function () {
      const username = $scope.username
      const password = $scope.password
      console.log(username + password)
      AuthFactory.login({ username, password })
        .then(AuthFactory.setCredentials)
        .then(() => $location.path('/products'))
    }
  })

