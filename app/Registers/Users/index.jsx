'use strict';
var React = require('react');
var Reflux = require('reflux');
var Table = require('reactabular').Table;
var titleCase = require('title-case');


module.exports = function(api) {
    var userActions = require('./actions')(api);
    var userStore = require('./store')(userActions);

    // XXX: maybe it would be nicer to dig this from schema.definitions
    // -> pass schema as a dependency? alternatively api (swagger2client) could contain it
    var properties = api.users.get.responses['200'].schema.items.properties;
    var columns = Object.keys(properties).map(function(name) {
        return {
            property: name,
            header: titleCase(name),
        };
    });

    return React.createClass({
        mixins: [Reflux.connect(userStore, 'users')],

        getInitialState: function() {
            userActions.load();

            return {};
        },

        render: function() {
            var data = this.state.users || [];

            return <div>
                <h2>Users</h2>

                <Table
                    className='pure-table pure-table-striped'
                    columns={columns}
                    data={data}></Table>
            </div>;
        }
    });
};
