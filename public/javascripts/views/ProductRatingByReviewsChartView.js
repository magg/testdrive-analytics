
define(['app', './BaseChartView'], function (App, BaseChartView) {

  App.ProductRatingByReviewsChartView = BaseChartView.extend({

    prepareData: function (content) {
		
        var products = this.mapProperties(content, 'rating', 'reviews');
		
		
        var groups = d3.nest()
          .key(function (d) { return d.rating; })
          .entries(products);

		
		  return groups; 

    },

    prepareChart: function () {
		var chart = nv.models.multiBarChart()
        .x(function(d) { return d.reviews })
        .y(function(d) { return d.rating })
        	  .margin({bottom: 40, left: 80 })
		      .showControls(false)   //Allow user to switch between 'Grouped' and 'Stacked' mode.
		    ;

		    chart.yAxis
		        .tickFormat(d3.format('0d')).axisLabel('Rating');

			    chart.xAxis
			        .tickFormat(d3.format('0d')).axisLabel('Reviews');

		    return chart;
 
    }

  });
});