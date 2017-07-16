import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('products', function() {});
  this.route('view-collections', function() {
    this.route('view-collection', { path: ':coll_id' }, function() {});
  });
});

export default Router;
