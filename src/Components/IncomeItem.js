import React from 'react'
import styled from 'styled-components'
import { bitcoin, book, calender, card, circle, clothing, comment, dollar, food, freelance, medical, money, piggy, stocks, trash, tv, users, yt, edit } from '../Utils/Icons';
import Button from './Button';
import { dateFormat } from '../Utils/DateFormat';

function IncomeItem({id, title, amount, date, category, description, deleteItem, indicatorColor, type, updateItem}) {
    
    const  categoryIcon = () => {
        switch(category) {
            case 'salary':
                return money;
            case 'freelancing':
                return freelance;
            case 'investment':
                return stocks;
            case 'stocks':
                return users;
            case 'bitcoin':
                return bitcoin;
            case 'bank':
                return card;
            case 'youtube':
                return yt;
            case 'other':
                return piggy;
            default: 
                return ''
        }
    }
    const expenseCatIcon = () => {
        switch (category) {
            case 'education':
                return book;
            case 'groceries':
                return food;
            case 'health':
                return medical;
            case 'subscriptions':
                return tv;
            case 'takeaways':
                return freelance;
            case 'clothing':
                return clothing;
            case 'travelling':
                return freelance;
            case 'other':
                return circle;
            default: 
                return '';
        }
    }
  return (
    <IncomeItemStyled indicator = {indicatorColor}>
        <div className='icon'>
            {type === 'expense' ? expenseCatIcon() : categoryIcon()}
        </div>
        <div className='content'>
            <h5>{title}</h5>
            <div className='inner-content'>
                <div className='text'>
                    <p>{dollar} {amount}</p>
                    <p>{calender} {dateFormat(date)}</p>
                    <p>
                        {comment}
                        {description}
                    </p>
                </div>
                <div className='btn-con'>
                    <Button 
                        icon={trash}
                        bPad={'1rem'}
                        bRad={'50%'}
                        bg={'var(--primary-color'}
                        color={'#fff'}
                        onClick={() => {
                            deleteItem(id)
                            window.location.reload(true);
                            }}
                    />
                     <Button 
                        icon={edit}
                        bPad={'1rem'}
                        bRad={'50%'}
                        bg={'var(--primary-color'}
                        color={'#fff'}
                        onClick={() => updateItem()}
                    />
                </div>
            </div>
        </div>
    </IncomeItemStyled>
  )
}

const IncomeItemStyled = styled.div`
    background: #fcf6f9;
    border: 2px solid #ffffff;
    box-shadow: 0px 1px 15px rgba(0,0,0,0.06);
    border-radius: 20px;
    padding: 1rem;
    margin-bottom: 1rem;
    display: flex;
    align-items: center;
    gap: 1rem;
    width: 100%;
    color: #222260;
    .icon{
        width: 80px;
        height: 80px;
        border-radius: 20px;
        background: #f5f5f5;
        display: flex;
        align-items: center;
        justify-content: center;
        border: 2px solid #ffffff;
        i{
            font-size: 2.6rem;
        }
    }
    .content {
        flex:1;
        display: flex;
        flex-direction: column;
        gap: .2rem;
        h5{
            font-size: 1.3rem;
            padding-left: 2rem;
            position: relative;
            &::before{
                content: '';
                position: absolute;
                left: 0;
                top: 25%;
                transform: translate(-50%);
                width: .8rem;
                height: .8rem;
                background: ${props => props.indicator};
            }
        }

        .inner-content {
            display: flex;
            justify-content: space-between;
            align-items: center;
            .text {
                display: flex;
                aligns-items: center;
                gap: 1.5rem;
                p{
                    display: flex;
                    align-items: center;
                    gap: 0.5rem;
                    color: var(--primary-color);
                    opactiy: 0.8;
                }
            }
        }
    }
`;

export default IncomeItem
