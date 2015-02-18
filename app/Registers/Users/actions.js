'use strict';
var Reflux = require('reflux');


module.exports = function(api) {
    var Actions = Reflux.createActions({
        load: {
            children: ['completed', 'failed'],
        },
        create: {
            children: ['completed', 'failed'],
        },
    });

    Actions.load.listen(function() {
        var that = this;

        api.users.get().then(function(res) {
            that.completed(res.data);
        }).catch(this.failed);
    });

    Actions.create.listen(function(data) {
        var that = this;

        api.users.post(data).then(function(res) {
            data.id = res.data.id;

            that.completed(data);
        }).catch(this.failed);
    });

    return Actions;
};
