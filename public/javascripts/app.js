define(['ember', 'ember-data', 'nvd3', 'jquery-ui'], function(Ember) {

  var App = window.App = Ember.Application.create({ LOG_TRANSITIONS: true });



	

  // Routes
    App.Router.map(function() {
		this.resource('products', function() {
			this.resource('product', { path: '/:product_id' } )
		});    
	});
	
    App.IndexRoute = Ember.Route.extend({
       redirect: function() {
         this.transitionTo('products');
       }
     });
	 
	 App.ProductsRoute = Ember.Route.extend({
	    model: function() {
	      return this.store.find('product');
	    }
	  });
	  
	  App.ProductRoute = Ember.Route.extend({
	  	model: function(params) {
	  		return this.store.find('product', params.product_id);
	  	}
	  });


	  App.ProductsController = Ember.ArrayController.extend();


  return App;
});

