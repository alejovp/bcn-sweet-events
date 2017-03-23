angular.module('adminApp')

  .controller('ProductCtrl', function ($scope, DataFactory, $location) {
    const ingCupcakes = ['Base Vainilla', 'Base Chocolate', 'Base Zanahoria', 'Base Red Velvet', 'Crema Vainilla', 'Crema Chocolate', 'Crema de Yogurt', 'Crema de Oreo', 'Crema de Nutella']
    const ingCakes = ['Base Vainilla', 'Base Chocolate', 'Relleno de Nutella', 'Relleno de Vainilla', 'cubierta de Crema...', 'Cubierta de Fondant']
    // $scope.selectedCat = 'cakes'
    DataFactory.getProducts()

    $scope.showIngredients = () => {
      if ($scope.category === 'cupcakes') {
        $scope.ingList = ingCupcakes
      } else if ($scope.category === 'cakes') {
        $scope.ingList = ingCakes
      }
    }

    $scope.addProd = (e) => {
      e.preventDefault()
      const { category, title, imgURL, description, ingredients, price } = $scope
      console.log(ingredients)
      // DataFactory.addProduct(category, title, imgURL, description, ingredients, price)
    }

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
