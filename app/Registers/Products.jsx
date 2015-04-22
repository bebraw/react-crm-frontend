'use strict';
var React = require('react');

var createCrud = require('../lib/Crud');


module.exports = function(api) {
    var crud = createCrud(api);
    var ProductGroups = crud('productgroup', 'product group');
    var Products = crud('product');

    return React.createClass({
        displayName: 'Products',

        render() {

            return (
                <div>
                    <ProductGroups />
                    <Products />
                </div>
            );
        }
    });
};
