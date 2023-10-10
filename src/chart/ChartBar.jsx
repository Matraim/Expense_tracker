import React from 'react'
import './ChartBar.css'

const ChartBar = ({ label, value, totalMax }) => {
	let barFillHeight = '0%'
	if (totalMax > 0) {
		barFillHeight = Math.round((value / totalMax) * 100) + '%'
	}

	return (
		<div className='chart-bar'>
			<div className='chart-bar__inner'>
				<div
					className='chart-bar__fill'
					style={{ height: barFillHeight }}
				></div>
			</div>
			<div className='chart-bar__label'>{label}</div>
		</div>
	)
}

export default ChartBar
