const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.json({ message: 'Hola desde Docker!' });
});

app.listen(PORT, () => console.log(`Servidor corriendo en puerto ${PORT}`));