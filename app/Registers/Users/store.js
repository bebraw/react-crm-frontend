'use strict';
var Reflux = require('reflux');


module.exports = function(actions) {
    return Reflux.createStore({
        init: function() {
            this.data = [];

            this.listenTo(actions.load.completed, this.loadCompleted);
            this.listenTo(actions.load.failed, this.loadFailed);

            this.listenTo(actions.create.completed, this.createCompleted);
            this.listenTo(actions.create.failed, this.createFailed);
        },

        loadCompleted: function(data) {
            this.data = data;

            this.trigger(data);
        },
        loadFailed: function(err) {
            console.error(err);
        },

        createCompleted: function(data) {
            this.data.push(data);

            this.trigger(this.data);
        },
        createFailed: function(err) {
            console.error(err);
        },
    });
};
