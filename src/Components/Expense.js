import React, { useEffect } from 'react'
import { useGlobalContext } from '../Context/globalContext';
import ExpenseForm from './ExpenseForm';
import IncomeItem from './IncomeItem';
import '../Styles/expense.css'

function Incomes() {
    const { expenses, getTransactions, deleteTransaction, totalExpense} = useGlobalContext()

    useEffect(() => {
        getTransactions()
    })
  return (
    <div className='income'>
        <div className='inner-layout'>
            <h1>Expenses</h1>
            <h2 className='total-income'>Total Expense: <span className='expense-span'>${totalExpense()}</span></h2>
            <div className='income-content'>
                <div className='form-container'>
                    <ExpenseForm />
                </div>
                <div className='incomes'>
                   {expenses.map((expense) =>{
                        const {trans_id, trans_title, trans_amount, trans_date, trans_category, trans_note, trans_type} = expense;
                        console.log(trans_note);
                        return <IncomeItem
                            key={trans_id}
                            id={trans_id}
                            title={trans_title}
                            description={trans_note}
                            amount={trans_amount}
                            date={trans_date}
                            category={trans_category}
                            type ={trans_type}
                            indicatorColor="var(--color-delete)"
                            deleteItem={deleteTransaction}
                        />
                   } )}
                </div>
            </div>
        </div>
    </div>
  )
}


export default Incomes
