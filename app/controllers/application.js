import Ember from 'ember';

export default Ember.Controller.extend({
    searchString: '',

    filteredItems: function() {
        return this.get('model.items').filter((item) => {
            return item.get('title').indexOf(this.searchString) !== -1;
        });
    }.property('searchString', 'model.items.[]'),

    actions: {
        search(searchString) {
            this.set('searchString', searchString);
        }
    }
});
