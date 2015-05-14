import Ember from 'ember';

export default Ember.Route.extend({
    model() {
        var list = [];

        for (var i = 1; i <= 25000; i++) {
            list.push(Ember.Object.create({
                key: 'item-%@'.fmt(i),
                title: 'Item %@'.fmt(i),
                type: Math.random() > 0.5 ? 'foo' : 'bar'
            }));
        }

        return Ember.Object.create({
            items: list
        });
    }
});
