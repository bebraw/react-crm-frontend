'use strict';

var React = require('react');
var StateFromStoreMixin = require('items-store/StateFromStoresMixin');
var ReactRouter = require('react-router');
var RouteHandler = ReactRouter.RouteHandler;
var Link = ReactRouter.Link;

require('./style.css');

var Application = React.createClass({
    mixins: [StateFromStoreMixin],
    statics: {
        getState: function(stores, params) {
            var transition = stores.Router.getItem('transition');
            return {
                loading: !!transition
            };
        },
    },
    render: function() {
        return <div className={this.state.loading ? 'application loading' : 'application'}>
            {this.state.loading ? <div style={{float: 'right'}}>loading...</div> : null}

            <header>
                <nav className="primary">
                    <ol>
                        <li>
                            <Link to='dashboard'>Dashboard</Link>
                        </li>
                        <li>
                            <Link to='clients'>Registers</Link>
                        </li>
                        <li>
                            <Link to='contracts'>Contracts</Link>
                        </li>
                    </ol>
                </nav>
            </header>

            <article>
                <RouteHandler />
            </article>
        </div>;
    }
});
module.exports = Application;
