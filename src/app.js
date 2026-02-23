import express from "express";
import cors from "cors";
import { connectDB } from "./db.js";
import "./mqtt/mqttClient.js";
import userRoutes from "./routes/userRoutes.js";
import operationRoutes from "./routes/operationRoutes.js";
import detectionRoutes from "./routes/detectionRoutes.js";

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/users", userRoutes);
app.use("/api/operations", operationRoutes);
app.use("/api/detections", detectionRoutes);

await connectDB();

app.listen(3000, () => console.log("Server running on port 3000"));
