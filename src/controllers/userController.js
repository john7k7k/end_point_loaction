import User from "../models/User.js";

export const createUser = async (req, res) => {
  const user = await User.create(req.body);
  res.json(user);
};

export const getUsers = async (req, res) => {
  res.json(await User.find());
};

export const getUser = async (req, res) => {
  res.json(await User.findById(req.params.id));
};

export const updateUser = async (req, res) => {
  res.json(await User.findByIdAndUpdate(req.params.id, req.body, { returnDocument: 'after' }));
};

export const deleteUser = async (req, res) => {
  await User.findByIdAndDelete(req.params.id);
  res.json({ message: "deleted" });
};
