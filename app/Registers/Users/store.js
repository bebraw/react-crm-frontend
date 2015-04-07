'use strict';
var Reflux = require('reflux');
var findIndex = require('lodash.findindex');


module.exports = function(actions) {
    return Reflux.createStore({
        init: function() {
            this.data = [];
            this.count = 0;

            this.listenTo(actions.load.completed, this.loadCompleted);
            this.listenTo(actions.load.failed, this.failed);

            this.listenTo(actions.create.completed, this.createCompleted);
            this.listenTo(actions.create.failed, this.failed);

            this.listenTo(actions.update.completed, this.updateCompleted);
            this.listenTo(actions.update.failed, this.failed);

            this.listenTo(actions.sort.completed, this.loadCompleted);
            this.listenTo(actions.sort.failed, this.failed);
        },

        loadCompleted: function(o) {
            this.data = o.data;
            this.count = o.count;

            this.refresh();
        },

        createCompleted: function(data) {
            // XXX: this might not be ok always (if paginated)
            this.data.push(data);
            this.count++;

            this.refresh();
        },

        updateCompleted: function(data) {
            var i = findIndex(this.data, {id: data.id});

            this.data[i] = data;

            this.refresh();
        },

        failed: function(err) {
            console.error(err);
        },

        refresh: function() {
            this.trigger({
                data: this.data,
                count: this.count,
            });
        }
    });
};
