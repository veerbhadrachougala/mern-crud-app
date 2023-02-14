import mongoose from "mongoose";

const connection = async (username, password) => {
  const DB =
    `mongodb+srv://${username}:${password}@cluster0.wgfkgxm.mongodb.net/veerdb?retryWrites=true&w=majority`;

  try {
    await mongoose.connect(DB, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
    });
    mongoose.set('strictQuery', false);
    console.log("Database connected Successfully");
  } catch (error) {
    console.log("Error while connecting with the database", error);
  }
};

export default connection;
