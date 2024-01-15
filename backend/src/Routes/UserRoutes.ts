// routes/UserRoutes.ts
import express from "express";
import { registerUser, loginUser } from "../Controllers/UserController";

const router = express.Router();

// Define routes for user registration and login
router.post('/register', registerUser);
router.port('/login', loginUser);

export default router;