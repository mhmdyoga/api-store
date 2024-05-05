// api/data.js (Contoh Vercel Function)
const data = require('../db.json'); // Mengimpor data JSON Anda

module.exports = (req, res) => {
  if (req.method === 'GET') {
    res.status(200).json(data);
  } else {
    res.status(405).end(); // Metode HTTP tidak diizinkan selain GET
  }
};
