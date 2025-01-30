import mongoose from "mongoose";

class Database {
    private MONGO_URI = process.env.MONGO_URI || "";

    async connect(): Promise<void> {

        try {
            await mongoose.connect(this.MONGO_URI);
            console.log("✅ MongoDB Connected Successfully");
          } catch (error) {
            console.error("❌ MongoDB Connection Error:", error);
            process.exit(1);
          }

    }

}

export default new Database();