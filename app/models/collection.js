//model definition for collections

import DS from 'ember-data';

export default DS.Model.extend({
	  name: DS.attr('string'),
	  products: DS.hasMany({ async: true}),
	  rev: DS.attr('string')
});