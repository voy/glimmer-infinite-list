import Ember from 'ember';

export default Ember.View.extend({
    itemHeight: Ember.computed.oneWay('parentView.itemHeight')
});
