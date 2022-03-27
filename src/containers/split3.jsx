import React, { useEffect, useState } from 'react';
import TableComp from '../components/TableComp';
import {
	getContract2DataAsync, addContract2Row
} from '../store/reducer';
import { useSelector, useDispatch } from 'react-redux';

function Split3() {
	const { contract2Columns, contract2Data } = useSelector(state => state.store)
	const dispatch = useDispatch();
	const [isOpenForm, setIsOpenForm] = useState(false)

	useEffect(() => {
		dispatch(getContract2DataAsync())
	}, [])

	const handleAddButtonClick = () => {
		setIsOpenForm(true)
	}

	const handleAddFormSubmit = (e) => {
		dispatch(addContract2Row(e.target))
    e.preventDefault();
	}

	return (
		<div className="split3">
			<TableComp
				dataSource={contract2Data}
				columns={contract2Columns}
				showHeader={false}
			/>
			<div className="addRowWrapper">
				{isOpenForm && (
					<div className="addForm">
						<form onSubmit={handleAddFormSubmit}>
							<input type="text" name="id" placeholder="No giriniz." />
							<input type="text" name="label" placeholder="Kontrat giriniz" />
							<input type="text" name="value" placeholder="Teklif giriniz" />
							<input type="text" name="data" placeholder="Data giriniz" />
							<input type="text" type="submit" value="Kaydet" />
						</form>
					</div>
				)}
				<button onClick={handleAddButtonClick}>Yeni Ekle</button>
			</div>
		</div>
	);
}

export default Split3;
