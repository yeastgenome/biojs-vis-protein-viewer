/*
 * biojs-vis-protein-viewer
 * https://github.com/ragingsquirrel3/biojs-vis-protein-viewer
 *
 * Copyright (c) 2015 Stanford
 * Licensed under the MIT license.
 */

/**
@class biojsvisproteinviewer
 */
var React = require("react");
var SGDProteinViewer = require("sgd_visualization").ProteinViewer;

var  biojsvisproteinviewer;
module.exports = biojsvisproteinviewer = function(opts){
  this.el = opts.el;
  this.data = opts.data;
  this.locusData = opts.locusData

  // render with react
  React.render(React.createElement(SGDProteinViewer, { data: this.data, locusData: this.locusData }), this.el);
};
