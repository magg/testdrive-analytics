define(['app', './BaseChartView'], function (App, BaseChartView) {

  App.ProductsByCategoryChartView = BaseChartView.extend({

    prepareData: function (content) {
		
        var products = this.mapProperties(content, 'category');
		
		
        var groups = d3.nest()
          .key(function (d) { return d.category; })
          .rollup(function (g) {
            return  g.length;
          }).entries(products);

		
		  return [
		          { key: '', values: groups }
		        ];

    },

    prepareChart: function () {

		var chart = nv.models.multiBarHorizontalChart()
		        .x(function(d) { return d.key })
		        .y(function(d) { return d.values })
		        .margin({top: 30, right: 10, bottom: 20, left: 75})
		        .showValues(true)           //Show bar value next to each bar.
		        .tooltips(false)             //Show tooltips on hover.
		        .showControls(false)
				.showLegend(false);        //Allow user to switch between "Grouped" and "Stacked" mode.
				

		    chart.yAxis
		        .tickFormat(d3.format(',.2f'));

		    return chart;
    }

  });
});

