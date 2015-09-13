import Ember from 'ember';
import DS from 'ember-data';
import Post from '../../models/post';

export default Ember.Route.extend({
  model: function() {
    return this.store.find('post');
  }
});
