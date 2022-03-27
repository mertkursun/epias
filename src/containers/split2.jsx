import React from 'react';

function Split2({positionV, positionT, positionB }) {
	return (
		<div className="split2">
			<div className="container">
				<h3>Ayarlar</h3>
				<h4>Yatay Pencere Değerleri:</h4>
				<p>{positionV}</p>
				<h4>Üst Dikey Pencere Değerleri:</h4>
				<p>{positionT}</p>
				<h4>Alt Dikey Pencere Değerleri:</h4>
				<p>{positionB}</p>
			</div>
		</div>
	);
}

export default Split2;
