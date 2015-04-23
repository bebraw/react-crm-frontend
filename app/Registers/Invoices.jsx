'use strict';
var React = require('react');

var createCrud = require('../lib/Crud');


module.exports = function(api) {
    var crud = createCrud(api);
    var PendingInvoices = crud('pendinginvoice');
    var ApprovedInvoices = crud('approvedinvoice');

    return React.createClass({
        displayName: 'Invoices',

        render() {
            return (
                <div>
                    <PendingInvoices />
                    <ApprovedInvoices />
                </div>
            );
        }
    });
};

