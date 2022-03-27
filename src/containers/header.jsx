import React from 'react';
import { Layout, Row, Col } from 'antd';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFloppyDisk } from '@fortawesome/free-solid-svg-icons'

const { Header} = Layout;

function HeaderContainer() {
	return (
		<Header className="header">
			<Row >
				<Col span={3}>
					<img src="/epias.jpeg" alt="logo" />
				</Col>
				<Col span={3} offset={15}>
				<div className="work">
						<div className="icon"><FontAwesomeIcon icon={faFloppyDisk} /></div>
						<div className="title">Çalışma Alanı 1</div>
					</div>
			
				</Col>
				<Col span={3}>
					<div className="user">
						<div className="profil">AY</div>
						<div className="name">Merhaba, <strong>Ayhan</strong></div>
					</div>
				</Col>
			</Row>
		</Header>
	);
}

export default HeaderContainer;
