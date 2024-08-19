import express from 'express';
import mysql from 'mysql2';
import cors from 'cors';

const app = express();
app.use(express.json());
app.use(cors({origin:'*'}));

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '0503rayudu',
    database: 'createlist'
});

db.connect((err) => {
    if (err) {
        console.error('Database connection error:', err);
        return;
    }
    console.log('Connected to the database');
});

app.get('/', (req, res) => {
    res.json('This is backend');
});

app.get('/admin', (req, res) => {
    const q = "SELECT * FROM admin";
    db.query(q, (err, data) => {
        if (err) return res.status(500).json(err);
        return res.status(200).json(data);
    });
});
app.delete('/admin', (req, res) => {
    const q = "DELETE FROM admin"; // This will delete all rows from the table

    db.query(q, (err, data) => {
        if (err) {
            console.error('Error deleting all orders:', err);
            return res.status(500).json({ error: 'Error deleting all orders' });
        }
        return res.status(200).json({ message: 'All orders deleted successfully' });
    });
});


app.post('/admin', (req, res) => {
    const { customer, date, status, profit, total } = req.body;
    const q = "INSERT INTO admin (`Customer`, `Date`, `status`, `Profit`, `Total`) VALUES (?)";
    const values = [customer, date, status, profit, total];

    db.query(q, [values], (err, data) => {
        if (err) return res.status(500).json(err);
        return res.status(201).json(data);
    });
});


app.listen(5000, () => {
    console.log('Server is running on port 5000');
});
