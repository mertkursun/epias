import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types'
import Split from 'react-split';
import classNames from "classnames"
import "./style.scss"

export function SplitPane(props) {
	return <div className="splitPane">{props.children}</div>
}

function SplitContainer(props) {
	const [direction, setDirection] = useState(props.direction)
	const [className, setClassName] = useState(props.className)
	const [minSize, setMinSize] = useState(props.minSize)
	const [maxSize, setMaxSize] = useState(props.maxSize)
	const [sizes, setSizes] = useState(props.sizes)

	useEffect(() => {
		setDirection(props.direction)
	}, [props.direction])
	useEffect(() => {
		setClassName(props.className)
	}, [props.className])
	useEffect(() => {
		setMinSize(props.minSize)
	}, [props.minSize])
	useEffect(() => {
		setMaxSize(props.maxSize)
	}, [props.maxSize])
	useEffect(() => {
		setSizes(props.sizes)
	}, [props.sizes])


	const splitClass = classNames("split", className, direction)

	return (
		<Split
			id={`splitId_${props.id}`}
			className={splitClass}
			direction={direction}
			minSize={minSize}
			sizes={sizes}
			maxSize={maxSize}
			onDragEnd={(e) => props.onDragEnd && props.onDragEnd(e)}
		>
			{props.children}
		</Split>
	);
}

SplitContainer.propTypes = {
	direction: PropTypes.string,
	className: PropTypes.string,
	minSize: PropTypes.number,
	sizes: PropTypes.array,
	onDragEnd: PropTypes.func
}

SplitContainer.defaultProps = {
	direction: "horizontal",
	className: "",
	minSize: 10,
	sizes: [50, 50]
}

export default SplitContainer
