'use strict';
var Reflux = require('reflux');


module.exports = function(api) {
    var Actions = Reflux.createActions({
        load: {
            children: ['completed', 'failed']
        }
    });

    Actions.load.listen(function() {
        api.clients.get().then(this.completed).catch(this.failed);
    });
};
