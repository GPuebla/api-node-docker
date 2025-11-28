import mongoose from 'mongoose'

const connectDB = async () =>{
    try {
        await mongoose.connect('mongodb+srv://gabrielpuebla16:mongo123@gpuebla.drh3fdg.mongodb.net/logistic')
        console.log("✅ Conectado a MongoDB (Logistic)")
    } catch (error) {
        console.error("❌ Error al conectar a MongoDB:", error);
    }
}

export default connectDB;