// UserController.ts

import { Request, Response } from 'express';
import UserModel, { User } from "../Models/UserModel";
import jwt from 'jsonwebtoken';

export const loginUser = async  (req: Request, res: Response) => {
    try {
        const {username, password} = req.body;

        // Find the user by username
        const user = await UserModel.findOne({username});

        // Check if the user exists and the password is correct
        if (!user || !(await user.comparePassword(password))) {
            return res.status(401).json({error: 'Invalid username or password'});
        }

        // Generate a JWT token for authentication
        const token = generateJwtToken(user);

        res.json({token});
    } catch (error) {
        res.status(500).json({error: 'Internal server error'});
    }
};

const crypto = reqiure('crypto');

const secretKey = crypto.randomBytes(32).toString('hex');
console.log(secretKey);

const generateJwtToken = (user: User) => {
    return jwt.sign({ username: user.username }, secretKey, { expiresIn: '24h' });
};
