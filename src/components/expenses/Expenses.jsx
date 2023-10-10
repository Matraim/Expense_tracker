import React, { useState } from 'react'
import ExpenseList from './ExpenseList'
import Card from '../UI/card/Card'
import ExpensesFilter from './ExpensesFilter'
import './Expenses.css'
import ExpensesChart from './ExpensesChart'

const Expenses = ({ expenses = [], onDeleteExpense }) => {
	const [selectedYear, setSelectedYear] = useState('All')

	const selectedYearChangeHandler = (e) => {
		setSelectedYear(e.target.value)
	}

	const filteredExpenses = expenses.filter((expense) => {
		if (expense.date.getFullYear().toString() === selectedYear) {
			return true
		}
		return false
	})

	const renderedExpenses =
		selectedYear === 'All' ? expenses : filteredExpenses

	return (
		<Card className='expenses'>
			<ExpensesFilter
				selectedYear={selectedYear}
				onSelectedYearChange={selectedYearChangeHandler}
			/>
			<ExpensesChart expenses={renderedExpenses} />
			<ExpenseList
				onDeleteExpense={onDeleteExpense}
				expenses={renderedExpenses}
			/>
		</Card>
	)
}

export default Expenses
