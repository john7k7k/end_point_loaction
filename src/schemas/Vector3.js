import mongoose from "mongoose";

const Vector3Schema = new mongoose.Schema(
  {
    x: Number,
    y: Number,
    z: Number
  },
  { _id: false }
);

export default Vector3Schema;
