'use strict';
var Reflux = require('reflux');


module.exports = function(api) {
    var asyncChildren = {
        children: ['completed', 'failed'],
    };
    var Actions = Reflux.createActions({
        load: asyncChildren,
        create: asyncChildren,
        update: asyncChildren,
    });

    Actions.load.listen(function(o) {
        var that = this;

        api.users.get(o).then(function(res) {
            that.completed({
                count: res.headers['total-count'],
                data: res.data
            });
        }).catch(this.failed);
    });

    Actions.create.listen(function(data) {
        var that = this;

        api.users.post(data).then(function(res) {
            data.id = res.data.id;

            that.completed(data);
        }).catch(this.failed);
    });

    Actions.update.listen(function(data) {
        var that = this;

        api.users.put(data).then(function() {
            that.completed(data);
        }).catch(this.failed);
    });

    return Actions;
};
