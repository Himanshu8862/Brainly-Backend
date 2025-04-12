import * as mongoose from "mongoose";
import * as dotenv from "dotenv";

dotenv.config();

export async function connectToDatabase() {
    const uri = process.env.DB_CONNECTION_STRING;
    // console.log(uri);
    if (!uri) {
        throw new Error("Missing DB_CONNECTION_STRING in environment variables");
    }

    try {
        await mongoose.connect(uri);
        console.log(`Connected to MongoDB at ${uri}`);
    } catch (error) {
        console.error("❌ MongoDB connection error:", error);
        throw error;
    }
}
