import Ember from 'ember';

export default Ember.View.extend({
    classNames: ['infinite-list'],

    showItems: 20,
    itemHeight: 20,

    visibleHeight: function() {
        return this.get('showItems') * this.get('itemHeight');
    }.property('showItems', 'itemHeight'),

    topPadding: function() {
        return this.get('controller.startItem') * this.get('itemHeight');
    }.property('controller.startItem', 'itemHeight'),

    onScroll() {
        var scrollTop = this.$().scrollTop();
        var startItem = Math.floor(scrollTop / this.get('showItems'));
        this.set('controller.startItem', startItem);
    },

    contentHeight: function() {
        return this.get('controller.model.length') * this.get('itemHeight');
    }.property('model.length', 'itemHeight'),

    bindScroll: function() {
        this.$().on('scroll', () => this.onScroll());
    }.on('didInsertElement')
});
