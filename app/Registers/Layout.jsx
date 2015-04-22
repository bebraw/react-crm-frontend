'use strict';
var React = require('react');
var ReactRouter = require('react-router');
var RouteHandler = ReactRouter.RouteHandler;


module.exports = React.createClass({
    displayName: 'Layout',

    render() {
        return (
            <div>
                <div className='header'>
                    <h1>Registers</h1>
                </div>

                <div className='content'>
                    <RouteHandler />
                </div>
            </div>
        );
    }
});