define(['app'], function (App) {
    App.ProductSearchView = Ember.View.extend({
	
	
	didInsertElement: function () {

		this.$('.search-input').autocomplete({
			source: '/search',
			
			select: function(event, ui){
				
				var product = ui.item;
				view.get('controller').loadProduct(product.id);
				
				
			}
			
		});
    },

 	});


});