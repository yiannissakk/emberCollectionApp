//This route's model hook receives a collection object's id and
//returns all the products that are part of it

import Ember from 'ember';

export default Ember.Route.extend({
  model(coll) {
  	let collection = this.get('store').peekRecord('collection', coll.coll_id);
    return collection.get('products').toArray();
}
});
