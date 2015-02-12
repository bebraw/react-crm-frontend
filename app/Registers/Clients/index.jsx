'use strict';
var React = require('react');
var Reflux = require('reflux');


module.exports = function(api) {
    var clientActions = require('./actions')(api);
    var clientStore = require('./store')(clientActions);

    return React.createClass({
        mixins: [Reflux.connect(clientStore, 'clients')],

        getInitialState: function() {
            clientActions.load();

            return {};
        },

        render: function() {
            var clients = this.state.clients || [];

            return <div>
                <h2>Clients</h2>

                <p>This should show clients</p>
            </div>;
        }
    });
};
