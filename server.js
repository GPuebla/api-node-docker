import dotenv from 'dotenv';
dotenv.config();

import app from './app.js';
import dbConnection from './src/config/db.js';

const PORT = process.env.PORT || 3000;

// Conectar a la base
dbConnection();

// Levantar servidor
app.listen(PORT, () => {
  console.log(`Servidor corriendo en puerto ${PORT}`);
});