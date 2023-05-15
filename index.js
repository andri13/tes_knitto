const express = require('express');
const mysql = require('mysql2/promise');

const app = express();
app.use(express.json());


const db = mysql.createPool({
  host: '127.0.0.1',
  user: 'root',
  password:'',
  database:'soal_test'
});


app.get('/api/produk', async (req, res) => {
  try {
    const [rows] = await db.query('SELECT * FROM produk');
    res.json(rows);
  } catch (error) {
    res.status(500).json({ message: 'Failed to fetch data from database' });
  }
});


app.post('/api/produk', async (req, res) => {
  const { nama_produk, harga, stok } = req.body;

  if (!nama_produk || !harga || !stok)  {
    return res.status(400).json({ message: 'Name and harga are required' });
  }

  try {
    await db.query('INSERT INTO produk (nama_produk, harga, stok) VALUES (?, ?, ?)', [nama_produk, harga, stok]);
    res.status(201).json({ message: 'Data created successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Failed to insert data into database' });
  }
});


app.listen(3000, () => {
  console.log('Server started on port 3000');
});
