import './ExpensesList.css';
import ExpenseItem from './ExpenseItem';


const ExpensesList = (props) => {

    if(props.items.length === 0){
        return <h2 className="expenses-list__fallback">Expenses no found</h2>;
    }

    return (
        <ul>
            {props.items.map((item) => (
                //if(item.date.getFullYear() == selectedYear){
                <ExpenseItem
                key={item.id}
                title={item.title}
                amount={item.amount}
                date={item.date}
            />
            ))}
        </ul>
    )

}

export default ExpensesList;