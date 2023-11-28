import React, { useEffect, useState } from 'react'
import { useGlobalContext } from '../Context/globalContext';
import IncomeForm from './IncomeForm';
import IncomeItem from './IncomeItem';
import '../Styles/income.css'
import Popup from './Popup';

function Incomes() {
    const { incomes, getTransactions, deleteTransaction, totalIncome} = useGlobalContext()
    const [openPopup , setOpenPopup] = useState(false);
    const [randomState, setrandomState] = useState("abc");

    const updateTransaction = () => {
        setOpenPopup(true);
        console.log('Open popup set to:' + openPopup);
        setrandomState('efg');
        console.log('Random state set to: '+ randomState);
    }

    useEffect(() => {
        getTransactions()
    }, [])
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
        <Popup>
            openPopup = {openPopup}
            setOpenPopup = {setOpenPopup}
        </Popup>
    </div>
  )
}


export default Incomes
