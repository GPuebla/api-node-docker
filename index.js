const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.json({message:'Hola desde Docker!'});
});

app.get('/1', (req, res) => {
  res.json({message:'Respuesta 123'});
});

app.get('/2', (req, res) => {
  res.send('Funcionaaaaaa!!!');
});

app.listen(PORT, () => console.log(`Servidor corriendo en puerto ${PORT}`));