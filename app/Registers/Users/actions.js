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
        sortBy: asyncChildren,
    });

    Actions.load.listen(function(o) {
        api.users.get(o).then((res) => {
            this.completed({
                count: res.headers['total-count'],
                data: res.data
            });
        }).catch(this.failed);
    });

    Actions.create.listen(function(data) {
        api.users.post(data).then((res) => {
            data.id = res.data.id;

            this.completed(data);
        }).catch(this.failed);
    });

    Actions.update.listen(function(data) {
        api.users.put(data).then(() => this.completed(data)).catch(this.failed);
    });

    Actions.sortBy.listen((data) => {
        console.log('sort by', data);
    });

    return Actions;
};
