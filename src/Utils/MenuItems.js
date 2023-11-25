import { dashboard, expenses, transactions, trend, user } from "./Icons";

export const menuItems = [
    {
        id: 1,
        title: 'Dashboard',
        icon: dashboard,
        link: '/dashboard'
    },
    {
        id: 2,
        title: ' Discussion',
        icon: transactions,
        link: '/discussion'
    },
    {
        id: 3,
        title: 'Incomes',
        icon: trend,
        link: '/incomes'
    },
    {
        id: 4,
        title: 'Expenses',
        icon: expenses,
        link: '/expenses'
    },
    {
        id: 5,
        title: 'Reports',
        icon: user,
        link: '/reports'
    },
]