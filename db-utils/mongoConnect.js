import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const dbCluster = process.env.DB_CLUSTER || "";

const dbUserName = process.env.DB_USERNAME || "";

const dbPassword = process.env.DB_PASSWORD || "";

const dbName = process.env.DB_NAME || "";

const cloudURI = `mongodb+srv://${dbUserName}:${dbPassword}@${dbCluster}/${dbName}?retryWrites=true&w=majority&appName=Cluster0`;

const mongoConnect = async () => {
  try {
    await mongoose.connect(cloudURI);
    console.log("Db connection established");
  } catch (error) {
    console.error(error);
  }
};
export default mongoConnect;
