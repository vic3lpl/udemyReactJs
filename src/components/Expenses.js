import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";
import Card from "./Card";
import ExpensesFilter from "./ExpensesFilter";
import { useState } from "react";

function Expenses(props) {
  const [selectedYear, setSelectedYear] = useState("2021");
  const expensesFilterHandler = (filterYear) => {
      setSelectedYear(filterYear);
  };

  const filteredExpenses = props.data.filter(item => {
    return item.date.getFullYear().toString() == selectedYear;
  })

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selected={selectedYear}
          expensesFilterHandler={expensesFilterHandler}
        />
        {


          filteredExpenses.map((item) => {
             //if(item.date.getFullYear() == selectedYear){
              return <ExpenseItem
              key={item.id}
              title={item.title}
              amount={item.amount}
              date={item.date}
            />
            //}
            
          })
        }

        {/* <ExpenseItem
          title={props.data[0].title}
          amount={props.data[0].amount}
          date={props.data[0].date}
        />

        <ExpenseItem
          title={props.data[1].title}
          amount={props.data[1].amount}
          date={props.data[1].date}
        />
        <ExpenseItem
          title={props.data[2].title}
          amount={props.data[2].amount}
          date={props.data[2].date}
        />
        <ExpenseItem
          title={props.data[3].title}
          amount={props.data[3].amount}
          date={props.data[3].date}
        /> */}
      </Card>
    </div>
  );
}

export default Expenses;
