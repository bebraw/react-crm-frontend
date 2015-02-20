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
            this.listenTo(actions.load.failed, this.loadFailed);

            this.listenTo(actions.create.completed, this.createCompleted);
            this.listenTo(actions.create.failed, this.createFailed);

            this.listenTo(actions.update.completed, this.updateCompleted);
            this.listenTo(actions.update.failed, this.updateFailed);
        },

        loadCompleted: function(o) {
            this.data = o.data;
            this.count = o.count;

            this.trigger(this.data);
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
