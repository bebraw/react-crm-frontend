'use strict';
var React = require('react');
var SkyLight = require('jsx!react-skylight/src/skylight.jsx');
var Button = require('react-pure-button');

var Form = require('lib/Form');


module.exports = React.createClass({
    displayName: 'Create',

    propTypes: {
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
                <SkyLight ref='modal' title={modal.title}>{modal.content}</SkyLight>
            </div>
        );
    },

    createNew: function() {
        var that = this;

        this.setState({
            modal: {
                title: that.props.children,
                content: <Form
                    schema={that.props.schema}
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

                that.props.actions.create(data);
            }
        }
    },
});
