const express = require('express');
const cors = require('cors');
const app = express();
const fs = require('fs');

app.use(cors());
app.use(express.json());

const PORT = 8989;

app.get('/api/formtypes', (req, res, next) => {
  const types = JSON.parse(fs.readFileSync('./FormsTypes.json', 'utf-8'));
  res.json(types);  
})

app.listen(PORT, () => console.log(`App ist listening on http://localhost:${PORT}`))