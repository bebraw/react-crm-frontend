'use strict';
var React = require('react');

var Form = require('plexus-form');
var validate = require('plexus-validate');

var FieldWrapper = require('./FieldWrapper.jsx');
var SectionWrapper = require('./SectionWrapper.jsx');


module.exports = React.createClass({
    displayName: 'Table',

    propTypes: {
        schema: React.PropTypes.object,
        values: React.PropTypes.object,
        onSubmit: React.PropTypes.func
    },

    render() {
        return (
            <Form
                className='pure-form pure-form-aligned'
                fieldWrapper={FieldWrapper}
                sectionWrapper={SectionWrapper}
                buttons={this.buttons}
                schema={this.props.schema}
                validate={validate}
                values={this.props.values}
                onSubmit={this.props.onSubmit}
            />
        );
    },

    buttons(submit) {
        return (
            <span>
                <input type='submit'
                    className='pure-button pure-button-primary ok-button'
                    key='ok' value='OK'
                    onClick={submit} />
                <input type='submit'
                    className='pure-button cancel-button'
                    key='cancel' value='Cancel'
                    onClick={submit} />
            </span>
        );
    }
});
