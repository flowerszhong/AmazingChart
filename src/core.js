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
	 d3 = d3;

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
	init : function () {
		var $el = this.$el,
			width = $el.width(),
			height = $el.height;

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
		
	}
}


chart.extend = function (protoProps) {
	// body...
}

window.chartBase = chart;

})(this);