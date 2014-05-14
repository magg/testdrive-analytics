define(['app'], function(App) {


// Store
 App.ApplicationAdapter = DS.RESTAdapter.extend();	



// Serializer
App.ApplicationSerializer = DS.RESTSerializer.extend({
  primaryKey: '_id',
});


App.RawTransform = DS.Transform.extend({
  deserialize: function(serialized) {
      return Ember.isNone(serialized) ? {} : serialized;
  },
  serialize: function(deserialized) {
      return Ember.isNone(deserialized) ? {} : deserialized;
  }
});


// Models
  App.Product = DS.Model.extend({
    name: DS.attr('string'),
    description: DS.attr('string'),
    category: DS.attr('string'),

    price: DS.attr('number'),
    rating: DS.attr('number'),
    reviews: DS.attr('number')
  });
  
  
  App.ProductDetail = App.Product.extend({
      manufacturer: DS.attr('raw'),
      sales: DS.attr('raw'),
	  
	  
      color: DS.attr('string'),
      releaseDate: DS.attr('date'),
      model: DS.attr('string')
	  

  });
  
  
  
});