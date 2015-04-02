'use strict';
var React = require('react');
var ReactRouter = require('react-router');
var Link = ReactRouter.Link;


module.exports = React.createClass({
    render: function() {
        return (
            <div className='pure-menu' {...this.props.children}>{this.props.children}</div>
        );
    },
});

module.exports.List = React.createClass({
    render: function() {
        return (
            <ul className='pure-menu-list' {...this.props.children}>{this.props.children}</ul>
        );
    },
});

module.exports.Heading = React.createClass({
    render: function() {
        return (
            <span className='pure-menu-heading' {...this.props.children}>{this.props.children}</span>
        );
    },
});

var MenuLink = React.createClass({
    render: function() {
        return (
            <Link className='pure-menu-link' to={this.props.to}>
                {this.props.children}
            </Link>
        );
    },
});

module.exports.Item = React.createClass({
    render: function() {
        return (
            <li className='pure-menu-item'>
                <MenuLink to={this.props.to} {...this.props.children}>{this.props.children}</MenuLink>
            </li>
        );
    },
});
