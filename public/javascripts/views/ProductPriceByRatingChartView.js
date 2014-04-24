define(['app', './BaseChartView'], function (App, BaseChartView) {

  App.ProductPriceByRatingChartView = BaseChartView.extend({

    prepareData: function (content) {
		
		
        var top100 = this.mapProperties(content, 'rating', 'price')
          .sort(function (a,b) { return b.price - a.price; })
          .filter(function(item,index){
			  return index < 100;
			
          });

		
		  return [
        { key: '', values: top100 }
      ];

    },

    prepareChart: function () {
		var chart = nv.models.scatterChart()
        .x(function(d) { return d.price })
        .y(function(d) { return d.rating })
		                .showDistX(false)    //showDist, when true, will display those little distribution lines on the axis.
		                .showDistY(false)
		                .transitionDuration(350)
		                .color(d3.scale.category10().range())
						.showLegend(false)
				        .tooltips(false)             //Show tooltips on hover.
						.useVoronoi(false);

		  //Configure how the tooltip looks.
		  chart.tooltipContent(function(key) {
		      return '<h3>' + key + '</h3>';
		  });

		  //Axis settings
		  chart.xAxis.tickFormat(d3.format('.02r')).axisLabel('Price');
		  chart.yAxis.tickFormat(d3.format('0d')).axisLabel('Rating');



		  return chart;
 
    }

  });
});

