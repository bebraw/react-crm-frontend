'use strict';
var Reflux = require('reflux');
var findIndex = require('lodash.findindex');


module.exports = function(actions) {
    return Reflux.createStore({
        init: function() {
            this.data = [];

            this.listenTo(actions.load.completed, this.loadCompleted);
            this.listenTo(actions.load.failed, this.loadFailed);

            this.listenTo(actions.create.completed, this.createCompleted);
            this.listenTo(actions.create.failed, this.createFailed);

            this.listenTo(actions.update.completed, this.updateCompleted);
            this.listenTo(actions.update.failed, this.updateFailed);
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

        updateCompleted: function(data) {
            var i = findIndex(this.data, {id: data.id});

            this.data[i] = data;

            this.trigger(this.data);
        },
        updateFailed: function(err) {
            console.error(err);
        },
    });
};
