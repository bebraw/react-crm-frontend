'use strict';
var classNames = require('classnames');
var React = require('react');


module.exports = React.createClass({
    render: function() {
        var {className, ...props} = this.props;

        return (
            <div className={classNames('pure-menu', className)} {...props}>{props.children}</div>
        );
    },
});

module.exports.List = React.createClass({
    render: function() {
        var {className, ...props} = this.props;

        return (
            <ul className={classNames('pure-menu-list', className)} {...props}>{props.children}</ul>
        );
    },
});

module.exports.Heading = React.createClass({
    render: function() {
        var {className, ...props} = this.props;

        return (
            <span className={classNames('pure-menu-heading', className)}  {...props}>{props.children}</span>
        );
    },
});

module.exports.Item = React.createClass({
    render: function() {
        var {className, ...props} = this.props;

        return (
            <li className={classNames('pure-menu-item', className)} {...props}>{props.children}</li>
        );
    },
});

exports.Link = React.createClass({
    render: function() {
        var {className, ...props} = this.props;

        return (
            <a className={classNames('pure-menu-link', className)} {...props}>
                {props.children}
            </a>
        );
    },
});
