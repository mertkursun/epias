import React, { useEffect } from 'react';
import TableComp from '../components/TableComp';
import SelectBox from '../components/SelectBox';
import { Row, Col } from 'antd';
import {
	getContract1DataAsync, getFilterData, getFilterColumns
} from '../store/reducer';
import { useSelector, useDispatch } from 'react-redux';
import IconButton from '../components/Button';

function Split1() {
	const { filterOption, filterContract1Data, filterColumnsOpt, filterContract1Columns } = useSelector(state => state.store)
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(getContract1DataAsync())	
	}, [dispatch])

	const handleFilterChange = (val) => {
		dispatch(getFilterData(val))
	}

	const handleFilterColumnChange = (val) => {
		debugger
		dispatch(getFilterColumns(val))
	}

	return (
		<div className="split1">
			<Row className="filterWrapper">
				<Col span={4} >
					<SelectBox
						options={filterOption}
						name="control"
						id="control"
						onChange={handleFilterChange}
						placeholder={"Kontrol Seçiniz"}
					/>
				</Col>
				<Col span={4} offset={16} style={{ textAlign: "end" }}>
					<IconButton url="/upload.svg"></IconButton>
					<IconButton
						url="/settings.svg"
						options={filterColumnsOpt}
						onChange={handleFilterColumnChange}
					></IconButton>
					<IconButton
						url="/plus.svg"
					></IconButton>
				</Col>
			</Row>
			<Row>
				<Col span={24}>
					<TableComp
						dataSource={filterContract1Data}
						columns={filterContract1Columns}
					/>
				</Col>
			</Row>

		</div>
	);
}

export default Split1;
