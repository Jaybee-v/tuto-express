import { Router } from "express";
import {
  createUser,
  deleteUser,
  getUserById,
  getUsers,
  updateUser,
} from "../controllers/userController.js";

const userRoutes = Router();

// READ (GET)
userRoutes.get("/", getUsers);
userRoutes.get("/:id", getUserById);

// CREATE (POST)
userRoutes.post("/", createUser);

// UPDATE (PUT)
// Eventuellement PATCH
userRoutes.put("/:id", updateUser);

// DELETE (DELETE)
userRoutes.delete("/:id", deleteUser);

export default userRoutes;
