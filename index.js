import express from 'express';
import userRoutes from './src/routes/userRoute.js'
import accountRoute from './src/routes/accountRoute.js'
import dbConnection from './src/config/db.js'
import bookRoute from "./src/routes/bookRoute.js";


const app = express();
const PORT = process.env.PORT || 3000;
app.use(express.json());

dbConnection();

//Routes

app.use('/api/users',userRoutes);
app.use('/ac',accountRoute);
app.use('/books', bookRoute);
app.use('/', (req,res)=>{res.send('Welcome 1')});




app.listen(PORT, () => console.log(`Servidor corriendo en puerto ${PORT}`));