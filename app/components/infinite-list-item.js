import Ember from 'ember';

export default Ember.Component.extend({
    itemStyle: Em.computed('parentView.itemHeight', function() {
      return `height: ${this.get('parentView.itemHeight')}px`.htmlSafe();
    })
});
