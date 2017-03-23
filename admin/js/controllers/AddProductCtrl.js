angular.module('adminApp')

  .controller('AddProductCtrl', function ($scope, DataFactory, $location) {
    const ingCupcakes = ['Base Vainilla', 'Base Chocolate', 'Base Zanahoria', 'Base Red Velvet', 'Crema Vainilla', 'Crema Chocolate', 'Crema de Yogurt', 'Crema de Oreo', 'Crema de Nutella']
    const ingCakes = ['Base Vainilla', 'Base Chocolate', 'Relleno de Nutella', 'Relleno de Vainilla', 'cubierta de Crema...', 'Cubierta de Fondant']

    $scope.showIngredients = () => {
      if ($scope.category === 'cupcakes') {
        $scope.ingList = ingCupcakes
      } else if ($scope.category === 'cakes') {
        $scope.ingList = ingCakes
      }
    }

    $scope.selectedIngredients = []

    $scope.toggleSelection = function (e) {
      const isSelected = e.target.checked
      const ingredientName = e.target.title

      if (isSelected) { // add selected ingredient
        $scope.selectedIngredients.push(ingredientName)
      } else { // remove selected ingredient
        $scope.selectedIngredients = $scope.selectedIngredients.filter(elem => elem != ingredientName)
      }
    }

    $scope.addProd = (e) => {
      e.preventDefault()
      const { category, title, imgURL, description, selectedIngredients, price } = $scope

      DataFactory.addProduct(category, title, imgURL, description, selectedIngredients, price)
        .then(DataFactory.getProducts)
        .then($location.path('/products'))
    }
  })
