import React, { useState } from "react";

import './Form.css';


export default function Form (props) {

    // const [enteredID, setEnteredID] = useState('');
    const [enteredPrice, setEnteredPrice] = useState('');
    const [enteredName, setEnteredName] = useState('');
    const [enteredCategory, setEnteredCategory] = useState('');

    // const idChangeHandler = (event) => {
    //     setEnteredID(event.target.value);
    // };

    const priceChangeHandler = (event) => {
        setEnteredPrice(event.target.value);
    };

    const nameChangeHandler = (event) => {
        setEnteredName(event.target.value);
    }

    const categoryChangeHandler = (event) => {
        setEnteredCategory(event.target.value);
    }

    const submitHandler = (event) => {
        event.preventDefault();
        
        const expenseData = {
        //   id: enteredID,
          price: enteredPrice,
          name: enteredName,
          category: enteredCategory
        };
    
        props.onSaveExpenseData(expenseData);
        // setEnteredID('');
        setEnteredPrice('');
        setEnteredName('');
        setEnteredCategory('');
      };
    

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        {/* <div className="new-expense__control">
          <label>Product ID:</label>
          <input type="number" value={enteredID} onChange={idChangeHandler} />
        </div> */}
        <div className="new-expense__control">
          <label>Price:</label>
          <input type="number" value={enteredPrice} onChange={priceChangeHandler} />
        </div>
        <div className="new-expense__control">
          <label>Dish:</label>
          <input type="text" value={enteredName} onChange={nameChangeHandler} />
        </div>
        <div className="new-expense__control">
          <label>Choose Table:</label>
          <select id="category" name="category" value={enteredCategory} onChange={categoryChangeHandler}>
            <option value="table 1">table 1</option>
            <option value="table 2">table 2</option>
            <option value="table 3">table 3</option>
          </select>
        </div>
        <div >
        <button type="submit">Add Product</button>
      </div>
      </div>
      {/* <div className="new-expense__actions">
        <button type="submit">Add Product</button>
      </div> */}
    </form>
  );
}
