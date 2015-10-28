'use strict';

angular.module('recipeApp.recipeList', ['ngRoute'])

    .config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/recipes', {
            templateUrl: 'recipeList/recipeList.html',
            controller: 'recipeListCtrl'
        });
    }])

    .controller('recipeListCtrl', recipeListCtrl);

    function recipeListCtrl($scope, $http) {
        $http.get('recipes/recipes.json').success(function(data) {
            $scope.recipes = data;
        });
        $scope.orderProp = 'age';
        $scope.catSort = "";
        $scope.filterRecipes = function (recipe) {
            return !$scope.catSort ?
                recipe : (recipe.category == $scope.catSort);
        };
    }
