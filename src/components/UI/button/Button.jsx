import React from 'react'
import './Button.css'

const Button = ({ children, onClick, ...rest }) => {
	return (
		<button onClick={onClick} {...rest}>
			{children}
		</button>
	)
}

export default Button
