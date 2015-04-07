'use strict';
var Reflux = require('reflux');


module.exports = function(api) {
    var Actions = Reflux.createActions({
        load: {
            children: ['completed', 'failed']
        }
    });

    Actions.load.listen(function() {
        var that = this;

        api.clients.get().then(function(res) {
            that.completed(res.data);
        }).catch(this.failed);
    });

    return Actions;
};
