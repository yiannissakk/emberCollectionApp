import Ember from 'ember';

export default Ember.Route.extend({
   model(asd) {
    console.log(asd.collection_id);
    //console.log(model.title);
    return asd.collection_id;
  },
  resetController(controller) {
    controller.setProperties({
      newTitle: '',
      collectionAdditionStarted: false
    });
  },
  actions: {
    selectCollection(value, event) {
      // value = { name: 'fred' height: 56 }
      this.set('currentValue', value);
    }
  }

});