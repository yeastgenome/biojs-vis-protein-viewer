/*
 * biojs-vis-protein-viewer
 * https://github.com/ragingsquirrel3/biojs-vis-protein-viewer
 *
 * Copyright (c) 2014 Travis Sheppard
 * Licensed under the MIT license.
 */

/**
@class biojsvisproteinviewer
 */


var  biojsvisproteinviewer;
module.exports = biojsvisproteinviewer = function(opts){
  this.el = opts.el;
  this.el.textContent = biojsvisproteinviewer.hello(opts.text);
};

/**
 * Private Methods
 */

/*
 * Public Methods
 */

/**
 * Method responsible to say Hello
 *
 * @example
 *
 *     biojsvisproteinviewer.hello('biojs');
 *
 * @method hello
 * @param {String} name Name of a person
 * @return {String} Returns hello name
 */


biojsvisproteinviewer.hello = function (name) {

  return 'hello ' + name;
};

