define(['app'], function (App) {
    App.ProductSearchView = Ember.View.extend({
	
	
	didInsertElement: function () {

		var view = this;

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