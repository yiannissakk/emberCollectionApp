import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return this.store.findRecord('collection', params.collection_id);
  },

  titleToken: function(model) {
    return model.get('name');
  }

});
