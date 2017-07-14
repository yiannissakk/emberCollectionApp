import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('products', function() {
    this.route('product', { path: ':product_id' }, function() {
      this.route('collections',{ path: ':collection_id' });
    });
  });
  this.route('view-collections');
});

export default Router;
