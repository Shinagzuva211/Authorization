import { Request, Response, NextFunction } from 'express';
import { userService } from '../services/UserService';

export const userController = {
  create: async (req: Request, res: Response, next: NextFunction): Promise<void> => {
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

      const user = await userService.create(name, email, password);
      res.status(201).json(user);
    } catch (error) {
      if (error instanceof Error && error.message === 'Email already exists') {
        res.status(409).json({ error: 'Email already exists' });
        return;
      }
      next(error);
    }
  },

  getAll: async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const users = await userService.findAll();
      res.json(users);
    } catch (error) {
      next(error);
    }
  },

  getById: async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const user = await userService.findById(req.params.id as string);
      if (!user) {
        res.status(404).json({ error: 'User not found' });
        return;
      }
      res.json(user);
    } catch (error) {
      next(error);
    }
  },

  update: async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const { name, email } = req.body;
      const data: { name?: string; email?: string } = {};
      if (name) data.name = name;
      if (email) data.email = email;

      const user = await userService.update(req.params.id as string, data);
      if (!user) {
        res.status(404).json({ error: 'User not found' });
        return;
      }
      res.json(user);
    } catch (error) {
      next(error);
    }
  },

  delete: async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const deleted = await userService.delete(req.params.id as string);
      if (!deleted) {
        res.status(404).json({ error: 'User not found' });
        return;
      }
      res.status(204).send();
    } catch (error) {
      next(error);
    }
  },

  login: async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const { email, password } = req.body;

      if (!email || !password) {
        res.status(400).json({ error: 'Email and password are required' });
        return;
      }

      const user = await userService.verifyCredentials(email, password);
      if (!user) {
        res.status(401).json({ error: 'Invalid credentials' });
        return;
      }

      res.json({ user, token: 'mock-jwt-token' });
    } catch (error) {
      next(error);
    }
  },
};
