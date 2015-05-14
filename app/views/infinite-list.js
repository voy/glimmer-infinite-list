import Ember from 'ember';

export default Ember.View.extend({
    classNames: ['infinite-list'],

    showItems: 20,
    itemHeight: 20,

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
        return this.get('controller.model.length') * this.get('itemHeight');
    }.property('model.length', 'itemHeight'),

    containerStyle: Em.computed('contentHeight', function () {
        return `height: ${this.get('contentHeight')}px`.htmlSafe();
    }),

    bindScroll: function() {
        this.$().on('scroll', Em.run.bind(this, 'onScroll'));
    }.on('didInsertElement')
});
