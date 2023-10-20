import mongoose from "mongoose";

let isConnected = false;

export const conntectToDB = async () => {
  mongoose.set('strictQuery', true);
  if (isConnected) {
    console.log('mongo DB is connected');
    return;
  }
  try {
    await mongoose.connect(process.env.MOGODB_URI, {
      dbName: "bgt",
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    isConnected = true;
    console.log('MongoDB connected');
  }
  catch (err) {
    console.log(err)
  }
}