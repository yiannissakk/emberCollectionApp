import Ember from 'ember';

export default Ember.Controller.extend({
  newTitle: '',
  collectionToDelete: null,

  collectionAdditionStarted: false,
  canAddToCollection: Ember.computed('collectionAdditionStarted', 'model.collections.length', function() {
    return this.get('collectionAdditionStarted') || this.get('model.collections.length');
  }),

  disabled: Ember.computed.empty('newTitle'),

  actions: {
    enableCollectionAddition() {
      this.set('collectionAdditionStarted', true);
    },

    deleteCollection(collection) {
      return collection.destroyRecord()
        .then(() => {
          this.set('collectionToDelete', null);
        });
    },
    selectCollection(value, event) {
      // value = { name: 'fred' height: 56 }
      this.set('currentValue', value);
    }
  }

});