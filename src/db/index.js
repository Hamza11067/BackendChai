import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";

export const connectDB = async () => {
  try {
    const connectionInstance = await mongoose.connect(
      `${process.env.MONGO_URI}/${DB_NAME}`
    );
    console.log(`MongoDB connected !! DB_HOST: ${connectionInstance}`);
  } catch (error) {
    console.log("ERROR : ", error);
    process.exit(1);
  }
};

