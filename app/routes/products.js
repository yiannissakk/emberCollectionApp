//This route sets up a controller that allows for the
//model hook to return all the records of two models

import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return Ember.RSVP.hash({
      prods: this.store.findAll('product'),
      colls: this.store.findAll('collection')
    });
  },
  setupController(controller, model) {
    this._super(...arguments);
    Ember.set(controller, 'prods', model.prods);
    Ember.set(controller, 'colls', model.colls);
  }
});
