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
var ProteinViewer = require('../');

describe('biojs-vis-protein-viewer module', function(){
  describe('#init()', function(){
    it('should be able to be initialized with data', function(){
   	  var pv = new ProteinViewer({

   	  });
   	  console.log(pv)
      // assert.equal(ProteinViewer.hello('biojs'), ("hello biojs"));
    });
  });
});
