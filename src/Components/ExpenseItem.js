import './ExpenseItem.css';

export default function ExpenseItem(props) {
    
    return (
      <div className="order">
        
        <div>{props.price}</div>
        <div>{props.name}</div>
        <div>{props.category}</div>
      </div>
    );
  }
  
//   export default ExpenseItem;