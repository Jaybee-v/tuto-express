import UserService from "../services/userService.js";

const service = new UserService();

export const getUsers = (req, res) => {
  const users = service.findAll();
  res.json(users);
};

export const getUserById = (req, res) => {
  const { id } = req.params;
  const user = service.findById(parseInt(id));
  if (!user) {
    res.status(404).json({
      message: "User not found",
    });
    return;
  }
  res.json(user);
};

export const createUser = (req, res) => {
  const { name, age } = req.body;
  const createdUser = service.createUser({ name, age });
  if (!createdUser) {
    res.status(404).json({
      message: "An error occured",
    });
    return;
  }
  res.status(201).json({
    message: "User created successfully",
    user: createdUser,
  });
};

export const updateUser = (req, res) => {
  const { id } = req.params;
  const { name, age } = req.body;
  const updatedUser = service.updateUser(parseInt(id), { name, age });
  if (!updatedUser) {
    res.status(404).json({
      message: "An error occured",
    });
    return;
  }
  res.json({
    message: "User updated successfully",
    user: updatedUser,
  });
};

export const deleteUser = (req, res) => {
  const { id } = req.params;
  const isDeleted = service.deleteUser(parseInt(id));
  if (!isDeleted) {
    res.status(404).json({
      message: "You cant delete this account",
    });
    return;
  }
  res.json({
    message: "user deleted successfully",
  });
};
