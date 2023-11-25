import React from 'react'
import styled from 'styled-components'
import { useGlobalContext } from '../Context/globalContext';

function History() {
  const  {transactionHistory} = useGlobalContext()

  const [...history] = transactionHistory()

   return (
    <HistoryStyled>
      {history.map((item) => {
        const { trans_id, trans_title, trans_amount, trans_type} = item
        return (
          <div key={trans_id} className='history-item'>
            <p style={{color: trans_type === 'expense' ? 'red' : 'var(--color-green)'}}>
              {trans_title}
            </p>

            <p style={{color: trans_type === 'expense' ? 'red' : 'var(--color-green)'}}>
              {
                trans_type === 'expense' ? `-${trans_amount}` : `+${trans_amount}`
              }          
            </p>
          </div>
        )
      })}
    </HistoryStyled>
  )
}

const HistoryStyled = styled.div`

  display: flex;
  flex-direction: column;
  gap: 1rem;
  .history-item{
    background: #fcf6f9;
    border: 2px solid #ffffff;
    box-shadow: 0px 1px 15px rgba(0,0,0,0.06);
    padding: 1rem;
    border-radius: 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }


`;

export default History
