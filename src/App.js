// import ExpenseItem from "./Components/ExpenseItem";
import Expenses from "./Components/Expenses";
import React, { useState } from "react";
import NewExpense from "./Components/NewExpense";
import Order from "./Orders";

const DUMMY_EXPENSES = [
  
];

function App() {

  
  

  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  };

  // return React.createElement(
  //   'div',
  //   {},
  //   React.createElement('h2', {}, "Let's get started!"),
  //   React.createElement(Expenses, { items: expenses })
  // );

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Order></Order>
      <Expenses items={expenses} />
    </div>
  );
}

export default App;
