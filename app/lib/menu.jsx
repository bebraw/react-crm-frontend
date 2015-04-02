'use strict';
var classNames = require('classnames');
var React = require('react');
var ReactRouter = require('react-router');
var Link = ReactRouter.Link;


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

var MenuLink = React.createClass({
    render: function() {
        var {className, ...props} = this.props;

        return (
            <Link className={classNames('pure-menu-link', className)} to={props.to} {...props}>
                {props.children}
            </Link>
        );
    },
});

module.exports.Item = React.createClass({
    render: function() {
        var {className, ...props} = this.props;

        return (
            <li className={classNames('pure-menu-item', className)} {...props}>
                <MenuLink to={props.to}>{props.children}</MenuLink>
            </li>
        );
    },
});
