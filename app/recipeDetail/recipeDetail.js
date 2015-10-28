'use strict';

angular.module('recipeApp.recipeDetail', ['ngRoute'])

    .config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/recipes/:recipeId', {
            templateUrl: 'recipeDetail/recipeDetail.html',
            controller: 'recipeDetailCtrl'
        });
    }])

    .controller('recipeDetailCtrl', recipeDetailCtrl);

    function recipeDetailCtrl($scope, $http, $routeParams) {
        $http.get('recipes/' + $routeParams.recipeId + '.json').success(function(data) {
            $scope.recipe = data;
        });
    }

