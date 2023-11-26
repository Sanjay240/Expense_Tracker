import React, { useEffect } from 'react'
import styled from 'styled-components'
import { user , transactions} from '../Utils/Icons';
import { useGlobalContext } from '../Context/globalContext';

function Report() {

    const { users, usersName, totalTransaction, transaction} = useGlobalContext();

    useEffect(() => {
      users();
      totalTransaction();
    })
  return (
    <ReportStyled>
     <div className='inner-layout'>
        <h1>Reports</h1>
        <h2>Summary of your app</h2>
        <div className='admin-stats'>
        <div className='users'>
                <h2>Total User: {usersName.length}</h2>
                <ul>
                {
                  usersName.map((name) =>{
                   return <li>{user}{name['user_name']}</li> 
                  })
                   
                }
                </ul>
        </div>
        <div className='transaction'>
                <h2>Total Transactions</h2>
                <p>
                    {transactions} {transaction}
                </p>
        </div>
        </div>
        
    </div>
    </ReportStyled>
  
  )
}


const ReportStyled = styled.div`

    .inner-layout h2 {
      display: flex;
      justify-content: center;
      align-items: center;
      background: #Fcf6f9;
      border: 2px solid #ffffff;
      box-shadow: 0px 1px 15px rgba(0,0,0,0.06);
      border-radius: 20px;
      padding: 1rem;
      margin: 1rem;
      font-size: 2rem;
      gap: .5rem;
      text-transform: uppercase;
    }

    .admin-stats {
        display: flex;
        gap: 10px;
        height: 100%;
    }

    .users {
      flex: 1;
      height: 100%;
    }

    .users ul {
      overflow-y: scroll;
      height: 100%;
    }

    .users ul li {
      width: 100%;
      line-height: 30px;
      font-size: 2rem;
      margin-bottom: 10px;
    }

    .users ul li i {
      margin-right: 10px;
    }

    .users, .transaction {
        background: #fcf6f9;
        border: 2px solid #ffffff;
        box-shadow: 0px 1px 15px rgba(0,0,0,0.06);
        border-radius: 20px;
        padding: 1rem;
        margin-bottom: 1rem;
        p{ 
          font-weight: 700;
          font-size: 3.5rem;
          
        }
    }

`;

export default Report
