'use strict';
var React = require('react');
var Reflux = require('reflux');
var Table = require('reactabular').Table;


module.exports = function(api) {
    var clientActions = require('./actions')(api);
    var clientStore = require('./store')(clientActions);

    // TODO: get client schema and convert to column definition
    return React.createClass({
        mixins: [Reflux.connect(clientStore, 'clients')],

        getInitialState: function() {
            clientActions.load();

            return {};
        },

        render: function() {
            var clients = this.state.clients || [];

            var data = [
                {
                    name: 'React.js',
                    type: 'library',
                    description: 'Awesome library for handling view.',
                },
                {
                    name: 'Angular.js',
                    type: 'framework',
                    description: 'Swiss-knife of frameworks. Kitchen sink not included.',
                },
                {
                    name: 'Aurelia',
                    type: 'framework',
                    description: 'Framework for the next generation',
                },
            ];

            var columns = [
                {
                    property: 'name',
                    header: 'Name',
                },
                {
                    property: 'type',
                    header: 'Type',
                },
                {
                    property: 'description',
                    header: 'Description',
                },
            ];

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
