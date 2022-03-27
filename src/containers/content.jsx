import React from 'react';
import SplitContainer, { SplitPane } from '../components/SplitContainer';
import Split1 from './split1';
import Split2 from './split2';
import Split3 from './split3';
import Split4 from './split4';
import { useLocalStorage } from "../hooks/useLocalStorage"



function ContentContainer() {
	const [verticalSplit, setVertical] = useLocalStorage("verticalSplit", "");
	const [horizontalTop, setHorizontalTop] = useLocalStorage("horizontalTop", "");
	const [horizontalBottom, setHorizontalBottom] = useLocalStorage("horizontalBottom", "");

	return (
		<SplitContainer
			className="main"
			direction="vertical"
			sizes={[60, 40]}
			onDragEnd={(e) => {
				setVertical(`%${e[0]} %${e[1]}`)
			}}
		>
			<SplitPane>
				<SplitContainer
					sizes={[70, 30]}
					onDragEnd={(e) => {
						setHorizontalTop(`%${e[0]} %${e[1]}`)
					}}
				>
					<SplitPane>
						<Split1></Split1>
					</SplitPane>
					<SplitPane>
						<Split2 positionV={verticalSplit} positionT={horizontalTop} positionB={horizontalBottom} />
					</SplitPane>
				</SplitContainer>
			</SplitPane>
			<SplitPane>
				<SplitContainer
					sizes={[70, 30]}
					onDragEnd={(e) => {
						setHorizontalBottom(`%${e[0]} %${e[1]}`)
					}}
				>
					<SplitPane>
						<Split3 />
					</SplitPane>
					<SplitPane>
						<Split4 />
					</SplitPane>
				</SplitContainer></SplitPane>
		</SplitContainer>
	);
}

export default ContentContainer;
