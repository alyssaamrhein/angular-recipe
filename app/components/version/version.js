'use strict';

angular.module('recipeApp.version', [
  'recipeApp.version.interpolate-filter',
  'recipeApp.version.version-directive'
])

.value('version', '0.1');
