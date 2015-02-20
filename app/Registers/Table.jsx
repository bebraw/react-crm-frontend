'use strict';
var React = require('react');
var Reflux = require('reflux');
var SkyLight = require('jsx!react-skylight/src/skylight.jsx');

var reactabular = require('reactabular');
var Table = reactabular.Table;
var sortColumns = reactabular.sortColumns;

var Form = require('plexus-form');
var validate = require('plexus-validate');
var Paginator = require('react-pagify');


module.exports = React.createClass({
    mixins: [Reflux.ListenerMixin],

    getInitialState() {
        this.listenTo(this.props.store, this.onData);

        return {
            data: [],
            modal: {
                title: null,
                content: null,
            },
            pagination: {
                page: 0,
                perPage: 5
            },
        };
    },

    onData(data) {
        this.setState({
            data: data,
        });
    },

    render() {
        var schema = this.props.schema || {};
        var data = this.state.data || [];
        var columns = this.props.columns || [];
        var header = {
            onClick: (column) => {
                reactabular.sortColumn(
                    columns,
                    column,
                    data,
                    this.props.onSort
                );
            },
        };
        var modal = this.state.modal || {};
        var pagination = this.state.pagination || {};

        columns = columns.concat({
            cell: this.editCell,
        });

        return <div>
            <Table
                className='pure-table pure-table-striped'
                columns={columns}
                data={data}
                header={header} />
            <Paginator
                page={pagination.page}
                pages={pagination.amount}
                beginPages='3'
                endPages='3'
                onSelect={this.onSelectPage} />
            <SkyLight ref='modal' title={modal.title}>{modal.content}</SkyLight>
        </div>
    },

    onSelectPage(page) {
        console.log('selected page', page);
    },

    editCell(property, value, rowIndex, columnIndex) {
        var edit = () => {
            this.refs.modal.show();

            var data = this.state.data || [];
            var schema = this.props.schema || {};
            var onSubmit = (data, value, errors) => {
                this.refs.modal.hide();

                if(value === 'Cancel') {
                    return;
                }

                if(!Object.keys(errors).length) {
                    this.refs.modal.hide();

                    var actions = this.props.actions;

                    actions && actions.update(data);
                }
            };

            this.setState({
                modal: {
                    title: 'Edit',
                    content: <Form
                        buttons={['OK', 'Cancel']}
                        schema={schema}
                        validate={validate}
                        values={data[rowIndex]}
                        onSubmit={onSubmit}
                    ></Form>
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

function noop() {}
