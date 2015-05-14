import Ember from 'ember';

export default Ember.View.extend({
    itemStyle: Em.computed('parentView.itemHeight', function() {
      return `height: ${this.get('parentView.itemHeight')}px`.htmlSafe();
    })
});
