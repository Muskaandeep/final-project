// src/components/Dashboard.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Line } from 'react-chartjs-2';
import Chart from 'chart.js/auto';

const Dashboard = () => {
    const [expenses, setExpenses] = useState([]);
    const [total, setTotal] = useState(0);

    useEffect(() => {
        const fetchExpenses = async () => {
            const response = await axios.get('http://localhost:5000/api/expenses');
            setExpenses(response.data);
            const totalExpenses = response.data.reduce((acc, expense) => acc + expense.amount, 0);
            setTotal(totalExpenses);
        };

        fetchExpenses();
    }, []);

    const data = {
        labels: expenses.map(exp => new Date(exp.date).toLocaleDateString()),
        datasets: [{
            label: 'Expenses',
            data: expenses.map(exp => exp.amount),
            borderColor: 'rgba(75, 192, 192, 1)',
            backgroundColor: 'rgba(75, 192, 192, 0.2)'
        }]
    };

    return (
        <div>
            <h2>Dashboard</h2>
            <p>Total Expenses: ${total}</p>
            <Line data={data} />
        </div>
    );
};

export default Dashboard;
