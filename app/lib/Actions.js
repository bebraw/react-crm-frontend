'use strict';
var Reflux = require('reflux');


module.exports = function(api, resource) {
    var asyncChildren = {
        children: ['completed', 'failed'],
    };
    var Actions = Reflux.createActions({
        load: asyncChildren,
        create: asyncChildren,
        update: asyncChildren,
        sort: asyncChildren,
    });

    Actions.load.listen(function(o) {
        api[resource].get(o).then((res) => {
            this.completed({
                count: res.headers['total-count'],
                data: res.data
            });
        }).catch(this.failed);
    });

    Actions.create.listen(function(data) {
        api[resource].post(data).then((res) => {
            this.completed(res.data);
        }).catch(this.failed);
    });

    Actions.update.listen(function(data) {
        api[resource].put(data).then((res) => {
            this.completed(res.data);
        }).catch(this.failed);
    });

    Actions.sort.listen(function(o) {
        api[resource].get(o).then((res) => {
            this.completed({
                count: res.headers['total-count'],
                data: res.data
            });
        }).catch(this.failed);
    });

    return Actions;
};
