import express from "express";
import * as dotenv from "dotenv";
import cors from "cors";
import connectDB from "./mongodb/connect.js";
import postRoutes from "./routes/postRoutes.js";
import Stripe from 'stripe';

dotenv.config(); // Helps pull env variables from .env file

const app = express();
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
  apiVersion: '2020-08-27', // Ensure you are using the latest Stripe API version
});

app.use(cors());
app.use(express.json({ limit: "50mb" }));
app.use("/api/v1/post", postRoutes);

console.log("here now");

app.get("/", async (req, res) => {
  res.send("Hello from prodia");
});

// Endpoint to create a payment charge
app.post('/charge', async (req, res) => {
  try {
    const { amount, currency, source, description } = req.body;

    // Create a charge using the Stripe API
    const charge = await stripe.charges.create({
      amount,
      currency,
      source,
      description,
    });

    // Respond with success message or any data you want
    res.status(200).json({ message: 'Payment successful', charge });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Payment failed' });
  }
});

const port = process.env.PORT || 8080;

const startServer = async () => {
  try {
    connectDB(process.env.MONGODB_URL);
    app.listen(port, () => console.log(`Server started on port ${port}`));
  } catch (error) {
    console.log(error);
  }
};

startServer();
