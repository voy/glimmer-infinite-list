import Ember from 'ember';

export default Ember.Component.extend({
    classNames: ['infinite-list'],

    // public api
    items: [],

    startItem: 0,
    bufferSize: 20,

    visibleItems: function() {
        var start = this.get('realStart');
        var end   = start + this.get('showItems') + 2 * this.get('bufferSize');
        return this.get('items').slice(start, end);
    }.property('realStart', 'items.[]', 'bufferSize'),

    realStart: function() {
        return Math.max(0, this.get('startItem') - this.get('bufferSize'));
    }.property('startItem', 'showItems'),

    showItems: 20,
    itemHeight: 20,

    visibleHeight: function() {
        return this.get('showItems') * this.get('itemHeight');
    }.property('showItems', 'itemHeight'),

    topPadding: function() {
        return this.get('realStart') * this.get('itemHeight');
    }.property('realStart', 'itemHeight'),

    paddingStyle: function() {
        return `height: ${this.get('topPadding')}px`.htmlSafe();
    }.property('topPadding'),

    onScroll() {
        var scrollTop = this.$().scrollTop();
        var startItem = Math.floor(scrollTop / this.get('showItems'));
        this.set('startItem', startItem);
    },

    contentHeight: function() {
        return this.get('items.length') * this.get('itemHeight');
    }.property('items.length', 'itemHeight'),

    containerStyle: function() {
        return `height: ${this.get('contentHeight')}px`.htmlSafe();
    }.property('contentHeight'),

    bindScroll: function() {
        this.$().on('scroll', Em.run.bind(this, 'onScroll'));
    }.on('didInsertElement')
});
