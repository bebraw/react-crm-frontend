'use strict';
var React = require('react');

var reactabular = require('reactabular');
var Table = reactabular.Table;
var sortColumns = reactabular.sortColumns;


module.exports = React.createClass({
    render() {
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

        return <Table
            className='pure-table pure-table-striped'
            columns={columns}
            data={data}
            header={header}></Table>
    },
});
