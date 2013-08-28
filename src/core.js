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
	margin : [5,40,40,40],//top,right,bottom,left
	xType : 'time',
	yType : 'linear',
	axes : [{
		orient : "right",
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
	// _x_axis : null,
	// _y_axis : null,
	// _x_axis_node : null,
	// _y_axis_node : null,
	_x_axis : [],
	_y_axis : [],
	_x_axis_nodes : [],
	_y_axis_nodes : [],
	init : function () {
		var $el = this.$el,
			width = $el.width(),
			height = $el.height();

		this._layoutSize = {
			w : width,
			h : height
		}

		console.log(this._layoutSize);

		this._graphSize = {
			w : width - __defaults.margin[1] - __defaults.margin[3],
			h : height - __defaults.margin[0] - __defaults.margin[2]
		}

		console.log(this._graphSize);

		this.svg = d3.select($el.get(0)).append("svg")
			.attr("width",width)
			.attr("height",height);

		this.svg_main = this.svg.append("g")
			.attr("width",this._graphSize.w)
			.attr("height",this._graphSize.h)
        	.attr("transform", "translate(" + __defaults.margin[0] + "," + __defaults.margin[3] + ")");

		this.initLayout();
	},
	initLayout : function () {
		this.drawCoordinate();
		this.renderCoordinate();
	},
	drawCoordinate : function () {
		this.drawScale();
		var _axes = __defaults.axes;
		var i = 0,
			length = _axes.length;
		for(;i < length; i++){
			this.drawAxis(_axes[i]);
		}
	},
	drawScale : function () {
		var _typeMapping = {
			"time" : d3.time.scale,
			"linear" : d3.scale.linear
		}
		
		this._x_scale = _typeMapping[__defaults.xType]()
			.range([0,this._graphSize.w])
			.domain([0,Date.now()]);

		this._y_scale = _typeMapping[__defaults.yType]()
			.range([this._graphSize.h,0])
			.domain([0,100]);
	},
	drawAxis : function (config) {
		var orient = config.orient;
		var _axle = (orient == "left"|| orient == "right") ? "y" : "x";
		var _axis = this[config.orient + "Axis"] = d3.svg.axis()
			.scale(this["_" + _axle + "_scale"])
			.orient(config.orient)
			.ticks(3);
		this["_" + _axle + "_axis"].push(_axis);
	},
	renderCoordinate : function () {
		this.renderAxis();
	},
	renderAxis : function () {
		var svg = this.svg;
		svg.append("g")
		    .attr("class", "x axis")
		    .attr("transform", "translate("+ __defaults.margin[3] +"," + this._graphSize.h + ")")
		    .call(this._x_axis[0]);

		var g = svg.append("g")
		    .attr("class", "y axis")
		    .attr("transform", "translate("+ __defaults.margin[3] +",5)")
		    .call(this._y_axis[0]);
	}
}


chart.extend = function (protoProps) {
	// body...
}

window.chartBase = chart;

})(this);