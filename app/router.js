import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('posts', function() {
    this.route('new');
  });
  this.route('post', { path: '/posts/:post_id' }, function() {});
});

export default Router;
