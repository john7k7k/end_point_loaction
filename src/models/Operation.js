import mongoose from "mongoose";

const OperationSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true
  },

  startTime: { type: Date, required: true },

  endTime: { type: Date },

  description: String
});

export default mongoose.model("Operation", OperationSchema);


