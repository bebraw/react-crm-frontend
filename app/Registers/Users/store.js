'use strict';
var Reflux = require('reflux');
var findIndex = require('lodash.findindex');


module.exports = function(actions) {
    return Reflux.createStore({
        init: function() {
            // data is a partial store due to pagination. it is updated as data is received
            this.data = [];
            this.count = 0; // TODO: deal with this -> transmit to listeners

            this.listenTo(actions.load.completed, this.loadCompleted);
            this.listenTo(actions.load.failed, this.failed);

            this.listenTo(actions.create.completed, this.createCompleted);
            this.listenTo(actions.create.failed, this.failed);

            this.listenTo(actions.update.completed, this.updateCompleted);
            this.listenTo(actions.update.failed, this.failed);
        },

        loadCompleted: function(o) {
            this.data = o.data;
            this.count = o.count;

            this.refresh();
        },

        createCompleted: function(data) {
            // XXX: this might not be ok always (if paginated)
            this.data.push(data);

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
            this.trigger(this.data);
            /*
            this.trigger({
                data: this.data,
                count: this.count,
            });
            */
        }
    });
};
