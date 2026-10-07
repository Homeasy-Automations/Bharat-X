import mongoose from "mongoose";

let ready = false;

export async function connectDB(): Promise<void> {
  const uri = process.env.MONGO_URI;
  if (!uri) {
    console.warn("[db] ⚠️ MONGO_URI not provided. Contact inquiries will not be stored in MongoDB.");
    return;
  }

  try {
    await mongoose.connect(uri, { serverSelectionTimeoutMS: 8000 });
    ready = mongoose.connection.readyState === 1;
    console.log(`[db] ✅ MongoDB connected successfully to database: "${mongoose.connection.name}"`);
  } catch (err) {
    console.error(
      "[db] ❌ MongoDB connection error:",
      err instanceof Error ? err.message : err,
    );
  }

  mongoose.connection.on("disconnected", () => {
    ready = false;
    console.warn("[db] ⚠️ MongoDB connection lost.");
  });

  mongoose.connection.on("reconnected", () => {
    ready = true;
    console.log("[db] ✅ MongoDB reconnected.");
  });
}

export const isDbReady = (): boolean => ready || mongoose.connection.readyState === 1;

