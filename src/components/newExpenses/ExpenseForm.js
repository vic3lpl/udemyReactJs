import "./ExpenseForm.css";
import { useState } from "react";

const ExpenseForm = (props) => {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");

  // const[userInput, setUserInput] =  useState({
  //   enteredTitle:"",
  //   enteredAmount:"",
  //   enteredDate:""
  // })

  const titleChangeHansdler = (event) => {
    // three way to update React state
    
    setEnteredTitle(event.target.value);
    console.log(event.target.value);

    // use this oso can update object but if too many this kind of state update then 
    //React may be will return incorrect state snapshot
    // setUserInput({
    //   ...userInput,
    //   enteredAmount:event.target.value
    // })

    // use this if wan to update object bcos react will guarantee return correct state snapshop 
    // setUserInput((prevState)=>{
    //     return {...prevState,
    //     enteredTitle:event.target.value
    //   }        
    // });
    
  };

  const amountChangeHansdler = (event) => {
    setEnteredAmount(event.target.value);
    console.log(event.target.value);
    // setUserInput({
    //   ...userInput,
    //   enteredAmount:event.target.value
    // })
  };

  const dateChangeHansdler = (event) => {
    setEnteredDate(event.target.value);
    console.log(event.target.value);
    // setUserInput({
    //   ...userInput,
    //   enteredDate:event.target.value
    // })
  };

  const onSubmitHandler = (event) =>{
    event.preventDefault();
    const expensesData = {
        title:enteredTitle,
        amount:enteredAmount,
        date:new Date(enteredDate)
    }
    //console.log(expensesData);
    props.onSaveExpenseHandle(expensesData);
  }

  return (
    <form onSubmit={onSubmitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__controls">
          <label>Title</label>
          <input type="text" 
          value={enteredTitle}
          onChange={titleChangeHansdler} />
        </div>
        <div className="new-expense__controls">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            value={enteredAmount}
            onChange={amountChangeHansdler}
          />
        </div>
        <div className="new-expense__controls">
          <label>Date</label>
          <input type="date" 
          value={enteredDate}
          onChange={dateChangeHansdler} />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add Expenses</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
