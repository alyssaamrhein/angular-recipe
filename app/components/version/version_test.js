'use strict';

describe('recipeApp.version module', function() {
  beforeEach(module('recipeApp.version'));

  describe('version service', function() {
    it('should return current version', inject(function(version) {
      expect(version).toEqual('0.1');
    }));
  });
});
