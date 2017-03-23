angular.module('adminApp')

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

    function addProduct (category, title, imgURL, description, ingredients, price) {
      const data = { category, title, imgURL, description, ingredients, price }
      const url = `/api/products`
      return $http.post(url, data)
    }

    function removeProd (id) {
      const url = `/api/products/${id}`
      return $http.delete(url)
    }

    function orderComp (id) {
      const url = `/api/orders/${id}`
      return $http.put(url)
    }

    return { getProducts, getOrders, removeProd, addProduct, orderComp }
  })
