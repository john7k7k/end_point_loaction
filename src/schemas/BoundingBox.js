import mongoose from "mongoose";

const BoundingBoxSchema = new mongoose.Schema(
  {
    x: Number,
    y: Number,
    width: Number,
    height: Number
  },
  { _id: false }
);

export default BoundingBoxSchema;
