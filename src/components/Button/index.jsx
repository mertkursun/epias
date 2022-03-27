import React, { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types'
import "./style.scss"
import classNames from 'classnames';
import {useOnClickOutside} from "../../hooks/useOnClickOutside"

function IconButton(props) {
	const [url, setUrl] = useState("")
	const [open, setOpen] = useState(false)
	const [options, setOptions] = useState(props.options)
	const dropdownRef = useRef()

	useOnClickOutside(dropdownRef, () => setOpen(false));

	useEffect(() => {
		setOptions(props.options)
	}, [props.options])
	useEffect(() => {
		setUrl(props.url)
	}, [props.url])

	const handleClick = () => {
		if (options && options.length !== 0) {
			setOpen(!open)
		} else {
			props.onClick && props.onClick()
		}
	}

	const handleListChange = (e) => {
		let data = []
		options.forEach((item) => {
			if (e.target.value === item.value) {
				data.push({ ...item, checked: e.target.checked })
			} else data.push(item)
		})
		setOptions(data)
		props.onChange && props.onChange(data)
	}

	const renderDropdownButton = () => {
		const opt = options.map((item, index) => {
			return (
				<li key={index}>
					<input
						type="checkbox"
						id={index}
						name={item.value}
						value={item.value}
						checked={item.checked}
						onChange={handleListChange}
					/>
					<label for={item.value}>{item.label}</label>
				</li>
			)
		})

		return opt
	}

	const dropdownClass = classNames("dropdown", {
		open: open
	})
	return (
		<div className="iconButton">
			<button
				onClick={handleClick}>
				<img src={url} alt="iconButton"></img>
			</button>
			<div ref={dropdownRef} className={dropdownClass}>
				<ul>
					{renderDropdownButton()}
				</ul>
			</div>
		</div>
	);
}

IconButton.propTypes = {
	options: PropTypes.array,
}

IconButton.defaultProps = {
	options: [],
}

export default IconButton
