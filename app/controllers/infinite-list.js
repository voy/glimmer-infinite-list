import Ember from 'ember';

export default Ember.Controller.extend({
    startItem: 0,

    visibleItems: function() {
        return this.get('model').slice(this.get('startItem'), this.get('startItem') + 40);
    }.property('startItem', 'model.[]')
});
