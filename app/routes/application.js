//applictaion route is executed at page load
export default Ember.Route.extend({
  model() {

    //Commented code below is a script to delete all records of a model

    //self.store.findAll('product').then(
      //function(items) {
        //items.toArray().forEach(function(item){
          //item.deleteRecord();
          //item.save();
      //});
    //});

    //read data from json file in public folder, then push in store as product models
    var self = this;
  	var prods = Ember.$.ajax({url: ("/products.json"), type: 'GET', dataType: 'json', success: function(e) {
  		var a = 1;
  		e.products.forEach(function(f) {
  			self.store.push({
  				data: [{
				      id: a,
				      type: 'product',
				      attributes: {
				        name: f.name,
				        _id: f._id,
                price: f.price
				      }
				    }
				  ]
				});
  			a = a + 1;
  		});
  	}})
  }
});