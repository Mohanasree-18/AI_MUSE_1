const express = require("express");
const app = express();
const cookieParser = require("cookie-parser");
require("dotenv").config();
const cron = require("node-cron");
const cors = require("cors");
const usersRouter = require("./routes/usersRouter");
const { errorHandler } = require("./middlewares/errorMiddleware");
const AIRouter = require("./routes/AIRouter");
const stripeRouter = require("./routes/stripeRouter");

//!database
const connectDB = require("./utils/connectDB");
connectDB();

//! MIDDLEWARES
app.use(express.json()); // to parse incoming JSON data
app.use(cookieParser()); // to parse cookies
app.use(errorHandler); // error handler middleware

//! CORS
const corsOptions = {
  origin: "https://ai-muse-1-frontend.vercel.app", // Update this to match your frontend URL
  credentials: true, // This allows cookies to be sent from the client
};
app.use(cors(corsOptions));

//! ROUTES
app.use("/api/v1/users", usersRouter);
app.use("/api/v1/openai", AIRouter);
app.use("/api/v1/stripe", stripeRouter);

//! NOTE: Vercel does not support persistent processes, so cron jobs need to be handled differently
// Consider using external services for cron jobs or triggering them via HTTP requests

// Export the Express app to be used as a serverless function in Vercel
module.exports = app;

// Commented out server listen code as Vercel manages it automatically
// const PORT = process.env.PORT || 8090;
// app.listen(PORT, () => {
//   console.log(`Server is running on PORT: ${PORT}`);
// });

