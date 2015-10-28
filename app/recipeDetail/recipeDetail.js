'use strict';

angular.module('recipeApp.recipeDetail', ['ngRoute'])

    .config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/recipes/:recipeId', {
            templateUrl: 'recipeDetail/recipeDetail.html',
            controller: 'recipeDetailCtrl as recipeDetail'
        });
    }])

    .controller('recipeDetailCtrl', recipeDetailCtrl);

    function recipeDetailCtrl($http, $routeParams) {
        var vm = this;
        $http.get('recipes/' + $routeParams.recipeId + '.json').success(function(data) {
            vm.recipe = data;
        });
    }

