//This route's model hook returns all collection model records and 
//carries an action to create a collection
import Ember from 'ember';

export default Ember.Route.extend({
	model() {
    return this.store.findAll('collection');
  },

  titleToken: 'Collections',

  actions: {
    createCollection() {
      let controller = this.get('controller');

      let collection = this.store.createRecord('collection', {
        name: controller.get('newName')
      });

      return collection.save().then(function() {
        controller.set('newName', '');

      });
    }
  }
});
