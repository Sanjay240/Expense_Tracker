/** This component shows the expense form to add  new expense and also shows all the expense transactions added. At the top shows total amount of the expense. */
import React, { useEffect, useState} from 'react'
import { useGlobalContext } from '../Context/globalContext';
import ExpenseForm from './ExpenseForm';
import IncomeItem from './IncomeItem';
import '../Styles/expense.css'
import Popup from './Popup';
import UpdateTransactionForm from './UpdateTransactionForm';

function Incomes() {
    const { expenses, getTransactions, deleteTransaction, totalExpense} = useGlobalContext()
    const [OpenPopup , setOpenPopup] = useState(false);
    const [transForEdit, setTransForEdit] = useState({
        title: '',
        amount: '',
        date: '',
        category: '',
        description: '',
        type: '',
    })

    const updateTransaction = (props) => {
        setTransForEdit({
            title: props.title,
            amount: props.amount,
            date:  props.date,
            category: props.category,
            description: props.description ,
            type: props.type,
            id: props.id,
            setOpenPopup: setOpenPopup,
        })
        setOpenPopup(true);
       
    }

    useEffect(() => {
        getTransactions()
    }, [])
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
                            updateItem = {updateTransaction}
                        />
                   } )}
                </div>
            </div>
        </div>
        <Popup
            title = "Update Transaction"
            openPopup = {OpenPopup}
            setOpenPopup = {setOpenPopup}
        >
            <UpdateTransactionForm trans = {transForEdit}/>
        </Popup>
    </div>
  )
}


export default Incomes
