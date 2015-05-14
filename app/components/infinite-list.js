import Ember from 'ember';

export default Ember.Component.extend({
    classNames: ['infinite-list'],

    // public api
    items: [],

    startItem: 0,

    visibleItems: function() {
        return this.get('items').slice(this.get('startItem'), this.get('startItem') + 40);
    }.property('startItem', 'items.[]'),

    showItems: 20,
    itemHeight: 20,

    visibleHeight: function() {
        return this.get('showItems') * this.get('itemHeight');
    }.property('showItems', 'itemHeight'),

    topPadding: function() {
        return this.get('controller.startItem') * this.get('itemHeight');
    }.property('controller.startItem', 'itemHeight'),

    paddingStyle: Em.computed('topPadding', function () {
        return `height: ${this.get('topPadding')}px`.htmlSafe();
    }),

    onScroll() {
        var scrollTop = this.$().scrollTop();
        var startItem = Math.floor(scrollTop / this.get('showItems'));
        this.set('controller.startItem', startItem);
    },

    contentHeight: function() {
        return this.get('items.length') * this.get('itemHeight');
    }.property('items.length', 'itemHeight'),

    containerStyle: Em.computed('contentHeight', function () {
        return `height: ${this.get('contentHeight')}px`.htmlSafe();
    }),

    bindScroll: function() {
        this.$().on('scroll', Em.run.bind(this, 'onScroll'));
    }.on('didInsertElement')
});
