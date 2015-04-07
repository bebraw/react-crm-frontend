'use strict';
var React = require('react');

var Create = require('lib/Create.jsx');
var Table = require('lib/Table.jsx');
var generateTitles = require('lib/generate_titles');


module.exports = function(api) {
    var userActions = require('./actions/UserActions')(api);
    var userStore = require('./stores/UserStore')(userActions);

    var schema = api.users.get.responses['200'].schema;
    schema.type = 'object';
    schema.properties = generateTitles(schema.properties);

    return React.createClass({
        displayName: 'Users',

        render: function() {
            var i18n = {
                user: {
                    createNew: 'Create a new user'
                },
            };

            return (
                <div className='pure-g'>
                    <div className='pure-u-1'>
                        <h2>Users</h2>
                    </div>

                    <div className='pure-u-1 controls'>
                        <Create schema={schema} actions={userActions}>
                            {i18n.user.createNew}
                        </Create>
                    </div>

                    <div className='pure-u-1'>
                        <Table
                            store={userStore} actions={userActions}
                            schema={schema} />
                    </div>
                </div>
            );
        },
    });
};
