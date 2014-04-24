define(['app'], function(App) {


// Store
  App.ApplicationAdapter = DS.RESTAdapter.extend();	


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
});