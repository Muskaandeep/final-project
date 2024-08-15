// server.js
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const userRoutes = require('./routes/userRoutes');
const expenseRoutes = require('./routes/expenseRoutes');

const app = express();
const PORT = 5000;

app.use(cors());
app.use(bodyParser.json());

mongoose.connect('mongodb://localhost/expense-tracker', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

app.use('/api/users', userRoutes);
app.use('/api/expenses', expenseRoutes);

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
