import mongoose from "mongoose";

const connect = async () => {
    console.log("Connection Successfull");
    // await mongoose.connect('mongodb://127.0.0.1:27017/ecart_db') //for Local
    await mongoose.connect('mongodb+srv://sagarkurewar:Nn7jCuHQRRK1q6Am@cluster1.o2baztf.mongodb.net/ecart_db') //for MongoDB ATLAS
}

export default connect;