import React from 'react'
import { Input } from './Input'
import './FormInput.css'

const FormInput = ({
	inputType = 'text',
	onChange,
	label,
	id,
	value,
	...rest
}) => {
	return (
		<div>
			<label className='label' htmlFor={id}>
				{label}
			</label>
			<Input
				id={id}
				type={inputType}
				value={value}
				onChange={onChange}
				{...rest}
			/>
		</div>
	)
}

export default FormInput
