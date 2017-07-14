import Ember from 'ember';

export default Ember.Controller.extend({
  newName: '',
  disabled: Ember.computed.empty('newName'),
  actions: {
  	selectCollection(value, coll) {
      // value = { name: 'fred' height: 56 }
      console.log(coll);
      console.log(value);

      let route = this,
          controller = this.get('controller');

      return this.store.findRecord('collection', coll).then(function(tyrion) {
		// ...after the record has loaded
  		console.log(tyrion);
  		tyrion.set('products', value);
  		route.transitionToRoute('products.product.collections', value, coll);
  	});
    }
}});