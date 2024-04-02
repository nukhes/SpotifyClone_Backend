const { response } = require('express');
const usersModel = require('../models/usersModel');

const getUsers = async (_req, res) => {
  const users = await usersModel.getUsers();
  return res.status(200).json(users);
};

const addUser = async (req, res) => {
  const createdUser = await usersModel.addUser(req.body);
  return res.status(201).json(createdUser);
}

const removeUser = async (req, res) => {
  const { id } = req.params;
  const removeUser = await usersModel.removeUser(id);
  return res.status(204).json();
}

const updateUser = async (req, res) => {
  const { id } = req.params;
  
  await usersModel.updateUser(id, req.body);
  return res.status(204).json();
}

module.exports = {
  getUsers,
  addUser,
  removeUser,
  updateUser
};