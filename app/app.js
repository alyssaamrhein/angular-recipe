'use strict';

// Declare app level module which depends on views, and components
angular.module('recipeApp', [
    'ngRoute',
    'ngAnimate',
    'recipeApp.recipeList',
    'recipeApp.recipeDetail',
    'recipeApp.version'
]).
    config(['$routeProvider', function ($routeProvider) {
        $routeProvider.otherwise({redirectTo: '/recipes'});
    }]);
