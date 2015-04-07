'use strict';
var React = require('react');
var Reflux = require('reflux');

var generateTitles = require('lib/generate_titles');
var Table = require('lib/Table.jsx');


module.exports = function(api) {
    var clientActions = require('./actions/ClientActions')(api);
    var clientStore = require('./stores/ClientStore')(clientActions);

    var schema = api.clients.get.responses['200'].schema;
    schema.type = 'object';
    schema.properties = generateTitles(schema.properties);

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
