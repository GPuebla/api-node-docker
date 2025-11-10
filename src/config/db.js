import mongoose from 'mongoose'

const connectDB = async () =>{
    try {
        await mongoose.connect('mongodb+srv://gabrielpuebla16:mongo123@gpuebla.drh3fdg.mongodb.net/library')
        console.log("✅ Conectado a MongoDB (library)")
    } catch (error) {
        console.error("❌ Error al conectar a MongoDB:", error);
    }
}

export default connectDB;