"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userController = void 0;
const UserService_1 = require("../services/UserService");
exports.userController = {
    create: async (req, res, next) => {
        try {
            const { name, email, password } = req.body;
            if (!name || !email || !password) {
                res.status(400).json({ error: 'Name, email, and password are required' });
                return;
            }
            if (password.length < 6) {
                res.status(400).json({ error: 'Password must be at least 6 characters' });
                return;
            }
            const user = await UserService_1.userService.create(name, email, password);
            res.status(201).json(user);
        }
        catch (error) {
            if (error instanceof Error && error.message === 'Email already exists') {
                res.status(409).json({ error: 'Email already exists' });
                return;
            }
            next(error);
        }
    },
    getAll: async (req, res, next) => {
        try {
            const users = await UserService_1.userService.findAll();
            res.json(users);
        }
        catch (error) {
            next(error);
        }
    },
    getById: async (req, res, next) => {
        try {
            const user = await UserService_1.userService.findById(req.params.id);
            if (!user) {
                res.status(404).json({ error: 'User not found' });
                return;
            }
            res.json(user);
        }
        catch (error) {
            next(error);
        }
    },
    update: async (req, res, next) => {
        try {
            const { name, email } = req.body;
            const data = {};
            if (name)
                data.name = name;
            if (email)
                data.email = email;
            const user = await UserService_1.userService.update(req.params.id, data);
            if (!user) {
                res.status(404).json({ error: 'User not found' });
                return;
            }
            res.json(user);
        }
        catch (error) {
            next(error);
        }
    },
    delete: async (req, res, next) => {
        try {
            const deleted = await UserService_1.userService.delete(req.params.id);
            if (!deleted) {
                res.status(404).json({ error: 'User not found' });
                return;
            }
            res.status(204).send();
        }
        catch (error) {
            next(error);
        }
    },
    login: async (req, res, next) => {
        try {
            const { email, password } = req.body;
            if (!email || !password) {
                res.status(400).json({ error: 'Email and password are required' });
                return;
            }
            const user = await UserService_1.userService.verifyCredentials(email, password);
            if (!user) {
                res.status(401).json({ error: 'Invalid credentials' });
                return;
            }
            res.json({ user, token: 'mock-jwt-token' });
        }
        catch (error) {
            next(error);
        }
    },
};
//# sourceMappingURL=UserController.js.map