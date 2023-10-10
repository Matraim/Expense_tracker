import React from 'react'
import './ExpensesFilter.css'

const ExpensesFilter = ({ selectedYear, onSelectedYearChange }) => {
	return (
		<div className='expenses-filter'>
			<div className='expenses-filter__control'>
				<label htmlFor='filter'>Filter by year:</label>
				<select
					id='filter'
					value={selectedYear}
					onChange={onSelectedYearChange}
				>
					<option value='2023'>2025</option>
					<option value='2022'>2024</option>
					<option value='2021'>2023</option>
					<option value='2020'>2022</option>
					<option value='All'>All</option>
				</select>
			</div>
		</div>
	)
}

export default ExpensesFilter
