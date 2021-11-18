//import ExpenseItem from "./components/ExpenseItem";
import react from "react";
import Expenses from "./components/Expenses";
import NewExpenses from "./components/newExpenses/NewExpenses";
import {useState} from "react";

const DUMMY_DATA = [
  {
    id: "e1",
    title: "Toilet Paper",
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  { id: "e2", title: "New TV", amount: 799.49, date: new Date(2021, 2, 12) },
  {
    id: "e3",
    title: "Car Insurance",
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: "e4",
    title: "New Desk (Wooden)",
    amount: 450,
    date: new Date(2021, 5, 12),
  },
];

function App() {
  
  const [expenses, setExpenses] = useState(DUMMY_DATA);

  const savedData = (data) => {
    setExpenses((preState) => {
      return [data,...preState];
    });
  }

  return (
    <div>
      <NewExpenses savedData={savedData}/>
      <Expenses
        data={expenses}
      />
      
    </div>
  );
}

export default App;
