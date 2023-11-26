import React, { useEffect } from 'react'
import styled from 'styled-components'
import Chart from './Chart';
import { dollar } from '../Utils/Icons'
import { useGlobalContext } from '../Context/globalContext';
import History from './History';


function Dashboard() {

  const {totalExpense, totalIncome, Balance, getTransactions, incomes, expenses} = useGlobalContext()

  useEffect(() => {
   getTransactions()
  }, [])

  return (
        <DashboardStyled>
            <div className='inner-layout'>
               <h1>All Transactions</h1>
               <div className='stats-con'>
                  <div className='chart-con'>
                    <Chart />
                    <div className='amount-con'>
                      <div className='dashboard-income'>
                        <h2>Total Income</h2>
                        <p>
                          {dollar}{totalIncome()}
                        </p>
                      </div>
                      <div className='expense'>
                        <h2>Total Expenses</h2>
                        <p>
                          {dollar}{totalExpense()}
                        </p>
                      </div>
                      <div className='balance'>
                        <h2>Balance</h2>
                        <p>
                          {dollar}{Balance()}
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className='history-con'>
                    <History/>
                    <h2 className='salary-title'>Min <span>Income</span>Max</h2>
                    <div className='salary-item'>
                      <p>
                        {Math.min(...incomes.map((item) =>item.trans_amount)) !== 'Infinity' ? Math.min(...incomes.map((item) =>item.trans_amount)) : 0} 
                      </p>
                      <p>
                        {Math.max(...incomes.map((item) =>item.trans_amount)) !== '-Infinity' ? Math.max(...incomes.map((item) =>item.trans_amount)) : 0}
                      </p>
                    </div>
                    <h2 className='salary-title'>Min <span>Expense</span>Max</h2>
                    <div className='salary-item'>
                      <p>
                        {Math.min(...expenses.map((item) =>item.trans_amount)) !== 'Infinity' ? Math.min(...expenses.map((item) =>item.trans_amount)) : 0 }
                      </p>
                      <p>
                        {Math.max(...expenses.map((item) =>item.trans_amount)) !== '-Infinity' ? Math.max(...expenses.map((item) =>item.trans_amount)) : 0 }
                      </p>
                    </div>
                  </div>
               </div>
            </div>
        </DashboardStyled>
  )
}

const DashboardStyled = styled.div`
    .inner-layout{
      padding: 2rem 1.5rem;
      width: 100%;
    }
    .stats-con{
      display: grid;
      grid-template-columns: repeat(5, 1fr);
      gap: 2rem;
      .chart-con {
        grid-column: 1/4;
        height: 400px;
        .amount-con{
          display:grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 2rem;
          margin-top: 2rem;
          .dashboard-income, .expense{
            grid-column: span 2;
          }
          .dashboard-income, .expense, .balance {
            background: #fcf6f9;
            border: 2px solid #ffffff;
            box-shadow: 0px 1px 15px rgba(0,0,0,0.06);
            border-radius: 20px;
            padding: 1rem;
            p{ 
              font-weight: 700;
              font-size: 3.5rem;
              
            }
          }
          .balance {
            grid-column: 2/4;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            p{
              font-weight: 700;
              font-size: 4.5rem;
            }
          }
        }
      }
      .history-con {
        grid-column: 4/-1;
        h2{
          margin: 1rem 0;
          display: flex;
          aligns-items: center;
          justify-content: space-between;
        }
        .salary-title {
          font-size: 1.2rem;
          span {
            font-size: 1.8rem;
          }
        }
        .salary-item {
          background: #fcf6f9;
          border: 2px solid #ffffff;
          box-shadow: 0px 1px 15px rgba(0,0,0,0.06);
          border-radius: 20px;
          padding: 1rem;
          display: flex;
          justify-content: space-between;
          align-items: center;
          p {
            font-weight: 600;
            font-size: 1.6rem;
          }
        }

      }
    }
`;

export default Dashboard
