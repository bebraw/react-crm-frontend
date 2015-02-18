'use strict';
var Reflux = require('reflux');


module.exports = function(actions) {
    return Reflux.createStore({
        init: function() {
            this.data = [];

            this.listenTo(actions.load.completed, this.loadCompleted);
            this.listenTo(actions.load.failed, this.loadFailed);
        },

        loadCompleted: function(data) {
            this.data = data;

            this.trigger(data);
        },

        loadFailed: function(err) {
            console.error(err);
        },
    });
};
