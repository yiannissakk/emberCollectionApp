// This controller is responsible for carrying an action that gets triggered
//when a an option is selected from the "add to collection" dropdown
import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
  	selectCollection(value, coll) {

      let route = this,
          controller = this.get('controller');

      let collection = this.get('store').peekRecord('collection', coll);

      let product = this.get('store').peekRecord('product', value);

      collection.get('products').pushObject(product);
      collection.save();

    }
}});