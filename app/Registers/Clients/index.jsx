'use strict';
var React = require('react');
var Reflux = require('reflux');
var Table = require('reactabular').Table;
var titleCase = require('title-case');

var generateTitles = require('../generate_titles');


module.exports = function(api) {
    var clientActions = require('./actions')(api);
    var clientStore = require('./store')(clientActions);

    var schema = api.clients.get.responses['200'].schema;
    schema.type = 'object';
    schema.properties = generateTitles(schema.properties);

    var columns = Object.keys(schema.properties).map(function(name) {
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
