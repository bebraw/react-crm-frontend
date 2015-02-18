'use strict';
var React = require('react');
var SkyLight = require('jsx!react-skylight/src/skylight.jsx');
var reactabular = require('reactabular');
var Form = require('plexus-form');
var validate = require('plexus-validate');
var Table = reactabular.Table;
var sortColumns = reactabular.sortColumns;


module.exports = React.createClass({
    getInitialState() {
        return {
            modal: {
                title: null,
                content: null,
            },
        };
    },

    render() {
        var schema = this.props.schema || {};
        var data = this.props.data || [];
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
        var onEdit = this.props.onEdit || noop;
        var modal = this.state.modal || {};

        columns = columns.concat({
            cell: (property, value, rowIndex, columnIndex) => {
                var edit = () => {
                    this.refs.modal.show();

                    var onSubmit = (data, value, errors) => {
                        this.refs.modal.hide();

                        if(value === 'Cancel') {
                            return;
                        }

                        if(!Object.keys(errors).length) {
                            this.refs.modal.hide();

                            onEdit(data);
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
            }
        })

        return <div>
            <Table
                className='pure-table pure-table-striped'
                columns={columns}
                data={data}
                header={header}></Table>
            <SkyLight ref='modal' title={modal.title}>{modal.content}</SkyLight>
        </div>
    },
});

function noop() {}
