import Detection from "../models/Detection.js";

export const createDetection = async (req, res) => {
  res.json(await Detection.create(req.body));
};

export const getOperationDetections = async (req, res) => {
  res.json(await Detection.find({ operationId: req.params.operationId }));
};

export const updateDetection = async (req, res) => {
  res.json(await Detection.findByIdAndUpdate(req.params.id, req.body, { returnDocument: "after" }));
};

export const deleteDetection = async (req, res) => {
  await Detection.findByIdAndDelete(req.params.id);
  res.json({ message: "deleted" });
};