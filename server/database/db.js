import mongoose from "mongoose";

const connection = async (username, password) => {
  const URL = `mongodb+srv://${username}:${password}@cluster0.ynr1vhb.mongodb.net/veerdb?retryWrites=true&w=majority`;

  
  mongoose.set('strictQuery', false);
   
  try {
    await mongoose.connect(URL, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
    })
    console.log("Database connected Successfully");
  } catch (error) {
    console.log("Error while connecting with the database", error);
  }
};

export default connection;
