/** All the calls to the API are made in this file */
import React, { useContext, useState } from "react";
import axios from 'axios';

const BASE_URL = "https://expensetracker00-a74036bbc404.herokuapp.com/api";

const GlobalContext = React.createContext()

export const GlobalProvider = ({children}) => {

    const [incomes, setIncomes] = useState([]) // stores all the incomes in an array
    const [expenses, setExpenses] = useState([]) // stores all the exprenses in an array
    const [message, setMessage] = useState([]) // stroes all the messages in an arrray
    const [usersName, setUsersName] = useState([]);
    const [transaction, setTransaction] = useState();
    axios.defaults.withCredentials = true;


 /**------------- User Authentication and register new user request to the server---------------------------------- */
    const registerUser = async(user) => {
        let stat = {status: '' , message: ''};
        await axios.post(`${BASE_URL}/auth/register` , user)
                .then((res) => {
                  stat = {status: res.data.status, message: res.data.message}
                   
                })
                .catch((err) => {
                    console.log(err)
                    stat = {status: 'error', message: "Server error can't register user!"}

                })
                
                return stat
    }

    const users = async() => {
        let data = [];
        await axios.get(`${BASE_URL}/auth/user`)
            .then((res) => {
                console.log(res.data);
                setUsersName(res.data);
                data = res.data;
            })
            .catch((err) => {
                console.log(err);
                data = []
            })
            return data;
    }

    const logUser = async(user) => {
        let data;
        await axios.post(`${BASE_URL}/auth/login` , user)
                .then((res) => {
                    console.log(res);
                    data = res.data
                })
                .catch((err) => {
                    console.log(err);
                    data = err
                })
            return data;
    }

    const verifyUser = async() => {
        let data;
        await axios.get(`${BASE_URL}/auth`)
        .then ((res) => {
            data = res.data
        })
        .catch((err) => {
            data = err
        })
        return data;

    }

    const logoutUser = async() => {
        let data;
        await axios.get(`${BASE_URL}/auth/logout`)
        .then((res) => {
            data = res.data;
        })
        .catch ((err) => {
            data = err
        })
        return data;
    }


/**----------------------- functionalities to handle curd operation on the transactions ------------------------------------------------ */

    const totalTransaction = async() => {
        await axios.get(`${BASE_URL}/transaction/totalTrans`)
            .then((res) => {
                setTransaction(res.data.trans);
            })
            .catch((err) => {
                console.log(err);
            })
    }

    const addTransaction = async (trans) => {
       await axios.post(`${BASE_URL}/transaction/addTrans` , trans)
                .catch((err) => {
                    console.log(err)
                })
        getTransactions()
    }

    const insertTransaction = async (trans) => {
        console.log(trans);
        await axios.post(`${BASE_URL}/transaction/updateTrans`, trans)
                    .catch((err) => {
                        console.log(err)
                    })
            getTransactions()
    }
   
    const getTransactions = async () => {
        const user_id = localStorage.getItem('userId');
        const response = await axios.get(`${BASE_URL}/transaction/getTrans/${user_id}`)
        if(response.data === 'No Transaction Found'){
            return;
        }
        setExpenses(response.data.filter(trans => {
            return trans.trans_type === 'expense'
        }))
        setIncomes(response.data.filter(trans => {
            return trans.trans_type === 'income'
        }))

    }

    const deleteTransaction = async(id) => {
        await axios.delete(`${BASE_URL}/transaction/deleteTrans/${id}`)
        getTransactions()
    }

    const transactionHistory = () => {
        const history = [...incomes, ...expenses]
        history.sort((a,b) => {
            return new Date(b.trans_date) - new Date(a.trans_date)
        })
        return history.slice(0, 3)
    }

/**------------------- functionlities to handle income total, expense total and balance remaining */

    const totalIncome = () => {
        let totalIncome = 0;
        incomes.forEach((income) => {
            totalIncome += income.trans_amount
        })
        return totalIncome;
    }

    const totalExpense = () => {
        let totalExpense = 0;
        expenses.forEach((expense) => {
            totalExpense += expense.trans_amount
        })
        return totalExpense;
    }

    const Balance = () => {
        return totalIncome() - totalExpense()
    }

 
    /**------------------ functions on the messages applied -------------------------- */

    const addMessage = async(message) => {
        await axios.post(`${BASE_URL}/message/addMessage`, message)
                .catch((err) => {
                    console.log(err)
                })
                getMessages();
    }

    const getMessages = async() => {
        const response = await axios.get(`${BASE_URL}/message/getMessage`)
        if(response.data === 'No messages Found'){
            return;
        }
        setMessage(response.data)
    }

    const updateMessage = async(message_id, likes) => {
        const newObject = {id:message_id, like: likes}
        await axios.post(`${BASE_URL}/message/updateMessage`, newObject)
                .catch((err) => {
                    console.log(err)
                })
        getMessages();
    }


    
    return (
        <GlobalContext.Provider value={
            {
                addTransaction , getTransactions, incomes, deleteTransaction, totalIncome,
                expenses, totalExpense, Balance, transactionHistory, getMessages, addMessage, updateMessage, message, registerUser,  logUser,
                verifyUser, logoutUser, users, usersName, totalTransaction, transaction, insertTransaction
            }}>
            {children}
        </GlobalContext.Provider>
    )
}

export const useGlobalContext = () => {
    return useContext(GlobalContext)
}