import Ember from 'ember';

export default Ember.View.extend({
    itemHeight: Em.computed.oneWay('parentView.itemHeight')
});
