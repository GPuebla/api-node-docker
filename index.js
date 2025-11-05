import express from 'express';
import userRoutes from './src/routes/userRoute.js'

const app = express();
const PORT = process.env.PORT || 3000;
app.use(express.json());

//Routes
app.use('/api/users',userRoutes);


app.listen(PORT, () => console.log(`Servidor corriendo en puerto ${PORT}`));