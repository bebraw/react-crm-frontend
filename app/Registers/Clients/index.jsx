'use strict';
var React = require('react');


module.exports = function(api) {
    var actions = require('./actions')(api);

    return React.createClass({
        render: function() {
            return <div>
                <h2>Clients</h2>

                <p>This should show clients</p>
            </div>;
        }
    });
};
