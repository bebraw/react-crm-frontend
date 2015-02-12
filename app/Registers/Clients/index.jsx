'use strict';
var React = require('react');
var Reflux = require('reflux');
var Table = require('reactabular').Table;
var titleCase = require('title-case');


module.exports = function(api) {
    var clientActions = require('./actions')(api);
    var clientStore = require('./store')(clientActions);

    // XXX: maybe it would be nicer to dig this from schema.definitions
    // -> pass schema as a dependency? alternatively api (swagger2client) could contain it
    var properties = api.clients.get.responses['200'].schema.items.properties;
    var columns = Object.keys(properties).map(function(name) {
        return {
            property: name,
            header: titleCase(name),
        };
    });

    // TODO: get client schema and convert to column definition
    return React.createClass({
        mixins: [Reflux.connect(clientStore, 'clients')],

        getInitialState: function() {
            clientActions.load();

            return {};
        },

        render: function() {
            var data = this.state.clients || [];

            return <div>
                <h2>Clients</h2>

                <Table
                    className='pure-table pure-table-striped'
                    columns={columns}
                    data={data}></Table>
            </div>;
        }
    });
};
