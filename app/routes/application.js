export default Ember.Route.extend({
  model() {
  	var self = this;
  	var prods = Ember.$.ajax({url: ("/products.json"), type: 'GET', dataType: 'json', success: function(e) {
  		var a = 1;
  		e.products.forEach(function(f) {
  			//console.log(f.name);
  			//console.log(f._id);
  			console.log($.fn.jquery);
  			self.store.push({
  				data: [{
				      id: a,
				      type: 'product',
				      attributes: {
				        name: f.name,
				        _id: f._id
				      }
				    }
				  ]
				});
  			a = a + 1;
  		});
  	}})
  }
});