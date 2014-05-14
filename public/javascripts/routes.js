define(['app'], function(App) {


// Routes
  App.Router.map(function() {
	this.resource('products', function() {
		this.resource('product', { path: '/:product_id' } )
	});
	this.route('search');    
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
  
});