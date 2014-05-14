require.config({

  baseUrl: 'javascripts',
  paths: {
    'jquery': 'vendor/jquery.min',
    'jquery-ui': 'vendor/jquery-ui-1.10.4.min',
    'd3': 'vendor/d3.v3',
    'nvd3': 'vendor/nv.d3',
    'hbs': 'vendor/handlebars-v1.3.0',
    'ember': 'vendor/ember',
    'ember-data': 'vendor/ember-data.min'
  },

  shim: {
    'ember': {
      deps: ['jquery', 'hbs'],
      exports: 'Ember'
    },
    'ember-data': ['ember'],
    'nvd3': ['d3'],
    'jquery-ui': ['jquery'],    
	'd3': {
      exports: 'd3'
    }
  }

});

// Initial require to load the app
require([
  'app',
  'store',
  'routes',
  'controllers',

  // Views
  'views/ProductsByRatingChartView',
  'views/ProductRatingByReviewsChartView',
  'views/ProductsByCategoryChartView',
  'views/ProductPriceByRatingChartView',
  'views/ProductSearchView'
    
  
]);

