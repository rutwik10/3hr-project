import React, { useState } from "react";

import ExpenseItem from "./ExpenseItem";
// import Card from '../UI/Card';
// import ExpensesFilter from './ExpensesFilter';
// import './Expenses.css';

const Expenses = (props) => {
  return (
    <div>
      {props.items.map((expense) => (
        <ExpenseItem
          price={expense.price}
          name={expense.name}
          category={expense.category}
        />
      ))}
    </div>
  );
};

export default Expenses;
