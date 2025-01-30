import app from "./app";
import Database from "./config/db";

const PORT = process.env.PORT || 5000;

app.listen(PORT, async () => {
    await Database.connect();
  console.log(`🚀 Server running on port ${PORT}`);
});
