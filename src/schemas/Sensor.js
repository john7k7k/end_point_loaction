import mongoose from "mongoose";
import Vector3Schema from "./Vector3.js";

const SensorSchema = new mongoose.Schema(
  {
    timestamp: { type: Date, required: true },
    imu: Boolean,
    acceleration: Vector3Schema,
    gyroscope: Vector3Schema,
    devicePosition: Vector3Schema
  },
  { _id: false }
);

export default SensorSchema;
