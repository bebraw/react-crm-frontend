'use strict';
var _ = require('lodash'); // XXX: expand to exact import
var React = require('react');
var Reflux = require('reflux');
var SkyLight = require('jsx!react-skylight/src/skylight.jsx');

var reactabular = require('reactabular');
var Table = reactabular.Table;

var Paginator = require('react-pagify');

var Form = require('lib/Form');


module.exports = React.createClass({
    displayName: 'Table',

    mixins: [Reflux.ListenerMixin],

    propTypes: {
        actions: React.PropTypes.object,
        store: React.PropTypes.object,
        columns: React.PropTypes.array,
        schema: React.PropTypes.object,
        onSort: React.PropTypes.func,
    },

    getInitialState() {
        var perPage = 10;
        var actions = this.props.actions;

        this.listenTo(this.props.store, this.onData);

        actions.load({
            perPage: perPage,
        });

        return {
            store: {
                data: [],
                count: 0,
            },
            modal: {
                title: null,
                content: null,
            },
            pagination: {
                page: 0,
                perPage: perPage,
            },
            sortBy: null,
        };
    },

    onData(store) {
        this.setState({
            store: store,
        });
    },

    render() {
        var columns = this.props.columns || [];
        var header = {
            onClick: (column) => {
                var property = column.property;
                var pagination = this.state.pagination;
                var sortBy = this.state.sortBy;

                if(sortBy === property) {
                    sortBy = '-' + property;
                }
                else {
                    sortBy = property;
                }

                this.props.actions.sort(_.merge({
                    sortBy: sortBy,
                }, pagination));

                this.setState({
                    sortBy: sortBy,
                });
            },
        };
        var store = this.state.store;
        var modal = this.state.modal;
        var pagination = this.state.pagination;

        columns = columns.concat({
            cell: this.editCell,
        });

        return (
            <div>
                <Table
                    className='pure-table pure-table-striped'
                    columns={columns}
                    data={store.data}
                    header={header} />
                <Paginator
                    page={pagination.page}
                    pages={Math.ceil(store.count / pagination.perPage)}
                    beginPages='3'
                    endPages='3'
                    onSelect={this.onSelectPage} />
                <SkyLight ref='modal' title={modal.title}>{modal.content}</SkyLight>
            </div>
        );
    },

    onSelectPage(page) {
        var pagination = this.state.pagination;

        pagination.page = page;

        this.props.actions.load(_.merge({
            sortBy: this.state.sortBy,
        }, pagination));

        this.setState({
            pagination: pagination,
        });
    },

    editCell(property, value, rowIndex) {
        var edit = () => {
            this.refs.modal.show();

            var onSubmit = (data, value, errors) => {
                this.refs.modal.hide();

                if(value === 'Cancel') {
                    return;
                }

                if(!Object.keys(errors).length) {
                    this.refs.modal.hide();

                    this.props.actions.update(data);
                }
            };

            var schema = this.props.schema || {};
            var data = this.props.store.data;
            this.setState({
                modal: {
                    title: 'Edit',
                    content: <Form
                        schema={schema}
                        values={data[rowIndex]}
                        onSubmit={onSubmit}
                    />
                }
            });

            this.refs.modal.show();
        };

        return {
            value: <span>
                <span className='edit' onClick={edit.bind(this)} style={{cursor: 'pointer'}}>
                    &#8665;
                </span>
            </span>
        };
    },
});
