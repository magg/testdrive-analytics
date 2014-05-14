define(['app'], function(App) {



App.ProductsController = Ember.ArrayController.extend();


// search

App.SearchController = Ember.ObjectController.extend({
	
	activeProduct: null,
	
	loadProduct: function(productId){
		this.set('activeProduct', App.Product.find(productId));
		
	}
	
	
});


});