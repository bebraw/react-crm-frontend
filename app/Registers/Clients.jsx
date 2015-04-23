'use strict';
var React = require('react');

var createCrud = require('../lib/Crud');


module.exports = function(api) {
    var crud = createCrud(api);
    var ClientGroups = crud('clientgroup', 'client group');
    var Clients = crud('client');

    return React.createClass({
        displayName: 'Clients',

        render() {
            return (
                <div>
                    <ClientGroups />
                    <Clients columns={['name', 'phone', 'contact', 'department']} />
                </div>
            );
        }
    });
};
