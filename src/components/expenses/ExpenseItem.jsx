import React from 'react';
import Card from '../UI/card/Card';
import './ExpenseItem.css';
import ExpenseDate from './ExpenseDate';
import Button from '../UI/button/Button';

const ExpenseItem = ({ date, title, amount, onDeleteExpense, id }) => {
  return (
    <Card className="expense-item">
      <ExpenseDate date={date} />
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">${amount}</div>
      </div>
      <Button
        style={{ marginLeft: '1rem' }}
        onClick={() => {
          onDeleteExpense(id);
        }}
      >
        Delete
      </Button>
    </Card>
  );
};

export default ExpenseItem;
