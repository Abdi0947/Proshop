import mongoose, { connect } from "mongoose";

const connectDB = async () =>{
    try {
        const conn = await mongoose.connect(process.env.MONGO_URI);
        console.log(`Mongo is connected ${conn.connection.host}`)
    } catch (error) {
        console.log(`ERROR ${error.message}`)
        process.exit(1);
    }
}
export default connectDB;