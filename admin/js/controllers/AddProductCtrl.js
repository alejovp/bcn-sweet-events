(function () {
  angular.module('adminApp')
  .controller('AddProductCtrl', AddProductCtrl)

  function AddProductCtrl ($scope, DataFactory, $location, Upload) {
    const ingCupcakes = ['Base Vainilla', 'Base Chocolate', 'Base Zanahoria', 'Base Red Velvet', 'Crema Vainilla', 'Crema Chocolate', 'Crema de Yogurt', 'Crema de Oreo', 'Crema de Nutella', 'Crema de Mascarpone']
    const ingCakes = ['Bizcocho de Vainilla', 'Bizcocho de Chocolate', 'Bizcocho de Zanahoria', 'Bizcocho de Plátano', 'Bizcocho de Limón', 'Bizcocho de Naranja', 'Relleno de Nutella', 'Relleno de Vainilla', 'Relleno de Mascarpone', 'Relleno dulce de leche', 'cubierta de Crema...', 'Cubierta de Fondant']

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

    $scope.fileSelected = (files) => {
      if (files && files.length) {
        $scope.file = files[0]
      }
    }

    $scope.uploadFile = function () {
      const url = '/api/upload'
      const file = $scope.file

      // show spinning when uploading
      $scope.uploading = true
      document.querySelector('.preview').onload = () => {
        $scope.$apply(() => $scope.uploading = false)
      }

      Upload.upload({ url, file })
        .success(({imageLink}) => $scope.imageLink = imageLink)
        // .progress( console.log )
    }

    $scope.addProd = (e) => {
      e.preventDefault()
      const { category, title, imageLink: imgURL, description, selectedIngredients, price } = $scope

      DataFactory.addProduct(category, title, imgURL, description, selectedIngredients, price)
        .then(DataFactory.getProducts)
        .then($location.path('/products'))
    }
  }
})()
