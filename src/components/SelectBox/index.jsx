import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types'
import "./style.scss"

function SelectBox(props) {
	const [options, setOptions] = useState(props.options)
	const [placeholder, setPlaceholder] = useState(props.placeholder)

	useEffect(() => {
		setOptions(props.options)
	}, [props.options])
	useEffect(() => {
		setPlaceholder(props.placeholder)
	}, [props.placeholder])


	const optionRender = () => {
		const opt = options.map((item, index) => {
			return (
				<option key={index} value={item}>{item}</option>
			)
		})

		return opt
	}

	return (
		<div className="selectBoxWrapper">
			<select name={props.name} id={props.id} onChange={(e) => props.onChange(e.target.value)}>
				<option value={0}>{placeholder}</option>
				{optionRender()}
			</select>
		</div>
	);
}

SelectBox.propTypes = {
	options: PropTypes.array,
	placeholder: PropTypes.string
}

SelectBox.defaultProps = {
	options: [],
	placeholder: "",
}

export default SelectBox
