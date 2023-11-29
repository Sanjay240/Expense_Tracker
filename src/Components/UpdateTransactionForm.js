/** Update Transaction form is shown in the pop window to update any transaction.  */
import React, { useState } from 'react';
import { useGlobalContext } from '../Context/globalContext';
import Button from './Button';
import { plus } from '../Utils/Icons';
import '../Styles/incomeForm.css';


function UpdateTransactionForm(trans) {
    const {insertTransaction, getTransactions} = useGlobalContext();
    const [inputState, setInputState] = useState({
        title: trans.trans.title,
        amount: trans.trans.amount,
        date: trans.trans.date,
        category: trans.trans.category,
        description: trans.trans.description,
        type: trans.trans.type,
        id: trans.trans.id,
    })

    const {title, amount, date, category, description, type} = inputState;
    

    const handleInput = name => e => {
        setInputState({...inputState, [name]: e.target.value})
    }
    const handleSubmit = e => {
        e.preventDefault()
        if(type == 'expense' || type == 'income'){
            insertTransaction(inputState)
        }
        getTransactions();
        trans.trans.setOpenPopup(false);
        window.location.reload(true);

    }

  return (
    <form className='form' onSubmit = {handleSubmit}> 
        <div className='input-control'>
            <input 
            type='text'
            value={title}
            name={'title'}
            placeholder='Income Title'
            onChange={handleInput('title')}
            required
             />
        </div>
        <div className='input-control'>
            <input 
            type='number'
            value={amount}
            name={'amount'}
            placeholder='Income Amount'
            onChange={handleInput('amount')}
            min={0}
            required
             />
        </div>
        <div className='input-control'>
            <input 
            type='text'
            value={type}
            name={'type'}
            placeholder='Type'
            onChange={handleInput('type')}
            required
             />
        </div>
        <div className='input-control'>
            <input type='date' value={date} name='date' onChange={handleInput('date')}  required/>
        </div>
        {type === 'income' 
        ?
        <div className='selects input-control'>
            <select required value={category} name='category' id='category' onChange={handleInput('category')} >
                <option value="" disabled>Select Option</option>
                <option value='salary' selected>Salary</option>
                <option value='freelancing'>Freelancing</option>
                <option value='investment'>Investments</option>
                <option value='stocks'>Stocks</option>
                <option value='bitcoin'>Bitcoin</option>
                <option value='bank'>Bank Transfer</option>
                <option value='youtube'>Youtube</option>
                <option value='other'>Other</option>
            </select>
        </div>
        :
        <div className='selects input-control'>
            <select required value={category} name='category' id='category' onChange={handleInput('category')}>
                <option value="" disabled>Select Option</option>
                <option value='education' selected>Education</option>
                <option value='groceries'>Groceries</option>
                <option value='health'>Health</option>
                <option value='subscriptions'>Subscriptions</option>
                <option value='takeaways'>Takeaways</option>
                <option value='clothing'>Clothing</option>
                <option value='travelling'>Travelling</option>
                <option value='other'>Other</option>
            </select>
        </div>
        }
        <div className='input-control'>
            <textarea name='description' value={description} placeholder='Add a reference' id='description' cols='30' rows='4' onChange={handleInput('description')}></textarea>
        </div>
        <div className='submit-btn'>
            <Button 
                name= {'Update Transaction'}
                icon= {plus}
                bPad= {'.8rem 1.6rem'}
                bRad= {'30px'}
                bg={'var(--color-accent'}
                color={'#fff'}
            />
        </div>
    </form>
  )
}

export default UpdateTransactionForm
