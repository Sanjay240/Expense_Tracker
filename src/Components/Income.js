import React, { useEffect, useState } from 'react'
import { useGlobalContext } from '../Context/globalContext';
import IncomeForm from './IncomeForm';
import IncomeItem from './IncomeItem';
import '../Styles/income.css'
import Popup from './Popup';
import UpdateTransactionForm from './UpdateTransactionForm';

function Incomes() {
    const { incomes, getTransactions, deleteTransaction, totalIncome} = useGlobalContext()
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
    }, [OpenPopup])
  return (
    <div className='income'>
        <div className='inner-layout'>
            <h1>Incomes</h1>
            <h2 className='total-income'>Total Income: <span>${totalIncome()}</span></h2>
            <div className='income-content'>
                <div className='form-container'>
                    <IncomeForm />
                </div>
                <div className='incomes'>
                   {incomes.map((income) =>{
                        const {trans_id, trans_title, trans_amount, trans_date, trans_category, trans_note, trans_type} = income;
                        return <IncomeItem
                            key={trans_id}
                            id={trans_id}
                            title={trans_title}
                            description={trans_note}
                            amount={trans_amount}
                            date={trans_date}
                            category={trans_category}
                            type ={trans_type}
                            indicatorColor="var(--color-green)"
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
