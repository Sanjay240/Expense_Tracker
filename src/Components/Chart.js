/** This is a Chart component it takes date and amount of transactions and display all the incomes in the green line and expenses with the red line */

import React from 'react'
import {Chart as ChartJs, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, ArcElement} from  'chart.js'
import {Line} from 'react-chartjs-2'
import styled from 'styled-components'
import { dateFormat } from '../Utils/DateFormat'
import { useGlobalContext } from '../Context/globalContext'

ChartJs.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip, 
    Legend,
    ArcElement
)


function Chart() {

    const {incomes, expenses} = useGlobalContext()

    const data = {
        labels: incomes.map((income) => {
            const {trans_date} = income
            return dateFormat(trans_date)
        }),
        datasets: [
            {
                label: 'Income',
                data: [
                    ...incomes.map((income) => {
                        const {trans_amount} = income
                        return trans_amount
                    })
                ],
                backgroundColor: 'green',
                tension: 0.2
            },
            {
                label: 'Expense',
                data: [
                    ...expenses.map((expense) => {
                        const {trans_amount} = expense
                        return trans_amount
                    })
                ],
                backgroundColor: 'red',
                tension: 0.2
            }
            

        ]
    }

  return (
    <ChartStyled>
        <Line data={data}/>
    </ChartStyled>
  )
}

const ChartStyled = styled.div`
    background: #fcf6f9;
    border: 2px solid #ffffff;
    box-shadow: 0px 1px 15px rgba(0,0,0,0.06);
    padding: 1rem;
    border-radius: 20px;
    height: 100%;
`;

export default Chart
