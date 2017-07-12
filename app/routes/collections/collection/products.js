import Ember from 'ember';

export default Ember.Route.extend({
  resetController(controller) {
    controller.setProperties({
      newTitle: '',
      productCreationStarted: false
    });
  },
  title() {
    let collectionName = this.modelFor('collections.collection').get('name');
    return `${collectionName} products - Rock and Roll`;
  },
});
