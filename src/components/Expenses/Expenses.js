import { useState } from 'react';
import './Expenses.css';
import Card from '../UI/Card';
import ExpenseItem from './ExpenseItem.js'
import ExpensesFilter from './ExpenseFilter';

const Expenses = (props) => {
    const [filteredYear, setFilteredYear] = useState('2020');
    const filteredExpenses = props.items.filter(expense => {
        return expense.date.getFullYear().toString() === filteredYear;
    });
  
    const filterChangeHandler = (selectedYear) => {
        setFilteredYear(selectedYear);
    };
  
    return (
      <div>
        <Card className='expenses'>
          <ExpensesFilter
            selected={filteredYear}
            onChangeFilter={filterChangeHandler}
                />
            {filteredExpenses.length === 0 ? <p>No Expenses Found</p> :  filteredExpenses.map((expense) => (
              <ExpenseItem
                key= {expense.id}
              title={expense.title}
              amount={expense.amount}
              date={expense.date}
            />))}

        </Card>
      </div>
    );
  };
export default Expenses