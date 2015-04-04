'use strict';
var React = require('react');
var titleCase = require('title-case');
var SkyLight = require('jsx!react-skylight/src/skylight.jsx');
var Button = require('react-pure-button');

var Form = require('lib/Form.jsx');
var Table = require('lib/Table.jsx');
var generateTitles = require('lib/generate_titles');


module.exports = function(api) {
    var userActions = require('./actions')(api);
    var userStore = require('./store')(userActions);

    var schema = api.users.get.responses['200'].schema;
    schema.type = 'object';
    schema.properties = generateTitles(schema.properties);

    var columns = Object.keys(schema.properties).map(function(name) {
        return {
            property: name,
            header: titleCase(name),
        };
    });

    return React.createClass({
        displayName: 'Users',

        getInitialState: function() {
            return {
                modal: {
                    title: null,
                    content: null,
                },
            };
        },

        render: function() {
            var i18n = {
                createNewUser: 'Create a new user',
            };

            //var data = this.state.users || [];
            var modal = this.state.modal || {};

            // TODO: eliminate onSort
            return (
                <div>
                    <div className='pure-g'>
                        <div className='pure-u-1'>
                            <h2>Users</h2>
                        </div>

                        <div className='pure-u-1 controls'>
                            <Button onClick={this.createNewUser}>{i18n.createNewUser}</Button>
                        </div>

                        <div className='pure-u-1'>
                            <Table
                                store={userStore} actions={userActions}
                                schema={schema} columns={columns}
                                onSort={this.setState.bind(this)} />
                        </div>
                    </div>
                    <SkyLight ref='modal' title={modal.title}>{modal.content}</SkyLight>
                </div>
            );
        },

        createNewUser: function() {
            var that = this;
            var i18n = {
                createNewUser: 'Create a new user',
            };

            this.setState({
                modal: {
                    title: i18n.createNewUser,
                    content: <Form
                        schema={schema}
                        onSubmit={onSubmit}
                    />
                }
            });

            this.refs.modal.show();

            function onSubmit(data, value, errors) {
                if(value === 'Cancel') {
                    return that.refs.modal.hide();
                }

                if(!Object.keys(errors).length) {
                    that.refs.modal.hide();

                    delete data.id;

                    userActions.create(data);
                }
            }
        },
    });
};
