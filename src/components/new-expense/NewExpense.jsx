import React, { useState } from 'react';
import Button from '../UI/button/Button';
import ExpenseForm from './ExpenseForm';
import './NewExpense.css';

const NewExpense = ({ onAddNewExpense }) => {
  const [isFormShow, setIsFormShow] = useState(false);

  const showFormHandler = () => {
    setIsFormShow(true);
  };
  const closeFormHandler = () => setIsFormShow(false);

  return (
    <div className="new-expense">
      {isFormShow ? (
        <ExpenseForm
          onAddNewExpense={onAddNewExpense}
          onCloseForm={closeFormHandler}
        />
      ) : (
        <Button onClick={showFormHandler}>Добавить новый расход</Button>
      )}
    </div>
  );
};

export default NewExpense;
