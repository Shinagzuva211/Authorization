import { Router } from 'express';
import { userController } from '../controllers/UserController';

const router = Router();

router.post('/register', userController.create);
router.post('/login', userController.login);
router.get('/', userController.getAll);
router.get('/:id', userController.getById);
router.put('/:id', userController.update);
router.delete('/:id', userController.delete);

export default router;