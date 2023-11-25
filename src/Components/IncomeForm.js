import React, { useState } from 'react';
import { useGlobalContext } from '../Context/globalContext';
import Button from './Button';
import { plus } from '../Utils/Icons';
import '../Styles/incomeForm.css';


function Form() {
    const {addTransaction, getTransactions} = useGlobalContext()
    const [inputState, setInputState] = useState({
        title: '',
        amount: '',
        date: '',
        category: '',
        description: '',
        type: 'income',
        user_id:  localStorage.getItem('userId'),
    })

    const {title, amount, date, category, description} = inputState;
    

    const handleInput = name => e => {
        setInputState({...inputState, [name]: e.target.value})
    }
    const handleSubmit = e => {
        e.preventDefault()
        console.log(inputState);
        addTransaction(inputState)
        setInputState({
            title: '',
            amount: '',
            date:  '',
            category: '',
            description: '',
            type: 'income',
            user_id:  localStorage.getItem('userId'),
        })
        getTransactions();
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
             />
        </div>
        <div className='input-control'>
            <input 
            type='text'
            value={amount}
            name={'amount'}
            placeholder='Income Amount'
            onChange={handleInput('amount')}
             />
        </div>
        <div className='input-control'>
            <input type='date' value={date} name='date' onChange={handleInput('date')} />
           
          
        </div>
        <div className='selects input-control'>
            <select required value={category} name='category' id='category' onChange={handleInput('category')}>
                <option value="" disabled>Select Option</option>
                <option value='salary'>Salary</option>
                <option value='freelancing'>Freelancing</option>
                <option value='investment'>Investments</option>
                <option value='stocks'>Stocks</option>
                <option value='bitcoin'>Bitcoin</option>
                <option value='bank'>Bank Transfer</option>
                <option value='youtube'>Youtube</option>
                <option value='other'>Other</option>
            </select>
        </div>
        <div className='input-control'>
            <textarea name='description' value={description} placeholder='Add a reference' id='description' cols='30' rows='4' onChange={handleInput('description')}></textarea>
        </div>
        <div className='submit-btn'>
            <Button 
                name= {'Add Income'}
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

export default Form
