'use strict';
var React = require('react');
var SkyLight = require('babel!react-skylight/src/skylight.jsx');


module.exports = React.createClass({
    displayName: 'Modal',

    propTypes: {
        children: React.PropTypes.any,
    },

    render: function() {
        var dialogStyles = {
            overflow: 'auto'
        };

        return (
            <SkyLight ref='modal' {...this.props} dialogStyles={dialogStyles}>
                {this.props.children}
            </SkyLight>
        );
    },

    show: function() {
        this.refs.modal.show();
    },

    hide: function() {
        this.refs.modal.hide();
    },
});
