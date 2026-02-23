import mongoose from "mongoose";
import BoundingBoxSchema from "../schemas/BoundingBox.js";
import SensorSchema from "../schemas/Sensor.js";

const DetectionSchema = new mongoose.Schema({
  operationId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Operation",
    required: true
  },

  timestamp: Date,
  imageId: String,
  objectClass: String,
  bbox: BoundingBoxSchema,
  depth: Number,
  sensors: [SensorSchema]
});

export default mongoose.model("Detection", DetectionSchema);
