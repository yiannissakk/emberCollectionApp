import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.store.findAll('collection');
  },

  titleToken: 'Collections',

  actions: {
    createCollection() {
      let route = this,
          controller = this.get('controller');

      let collection = this.store.createRecord('collection', {
        name: controller.get('newName')
      });
      return collection.save().then(function() {
        controller.set('newName', '');
        route.transitionTo('collections.collection.products', collection);
      });
    }
  }
});
