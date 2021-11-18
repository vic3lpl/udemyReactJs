import ExpenseForm from "./ExpenseForm";
import './NewExpenses.css';

const NewExpenses = (props) => {

    const onSaveEnpenseHandler = (newExpense) => {
        const expensesData = {
            ...newExpense,
            id:Math.random().toString()
        }
        console.log(expensesData);
        props.savedData(expensesData);
    }

    return <div className='new-expense'>
        <ExpenseForm onSaveExpenseHandle={onSaveEnpenseHandler}/>
    </div>
}

export default NewExpenses;