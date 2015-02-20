'use strict';
var React = require('react');
var Reflux = require('reflux');
var titleCase = require('title-case');
var Form = require('plexus-form');
var validate = require('plexus-validate');
var SkyLight = require('jsx!react-skylight/src/skylight.jsx');

var Table = require('../Table.jsx');
var generateTitles = require('../generate_titles');


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
        mixins: [Reflux.connect(userStore, 'users')],

        getInitialState: function() {
            userActions.load();

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

            var data = this.state.users || [];
            var modal = this.state.modal || {};

            return <div>
                <h2>Users</h2>

                <div className='controls'>
                <button onClick={this.createNewUser}>{i18n.createNewUser}</button>
                </div>

                <Table
                    schema={schema} columns={columns} data={data}
                    onSort={this.setState.bind(this)}
                    onEdit={userActions.update}>
                </Table>

                <SkyLight ref='modal' title={modal.title}>{modal.content}</SkyLight>
            </div>;
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
                        buttons={['OK', 'Cancel']}
                        schema={schema}
                        validate={validate}
                        onSubmit={onSubmit}
                    ></Form>
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
