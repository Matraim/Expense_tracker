import React, { useState } from 'react';
import FormInput from '../UI/input/FormInput';
import Button from '../UI/button/Button';
import './ExpenseForm.css';

const ExpenseForm = ({ onCloseForm, onAddNewExpense }) => {
  const [title, setTitle] = useState('');
  const [amount, setAmount] = useState('');
  const [date, setDate] = useState('');

  const isFormValid =
    title.trim().length !== 0 &&
    amount.trim().length !== 0 &&
    date.trim().length !== 0;

  const titleChangeHandler = (e) => {
    setTitle(e.target.value);
  };

  const amountChangeHandler = (e) => {
    setAmount(e.target.value);
  };

  const dateChangeHandler = (e) => {
    setDate(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    if (isFormValid) {
      const expense = {
        date: new Date(date),
        title,
        amount: Number(amount),
        id: Date.now().toString(),
      };
      onAddNewExpense(expense);

      setTitle('');
      setAmount('');
      setDate('');
      onCloseForm();
    } else {
      alert('Заполните все поля!');
    }
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <FormInput
          label={'Name'}
          type="text"
          onChange={titleChangeHandler}
          value={title}
        />
        <FormInput
          label={'Price'}
          inputType="number"
          value={amount}
          onChange={amountChangeHandler}
        />
        <FormInput
          label={'Date'}
          inputType="date"
          onChange={dateChangeHandler}
          value={date}
        />
      </div>
      <div className="new-expense__actions">
        <Button type="button" onClick={onCloseForm}>
          Cancel
        </Button>
        <Button type="submit">Add Expenses</Button>
      </div>
    </form>
  );
};

export default ExpenseForm;

// git init
// git add .
// git commit -m "message"
// git branch -M feature/old-name feature/new-name
// git checkout
