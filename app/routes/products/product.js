import Ember from 'ember';

export default Ember.Route.extend({
  model(params, prms) {
  	console.log(params.product_id);
    return params.product_id;
  },

  titleToken: function(model) {
  	console.log(model);
    return model.get('name');
  }

});

