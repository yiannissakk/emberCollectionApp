//model definition for products

import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  _id: DS.attr('string'),
  price: DS.attr('string'),
  collections: DS.hasMany({ async: true}),
  rev: DS.attr('string')
});
