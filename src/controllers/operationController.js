import Operation from "../models/Operation.js";

export const createOperation = async (req, res) => {
  res.json(await Operation.create(req.body));
};

export const getOperation = async (req, res) => {
  res.json(await Operation.findById(req.params.id).populate("userId"));
};

export const getUserOperations = async (req, res) => {
  res.json(await Operation.find({ userId: req.params.userId }));
};

export const updateOperation = async (req, res) => {
  res.json(await Operation.findByIdAndUpdate(req.params.id, req.body, { returnDocument: "after" }));
};

export const deleteOperation = async (req, res) => {
  await Operation.findByIdAndDelete(req.params.id);
  res.json({ message: "deleted" });
};