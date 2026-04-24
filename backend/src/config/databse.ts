import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    const mongoUri = process.env.MONGODB_URI;
    if (!mongoUri) {
      throw new Error("MONGODB_URI env is not deifned");
    }
    await mongoose.connect(mongoUri as string);
    console.log("MongoDB connected successfully");
  } catch (error) {
    console.error("MongoDB connection error: ", error);
    process.exit(1);
  }
};
