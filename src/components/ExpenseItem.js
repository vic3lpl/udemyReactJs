import "./ExpenseItem.css";
import { useState } from "react";
import ExpenseDate from "./ExpenseDate";
import Card from "./Card";
function ExpenseItem(props) {

    //const [title, setTitle] = useState(props.title);
  
    const onClickHandler = () => {
        //setTitle("Updated!!!");
    }

  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date}/>
      <div className="expense-item__description">
        <h2>{props.title}</h2>
      </div>
      <div className="expense-item__price">{props.amount}</div>
      <button onClick={onClickHandler}>Change Title</button>
    </Card>
  );
}

export default ExpenseItem;
