/**
 * base chart
 * @authors mzhong (flowerszhong.github.com)
 * @date    2013-08-19 22:10:42
 * @version 0.1
 */

(function(window,undefined){

// var d3 = require("d3");
// var $ = require("jquery");
var $ = window.$,
	 d3 = window.d3;

var __defaults = {
	margin : [5,5,40,40],//top,right,bottom,left
	axes : [{
		orient : "left",
		type : "linear"
	},{
		orient : "bottom",
		type : "time"
	}],
	layout : ["back","main","mask"]
}

var chart = function (el) {
	this.$el = $(el)
	this.init();
};

chart.prototype = {
	_x_scale : null,
	_y_scale : null,
	_x_extent : null,
	_y_extent : null,
	_x_domain : null,
	_y_domain : null,
	_x_axis: null,
	_y_axis : null,
	_x_axis_node : null,
	_y_axis_node : null,
	init : function () {
		var $el = this.$el,
			width = $el.width(),
			height = $el.height();

		this._layoutSize = {
			w : width,
			h : height
		}
		this.svg_el = d3.select($el.get(0)).append("svg")
			.attr("width",width)
			.attr("height",height)
			.append("g");

		this.initLayout();
	},
	initLayout : function () {
		this.drawAxes();
	},
	drawAxes : function () {
		var _axes = __defaults.axes;
		var i = 0,
			length = _axes.length;
		for(;i < length; i++){
			this.renderAxis([_axes[i]]);
		}
	},
	renderAxis : function (config) {
		var scale;
		if(config.type == "linear"){

		}
	}
}


chart.extend = function (protoProps) {
	// body...
}

window.chartBase = chart;

})(this);