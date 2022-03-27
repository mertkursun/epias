import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types'
import { Table } from 'antd';
import "./style.scss"

function TableComp(props) {
	const [dataSource, setDataSource] = useState(props.dataSource)
	const [columns, setColumns] = useState(props.columns)
	const [showHeader, setShowHeader] = useState(props.showHeader)

	useEffect(() => {
		setColumns(props.columns)
	}, [props.columns])
	useEffect(() => {
		setDataSource(props.dataSource)
	}, [props.dataSource])
	useEffect(() => {
		setShowHeader(props.showHeader)
	}, [props.showHeader])

	return (
		<div className="tableWrapper">
			<Table
				showHeader={showHeader}
				pagination={false}
				dataSource={dataSource} columns={columns}
			/>
		</div>

	);
}

TableComp.propTypes = {
	columns: PropTypes.array,
	dataSource: PropTypes.array,
	showHeader: PropTypes.bool
}

TableComp.defaultProps = {
	dataSource: [],
	columns: [],
	showHeader: true
}

export default TableComp
