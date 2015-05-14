import Ember from 'ember';

export default Ember.Component.extend({
    item: null,
    height: 20,

    itemStyle: function() {
      return `height: ${this.get('height')}px`.htmlSafe();
    }.property('height'),

    typeClass: function() {
        return `type-${this.get('item.type')}`.htmlSafe();
    }.property('item.type'),

    click() {
        console.log('hello, my item is', this.get('item'));
    },
});
