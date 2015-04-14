/*
 * biojs-vis-protein-viewer
 * https://github.com/ragingsquirrel3/biojs-vis-protein-viewer
 *
 * Copyright (c) 2015 Travis Sheppard
 * Licensed under the MIT license.
 */

// chai is an assertion library
var chai = require('chai');

// @see http://chaijs.com/api/assert/
var assert = chai.assert;

// register alternative styles
// @see http://chaijs.com/api/bdd/
chai.expect();
chai.should();

// requires your main app (specified in index.js)
var viewer = require('../');

describe('biojs-vis-protein-viewer module', function(){
  describe('#hello()', function(){
    it('should return a hello', function(){

      assert.equal(viewer.hello('biojs'), ("hello biojs"));
      
      // alternative styles
      viewer.hello('biojs').should.equal("hello biojs");
    });
  });
});
