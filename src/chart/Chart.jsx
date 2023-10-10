import React from 'react'
import './Chart.css'
import ChartBar from './ChartBar'

const Chart = ({ dataPoints }) => {
	const dataPointsValues = dataPoints.map((d) => d.value)
	console.log(dataPointsValues)

	const totalMax = Math.max(...dataPointsValues)

	return (
		<div className='chart'>
			{dataPoints.map((point) => {
				return (
					<ChartBar
						key={point.label}
						label={point.label}
						value={point.value}
						totalMax={totalMax}
					/>
				)
			})}
		</div>
	)
}

export default Chart
