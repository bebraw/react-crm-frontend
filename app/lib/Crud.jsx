'use strict';
var React = require('react');
var titleCase = require('title-case');

var Create = require('./Create.jsx');
var Table = require('./Table.jsx');
var getSchema = require('./get_schema');


module.exports = function(api) {
    return function(resourceName, name) {
        name = name || resourceName;

        var multipleName = name + 's';
        var upperMultipleName = titleCase(multipleName);
        var actions = require('./Actions')(api, resourceName + 's');
        var store = require('./Store')(actions);
        var schema = getSchema(api[resourceName + 's']);
        var createNew = 'Create a new ' + name;

        return React.createClass({
            displayName: upperMultipleName,

            render: function() {
                return (
                    <div className='pure-g'>
                        <div className='pure-u-1'>
                            <h2>{upperMultipleName}</h2>
                        </div>

                        <div className='pure-u-1 controls'>
                            <Create schema={schema} actions={actions}>
                                {createNew}
                            </Create>
                        </div>

                        <div className='pure-u-1'>
                            <Table
                                store={store} actions={actions}
                                schema={schema} />
                        </div>
                    </div>
                );
            },
        });
    };
};
