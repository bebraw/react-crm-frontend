'use strict';
var React = require('react');
var Button = require('react-pure-button');

var Form = require('lib/Form');
var Modal = require('./Modal');
var getVisible = require('./get_visible');


module.exports = React.createClass({
    displayName: 'Create',

    propTypes: {
        api: React.PropTypes.object,
        actions: React.PropTypes.object,
        schema: React.PropTypes.object,
        children: React.PropTypes.any,
    },

    getInitialState: function() {
        return {
            modal: {
                title: null,
                content: null,
            },
        };
    },

    render() {
        var modal = this.state.modal || {};

        return (
            <div>
                <Button onClick={this.createNew}>{this.props.children}</Button>
                <Modal ref='modal' title={modal.title}>{modal.content}</Modal>
            </div>
        );
    },

    createNew: function() {
        var that = this;
        var title = this.props.children;
        var schema = this.props.schema;
        var api = this.props.api;

        getVisible(api, schema.properties, (err, d) => {
            if(err) {
                return console.error(err);
            }

            schema.properties = d;

            this.setState({
                modal: {
                    title: title,
                    content: <Form
                        schema={schema}
                        values={{}}
                        onSubmit={onSubmit}
                    />
                }
            });

            this.refs.modal.show();
        });

        function onSubmit(data, value, errors) {
            if(value === 'Cancel') {
                return that.refs.modal.hide();
            }

            if(!Object.keys(errors).length) {
                that.refs.modal.hide();

                delete data.id;

                that.props.actions.create(data);
            }
            else {
                console.info('errors', errors);
            }
        }
    },
});
