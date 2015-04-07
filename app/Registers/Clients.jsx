'use strict';
var React = require('react');
var Reflux = require('reflux');

var Table = require('lib/Table.jsx');
var getSchema = require('lib/get_schema');


module.exports = function(api) {
    var clientActions = require('./actions/ClientActions')(api);
    var clientStore = require('./stores/ClientStore')(clientActions);
    var schema = getSchema(api.clients);

    // TODO: get client schema and convert to column definition
    return React.createClass({
        displayName: 'Clients',

        mixins: [Reflux.connect(clientStore, 'clients')],

        getInitialState() {
            clientActions.load();

            return {};
        },

        render() {
            return (
                <div>
                    <h2>Clients</h2>

                    <Table
                        store={clientStore} actions={clientActions}
                        schema={schema} />
                </div>
            );
        }
    });
};
