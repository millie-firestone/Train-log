"use strict";
// UserController.ts
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.loginUser = void 0;
const UserModel_1 = __importDefault(require("../Models/UserModel"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const loginUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { username, password } = req.body;
        // Find the user by username
        const user = yield UserModel_1.default.findOne({ username });
        // Check if the user exists and the password is correct
        if (!user || !(yield user.comparePassword(password))) {
            return res.status(401).json({ error: 'Invalid username or password' });
        }
        // Generate a JWT token for authentication
        const token = generateJwtToken("User");
        res.json({ token });
    }
    catch (error) {
        res.status(500).json({ error: 'Internal server error' });
    }
});
exports.loginUser = loginUser;
const crypto = require('crypto');
const secretKey = crypto.randomBytes(32).toString('hex');
console.log(secretKey);
const generateJwtToken = (user) => {
    return jsonwebtoken_1.default.sign({ username: 'User' }, secretKey, { expiresIn: '24h' });
};
