"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// routes/UserRoutes.ts
const express_1 = __importDefault(require("express"));
const UserController_1 = require("../Controllers/UserController");
const router = express_1.default.Router();
// Define routes for user registration and login
// router.post('/register', registerUser);
router.post('/login', UserController_1.loginUser);
exports.default = router;
